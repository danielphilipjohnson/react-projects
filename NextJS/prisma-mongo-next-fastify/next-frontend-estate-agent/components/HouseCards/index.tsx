"use client"

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import HouseCard from "./card"
import { RootState, AppDispatch } from "../../store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function HouseCards() {

	const houses = useAppSelector((state) => state.house.houses);
	return (
		<section className="grid grid-cols-4 gap-4">

			{houses ? houses.map((listing) => (
				<HouseCard key={listing.id} id={listing.id} status={listing.status} houseType={listing.houseType}
					price={listing.price}
					beds={listing.beds} baths={listing.baths} sqft={listing.sqft}
					description={listing.description} photos={listing.photos}
					address={listing.address} />
			)) : ""}
		</section>
	)
}