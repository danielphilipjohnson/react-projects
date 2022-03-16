import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import { auth } from '../lib/firebase';

// Top navbar
export default function Navbar() {
	const { user, username } = useContext(UserContext);

	const router = useRouter();

	const signOut = () => {
		auth.signOut();
		router.reload();
	}

	return (
		<nav className="bg-white navbar h-20 w-full fixed top-0 px-8 font-bold border-b-slate-300 border z-10">
			<ul className='flex items-center justify-between h-full'>
				<li className='rounded-full'>
					<Link href="/">
						<button className="font-bold uppercase text-2xl py-2 px-4 bg-black text-white font-noto-sans">DEV.NO</button>
					</Link>
				</li>

				{/* user is signed-in and has username */}
				{username || user?.uid && (
					<>
						<li className="ml-auto">
							<button onClick={signOut}>Sign Out</button>
						</li>
						<li>
							<Link href="/admin">
								<button className="btn-blue">Write Posts</button>
							</Link>
						</li>
						<li>
							<Link href={`/${username}`}>
								<img className='rounded-md h-12 w-12 cursor-pointer' src={user?.photoURL || 'https://via.placeholder.com/150'} />
							</Link>
						</li>
					</>
				)}

				{/* user is not signed OR has not created username */}
				{!user?.uid && (
					<li>
						<Link href="/enter">
							<button className="bg-black text-white font-noto-sans px-4 py-2">Log in</button>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}