import HouseCards from "../../components/HouseCards";
import Preloader from "../../components/Preloader";
import { frontEndApiClient } from "../../apiClient/frontendClient";
import { notFound } from "next/navigation";


export default async function NewlistingPage() {
	const listings = await frontEndApiClient.getNewListings()
	if (!listings) {
		notFound()
	}
	return (
		<>
			<Preloader houses={listings} />
			<h1 className="font-bold text-4xl my-4">New listings</h1>
			<HouseCards />
		</>
	)
}