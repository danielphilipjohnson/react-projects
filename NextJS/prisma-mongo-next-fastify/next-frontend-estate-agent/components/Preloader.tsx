"use client";

import { useRef } from "react";
import { store } from "../store";
import { setHouses } from "../store/houseSlice";
import { HouseWithAddress } from "../types";

function Preloader({ houses }: { houses: HouseWithAddress[] }) {
	const loaded = useRef(false);
	if (!loaded.current) {
		store.dispatch(setHouses(houses));
		loaded.current = true;
	}

	return null;
}

export default Preloader;