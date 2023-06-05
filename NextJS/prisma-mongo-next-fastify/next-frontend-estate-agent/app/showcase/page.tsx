import HouseCards from "../../components/HouseCards";
import Preloader from "../../components/Preloader";
import { HouseWithAddress } from "../../types";


async function getShowcaseHouses() {
	const res = await fetch('http://127.0.0.1:8080/houses/showcase', { next: { revalidate: null } })
	const data = await res.json()
	return data.data as HouseWithAddress[]
}


export default async function ShowcasePage() {

	const listings = await getShowcaseHouses()
	return (
		<>
			<Preloader houses={listings} />
			<h1 className="font-bold text-4xl my-4">Showcase</h1>
			<HouseCards />
		</>
	)
}