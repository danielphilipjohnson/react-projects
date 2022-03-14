import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

export default function CarsList(props) {
	// Could fetch this data from an API endpointå
	const [cars, setCars] = useState({
		cars: [
			{ name: "Tesla", link: "/cars/tesla" },
			{ name: "Ford", link: "/cars/ford" },
			{ name: "Lambo", link: "/cars/Lambo" },
		],
	});
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>Cars list</h1>

				<ul>
					{cars.cars.map((car) => {
						return (
							<li>
								<Link href={car.link}>
									{car.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</main>
		</div>
	);
}
