import { FlatIcon } from "../icons/flat";
import { CottageIcon } from "../icons/cottage";
import { HouseIcon } from "../icons/house";
import { MewsIcon } from "../icons/mews";
import { PenthouseIcon } from "../icons/penthouse";
import { RanchIcon } from "../icons/ranch";
import { SeaHouseIcon } from "../icons/seaHouse";
import { VillaIcon } from "../icons/villa";
import { HouseType } from "../../types";

type PropertyMenuProps = {
	showMenu: boolean,
	houseType: HouseType,
	setHouseType: (houseType: HouseType) => void,
}


export default function PropertyMenu(props: PropertyMenuProps) {

	const handlePropertyTypeclick = (propertyType: HouseType) => {
		props.setHouseType(propertyType)
	}

	const isActiveHouseTypeClass = (houseType: HouseType, selectedHouseType: HouseType) => {


		return (houseType === selectedHouseType) ? "border-blue-900" : ""
	}
	return (

		<div className={"w-max flex justify-center absolute top-20 mt-2 border z-10 bg-white rounded-2xl " + (props.showMenu ? "block" : "hidden")}>
			<div className="px-6 py-8 border-b">
				<div className="border-b pb-4">

					<h2 className="text-gray-800 font-semibold text-xl mb-6 text-center">What type of property do you want to buy?</h2>
					<ul className="flex justify-center space-x-4">


						<li>
							<button className="border pt-4 pb-2 px-2 rounded-2xl hover:bg-gray-100" onClick={() => handlePropertyTypeclick("FLAT")}>
								<FlatIcon />
								<h2 className="text-sm font-semibold py-2 text-center">
									Flat
								</h2>
							</button>
						</li>
						<li>
							<button className={"border pt-4 pb-2 px-2 rounded-2xl hover:bg-gray-100 " + (isActiveHouseTypeClass(props.houseType, "COTTAGE"))} onClick={() => handlePropertyTypeclick("COTTAGE")}>
								<CottageIcon />
								<h2 className="text-sm font-semibold py-2 text-center">
									Cottage
								</h2>
							</button>
						</li>
						<li>
							<button className="border pt-4 pb-2 px-2 rounded-2xl hover:bg-gray-100" onClick={() => handlePropertyTypeclick("house")}>
								<HouseIcon />
								<h2 className="text-sm font-semibold py-2 text-center">
									House
								</h2>
							</button>
						</li>

						<li>
							<button className="border pt-4 pb-2 px-2 rounded-2xl hover:bg-gray-100" onClick={() => handlePropertyTypeclick("mews")}>
								<MewsIcon />
								<h2 className="text-sm font-semibold py-2 text-center">
									Mews
								</h2>
							</button>
						</li>

						<li>
							<button className="border pt-4 pb-2 px-2 rounded-2xl hover:bg-gray-100" onClick={() => handlePropertyTypeclick("penthouse")}>
								<PenthouseIcon />
								<h2 className="text-sm font-semibold py-2 text-center">
									Penthouse
								</h2>
							</button>
						</li>
						<li>
							<button className="border pt-4 pb-2 px-2 rounded-2xl hover:bg-gray-100" onClick={() => handlePropertyTypeclick("ranch")}>
								<RanchIcon />
								<h2 className="text-sm font-semibold py-2 text-center">
									Ranch
								</h2>
							</button>
						</li>

						<li>
							<button className="border pt-4 pb-2 px-2 rounded-2xl hover:bg-gray-100" onClick={() => handlePropertyTypeclick("seahouse")}>
								<SeaHouseIcon />
								<h2 className="text-sm font-semibold py-2 text-center">
									Sea House
								</h2>
							</button>
						</li>

						<li>
							<button className="border pt-4 pb-2 px-2 rounded-2xl hover:bg-gray-100" onClick={() => handlePropertyTypeclick("Villa")}>
								<VillaIcon />
								<h2 className="text-sm font-semibold py-2 text-center">
									Villa
								</h2>
							</button>
						</li>
					</ul>
				</div>

			</div>
		</div>

	)
}