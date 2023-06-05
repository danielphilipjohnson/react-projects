import { HouseWithAddress } from "../../types/index";
import Badges from "../badges";
import Link from 'next/link';


export default function HouseCard(house: Pick<HouseWithAddress, "id" | "photos" | "address" | "status" | "price" | "houseType" | "beds" | "baths" | "sqft" | "description">) {
  return (
    <Link href={{
      pathname: `/house/${house.id}`

    }} className=" max-w-max">
      <figure className="relative" >
        <img className="rounded-2xl w-full" src={house.photos[0]} alt="Shoes" />
        <span className=" bg-red-700 max-w-max absolute bottom-0 left-0 px-2 rounded text-white text-sm">{house.status}</span>
      </figure>

      <div className="py-4">
        <div className="flex justify-between w-full">
          <h2 className="font-semibold">
            {house.address.city}
          </h2>
          <p className="font-semibold">£{house.price}</p>
        </div>

        <h3 className="pb-4 capitalize text-sm text-gray-700">{house.houseType}</h3>

        <Badges bed={house.beds} bath={house.baths} sqft={house.sqft} />
        <h2 className="font-bold">Details </h2>
        <p className="mb-4 overflow-hidden whitespace-nowrap overflow-ellipsis text-sm text-gray-700">{house.description}</p>
      </div>
    </Link>
  );
}
