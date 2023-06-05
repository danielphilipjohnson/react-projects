import HouseCards from "../../../components/HouseCards";
import HouseBar from "../../../components/houseBar"
import Preloader from "../../../components/Preloader";
import { frontEndApiClient } from "../../../apiClient/frontendClient";
import { notFound } from "next/navigation";


export default async function HouseTypePage({ params }) {
	const listings = await frontEndApiClient.getHouseByType(params.type.toUpperCase())
	if (!listings) {
		notFound()
	}

	return (
		<>
			<Preloader houses={listings} />
			<HouseBar />
			<h1 className="font-bold text-4xl mb-8 capitalize">{params.type} Houses</h1>
			<HouseCards />
		</>
	)
}