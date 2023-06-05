'use client'
import { Property} from "../../prisma-estate-agent/node_modules/.prisma/client";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { RootState, AppDispatch, store } from "../store";
import { setHouses } from "../store/houseSlice";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function LoadMoreContent() {

	const [pageCount, setPageCount] = useState(1)
	const houses = useAppSelector((state) => state.house.houses);
	const searched = useAppSelector((state) => state.house.searched);

	const loadMoreHouses = async (): Promise<Property[]> => {
		try {
			const res = await fetch(`http://localhost:8080/houses?page=${pageCount}`)
			const data = await res.json()
			return data.data
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>

			{!searched ? <div className="flex justify-center py-8">
				<button className="border w-full max-w-max px-4 py-2" onClick={async () => {
					const newPosts = await loadMoreHouses();
					store.dispatch(setHouses([...houses, ...newPosts]));
					setPageCount(pageCount + 1)
				}}
					type="button">Click me</button>
			</div> : ''}

		</div>
	);
}