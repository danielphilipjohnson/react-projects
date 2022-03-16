import { auth, firestore, googleAuthProvider } from '../lib/firebase';
import { UserContext } from '../lib/context';

import { useEffect, useState, useCallback, useContext } from 'react';
import debounce from 'lodash.debounce';

export default function Enter(props) {
	const { user, username } = useContext(UserContext);

	return (
		<main className='mt-20 bg-slate-200 min-h-screen mb-4 pt-8'>
			{user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton />}
		</main>
	);
}

// Sign in with Google button
function SignInButton() {
	const signInWithGoogle = async () => {
		await auth.signInWithPopup(googleAuthProvider);
	};

	return (
		<div className='bg-white mx-auto max-w-xl text-center pt-4 border rounded overflow-hidden'>
			<h1 className='font-bold text-3xl leading-9 mb-3 pt-8'>Welcome to NO DEV community</h1>
			<p className=' leading-6 text-slate-800 mb-4'>DEV Community is a community of 816,648 amazing developers</p>
			<button className="mb-4 flex items-center max-w-md px-4 mx-auto w-full justify-center py-2 rounded  border bg-white text-black" onClick={signInWithGoogle}>
				<img className='mr-3' src={'/google.png'} width="30px" />
				<span>Sign in with Google</span>
			</button>
			<button className='mb-8 flex items-center max-w-md px-4 mx-auto w-full justify-center py-3 rounded  border bg-green-800 text-white' onClick={() => auth.signInAnonymously()}>
				Sign in Anonymously
			</button>
		</div>
	);
}

// Sign out button
function SignOutButton() {
	return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

// Username form
function UsernameForm() {
	const [formValue, setFormValue] = useState('');
	const [isValid, setIsValid] = useState(false);
	const [loading, setLoading] = useState(false);

	const { user, username } = useContext(UserContext);

	const onSubmit = async (e) => {
		e.preventDefault();

		// Create refs for both documents
		const userDoc = firestore.doc(`users/${user.uid}`);
		const usernameDoc = firestore.doc(`usernames/${formValue}`);

		// Commit both docs together as a batch write.
		const batch = firestore.batch();
		batch.set(userDoc, { username: formValue, photoURL: user.photoURL, displayName: user.displayName });
		batch.set(usernameDoc, { uid: user.uid });

		await batch.commit();
	};

	const onChange = (e) => {
		// Force form value typed in form to match correct format
		const val = e.target.value.toLowerCase();
		const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

		// Only set form value if length is < 3 OR it passes regex
		if (val.length < 3) {
			setFormValue(val);
			setLoading(false);
			setIsValid(false);
		}

		if (re.test(val)) {
			setFormValue(val);
			setLoading(true);
			setIsValid(false);
		}
	};

	//

	useEffect(() => {
		checkUsername(formValue);
	}, [formValue]);

	// Hit the database for username match after each debounced change
	// useCallback is required for debounce to work
	const checkUsername = useCallback(
		debounce(async (username) => {
			if (username.length >= 3) {
				const ref = firestore.doc(`usernames/${username}`);
				const { exists } = await ref.get();
				console.log('Firestore read executed!');
				setIsValid(!exists);
				setLoading(false);
			}
		}, 500),
		[]
	);

	return (
		!username && (
			<section className='bg-white mx-auto max-w-xl p-4'>
				<h2 className=' text-2xl font-bold pb-2'>User</h2>

				<form onSubmit={onSubmit}>
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							Name
						</label>
						<div className="my-3">
							<input
								type="text"
								name="name"
								id="name"
								className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 border rounded-md py-2 pl-3"
								placeholder="you@example.com"
							/>
						</div>
					</div>

					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							Username
						</label>
						<div className="my-3">
							<input
								type="text"
								name="username"
								id="username"
								className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 border rounded-md py-2 pl-3"
								placeholder="you@example.com"
								value={formValue} onChange={onChange}
							/>
						</div>
					</div>

					<div className="mb-3">
						<label htmlFor="photo" className="block text-sm font-medium text-gray-700">
							Photo
						</label>

						<div className="mt-1 flex items-center">
							<span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100 mr-4">
								<svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
									<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
								</svg>
							</span>

							<div className='border w-full py-2 px-6'>
								<input type="file" name="profile" id="profile" />
							</div>

						</div>
					</div>

					<UsernameMessage username={formValue} isValid={isValid} loading={loading} />

					<button type="submit" className="my-4 flex justify-center bg-purple-500 text-white w-full py-2 rounded px-2 max-w-md mx-auto text-center" disabled={!isValid}>
						Save Profile Information
					</button>
				</form>
			</section>
		)
	);
}

function UsernameMessage({ username, isValid, loading }) {
	if (loading) {
		return <p>Checking...</p>;
	} else if (isValid) {
		return <p className=" text-green-600">{username} is available!</p>;
	} else if (username && !isValid) {
		return <p className="text-red-600">That username is taken!</p>;
	} else {
		return <p></p>;
	}
}
