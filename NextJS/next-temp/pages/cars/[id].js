import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../../styles/Home.module.css'

export default function Car({ car, error }) {

	const router = useRouter()
	const { id } = router.query

	if (error) {
		return <div>Error! {error.message}</div>
	}

	return (
		<div className={styles.container}>

			<Head>
				<title>{car.color} {car.id}</title>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					{id}
				</h1>
				<Image
					src={car.image}
					alt="Picture of the author"
					width="500px"
					height="300px"

				/>
			</main>
		</div>
	)
}


export async function getServerSideProps({ params }) {
	const req = await fetch(`http://localhost:3000/${params.id}.json`);
	if (req.status !== 200) {
		return {
			props: { error: { message: "it isnt working" } }
		}
	}
	else {
		const data = await req.json();

		return {
			props: { car: data },
		}
	}

}