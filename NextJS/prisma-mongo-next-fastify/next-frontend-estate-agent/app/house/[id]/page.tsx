import { notFound } from "next/navigation"

import { frontEndApiClient } from "../../../apiClient/frontendClient";

import Badges from "../../../components/badges";

export default async function SingleHousePage({ params }) {
	const house = await frontEndApiClient.getHouseById(params.id)
	if (!house) {
		notFound()
	}

	return (
		<div className="px-24 my-8">
			<div className="grid grid-cols-2 gap-x-2">
				<figure className="relative" >
					<img className="rounded-tl-2xl rounded-bl-2xl w-full" src={house.photos[0]} alt="Shoes" />
					<span className=" bg-red-700 max-w-max absolute bottom-0 left-0 px-2 rounded text-white text-sm">{house.status}</span>
				</figure>
				<div>
					<div className="grid grid-cols-2 gap-2 mb-2">
						<img className="w-full" src={house.photos[1]} alt="Shoes" />
						<img className="w-full" src={house.photos[2]} alt="Shoes" />

					</div>
					<div className="grid grid-cols-2 gap-x-2">
						<img className="w-full" src={house.photos[3]} alt="Shoes" />
						<img className="w-full" src={house.photos[4]} alt="Shoes" />
					</div>
				</div>
			</div>

			<div className="py-4 w-full">
				<div className="flex justify-between w-full ">
					<h2 className="text-lg font-bold">
						{house.address.city}
					</h2>
					<p className="font-semibold text-lg">£{house.price}</p>
				</div>
				<h3 className="pb-4 capitalize text-sm text-gray-800">{house.houseType}</h3>
				<Badges bed={house.beds} bath={house.baths} sqft={house.sqft} />
				<hr />

				<h2 className="font-bold mt-4">Details</h2>
				<p className="mb-4 overflow-hidden whitespace-nowrap overflow-ellipsis">{house.description}</p>
			</div>
		</div>
	)
}