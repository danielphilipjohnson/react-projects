'use client'
import { Property } from "../../prisma-estate-agent/node_modules/.prisma/client";

import { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch, store } from "../store";

import { setHouses, setSearched } from "../store/houseSlice";


import { HouseType } from "../../../prisma-mongo-next-fastify/prisma-estate-agent/node_modules/.prisma/client";

import PricingMenu from "./search/pricingMenu"
import PropertyMenu from "./search/propertyTypeMenu"
import AmenitiesMenu from "./search/amenitiesMenu"

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function RadioStuff(props) {
	const ref = useRef(null);
	const { onClickOutside } = props;

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {

				setOpenPricing(false)
				setOpenAmenities(false)
				setOpenPropertyType(false)
				onClickOutside && onClickOutside();
			}
		};
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, [onClickOutside]);

	const searchHouses = async ({ houseStatus, houseType, minPriceRange, maxPriceRange, bedrooms, bathrooms, searchValue }: {
		houseStatus: string,
		houseType: HouseType,
		minPriceRange: number,
		maxPriceRange: number,
		bedrooms: number,
		bathrooms: number,
		searchValue: string
	}): Promise<Property[]> => {
		try {
			const res = await fetch(`http://localhost:8080/search?housetype=${houseType}&status=${houseStatus}&minprice=${minPriceRange}&maxprice=${maxPriceRange}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&location=${searchValue}`)
			const data = await res.json()
			return data.data
		} catch (error) {
			console.log(error)
		}
	}

	const getSelectedHouseStatus = (isRented: string) => {
		if (isRented.toLowerCase() === "buy")
			return "BUY"
		return "RENT"
	}

	const [openLocation, setOpenLocation] = useState<boolean>(false)

	const handleLocationClick = function () {

		setOpenLocation(!openLocation)
		setOpenPricing(false)
		setOpenAmenities(false)
		setOpenPropertyType(false)

	}


	const sendSearchData = async () => {
		const newPosts = await searchHouses({
			houseStatus: houseStatus,
			houseType: houseType,
			minPriceRange: minimumPrice,
			maxPriceRange: maximumPrice,
			bedrooms: amountOfBedrooms,
			bathrooms: amountOfBathrooms,
			searchValue: location
		});
		store.dispatch(setHouses(newPosts));
		store.dispatch(setSearched(true));
	}

	const [showPricing, setOpenPricing] = useState<boolean>(false)

	const handleShowPricingClick = function () {
		setOpenLocation(false)
		setOpenPricing(true)
		setOpenAmenities(false)
		setOpenPropertyType(false)
	}

	const [showPropertyType, setOpenPropertyType] = useState<boolean>(false)
	const handleShowPropertyTypeClick = function () {
		setOpenLocation(false)
		setOpenPropertyType(true)
		setOpenAmenities(false)
		setOpenPricing(false)
	}

	const [showAmenities, setOpenAmenities] = useState<boolean>(false)
	const handleShowAmenitiesClick = function () {
		setOpenLocation(false)
		setOpenAmenities(true)
		setOpenPricing(false)
		setOpenPropertyType(false)
	}
	const [amountOfBedrooms, setAmountOfBedrooms] = useState<number>(0)
	const [amountOfBathrooms, setAmountOfBathrooms] = useState<number>(0)

	const [minimumPrice, setMinimumPrice] = useState<number>(0)
	const [maximumPrice, setMaximumPrice] = useState<number>(0)
	const [houseType, setHouseType] = useState<HouseType>('APARTMENT')
	const [houseStatus, setHouseStatus] = useState<string>('BUY')
	const onChangeValue = (event) => {

		const houseStatus = getSelectedHouseStatus(event.target.value)
		setHouseStatus(houseStatus)
	}

	const [location, setLocation] = useState<string>('')
	const handleLocationChange = (event) => {
		setLocation(event.target.value)
	}
	return (
		<div>

			<h2 className="text-4xl text-white">{openLocation}</h2>

			<div className="flex justify-center" ref={ref} >

				<div className={"flex rounded-full border " + (openLocation || showPricing || showAmenities || showPropertyType ? "bg-gray-300" : 'bg-white')}>

					<div className={"rounded-full px-8 py-4 hover:bg-gray-300 duration-500 " + (openLocation ? "shadow-md bg-white hover:bg-white" : '')} onClick={handleLocationClick}>
						<p className="text-gray-800 font-semibold text-sm">Where</p>
						<input id="search" className="w-full bg-transparent placeholder:text-gray-500 placeholder:text-sm text-gray-800 focus:ring-0" type="text" placeholder="search destinations" onChange={handleLocationChange} />
					</div>

					<fieldset className=" bg-transparent px-8 py-4 hover:bg-gray-300 rounded-full">
						<p className="text-gray-800 font-semibold text-sm mb-1">Property Type</p>

						<div className="flex" onChange={onChangeValue}>
							<div className="flex items-center mr-4">
								<input id="buy" type="radio" value="buy" name="inline-radio-group" className="w-4 h-4 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2" />
								<label htmlFor="buy" className="ml-2 text-sm text-gray-800">Buy</label>
							</div>
							<div className="flex items-center mr-4">
								<input id="rent" type="radio" value="rent" name="inline-radio-group" className="w-4 h-4 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 " />
								<label htmlFor="rent" className="ml-2 text-sm text-gray-800">Rent</label>
							</div>
						</div>
					</fieldset>

					<div className={"bg-transparent px-8 py-4 hover:bg-gray-300 rounded-full relative z-10 " + (showPricing ? "shadow-md bg-white hover:bg-white" : '')} onClick={handleShowPricingClick}>
						<p className="text-gray-800 font-semibold text-sm mb-1">Set your Budget </p>
						<p className="text-sm text-gray-600">Add your pricing </p>
						<PricingMenu showPricing={showPricing} setMinimumPrice={setMinimumPrice} setMaximumPrice={setMaximumPrice} />
					</div>

					<div className={"bg-transparent px-8 py-4 hover:bg-gray-300 rounded-full relative z-10 " + (showPropertyType ? "shadow-md bg-white hover:bg-white" : '')} onClick={handleShowPropertyTypeClick}>
						<p className="text-gray-800 font-semibold text-sm mb-1">Property type</p>
						<p className="text-sm text-gray-600">Select property type</p>
						<PropertyMenu showMenu={showPropertyType} setHouseType={setHouseType} houseType={houseType} />
					</div>


					<div className={"bg-transparent px-8 py-4 hover:bg-gray-300 rounded-full relative z-10 " + (showAmenities ? "shadow-md bg-white hover:bg-white" : '')} onClick={handleShowAmenitiesClick} role="button">
						<div className="flex">
							<header className="mr-4">
								<h2 className="text-gray-800 font-semibold text-md">Amenities</h2>
								<h3 className="text-sm text-gray-500">Select your amenities</h3>
							</header>

							<button className=" bg-red-600 rounded-full px-4 text-white flex items-center transition-all " onClick={() => {


								sendSearchData()
							}}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 mr-2 ">
									<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
								</svg>

							</button>
						</div>

						<AmenitiesMenu bathrooms={amountOfBathrooms} setAmountOfBathrooms={setAmountOfBathrooms} bedrooms={amountOfBedrooms} setAmountOfBedrooms={setAmountOfBedrooms} showMenu={showAmenities} />
					</div>
				</div>
			</div>
		</div >

	);
}
