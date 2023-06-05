import { HouseWithAddress } from "../types";
import HouseCards from "../components/HouseCards"
import LoadMoreContent from "../components/LoadMoreContent"
import Preloader from "../components/Preloader";
import HouseBar from "../components/houseBar"


async function getFilteredListings() {
	const res = await fetch('http://127.0.0.1:8080/houses', { next: { revalidate: null } })
	const data = await res.json()
	return data.data as HouseWithAddress[]
}


export default async function HomePage() {
	const listings = await getFilteredListings()
	return (
		<>
			<Preloader houses={listings} />
			<HouseBar />

			<HouseCards />

			<LoadMoreContent />
		</>
	)
}