import Link from "next/link";

import { FlatIcon } from "../icons/flat";
import { CottageIcon } from "../icons/cottage";
import { HouseIcon } from "../icons/house";
import { MewsIcon } from "../icons/mews";
import { PenthouseIcon } from "../icons/penthouse";
import { RanchIcon } from "../icons/ranch";
import { SeaHouseIcon } from "../icons/seaHouse";
import { VillaIcon } from "../icons/villa";

export default function HouseBar() {
  return (
    <ul className=" text-gray-800 flex justify-center space-x-4 py-8">
      <li className="hover:border pt-4 pb-2 px-2 rounded-2xl hover:bg-gray-100 duration-500 transition-all">
        <Link href={"/house-type/flat"}>
          <FlatIcon />
          <h2 className="text-sm font-semibold text-gray-800 py-2 text-center">
            Flat
          </h2>
        </Link>
      </li>
      <li className="hover:border pt-4 pb-2 px-2 rounded-2xl hover:bg-gray-100 duration-500 transition-all">
        <Link href={"/house-type/cottage"}>
          <CottageIcon />
          <h2 className="text-sm font-semibold text-gray-800 py-2 text-center">
            Cottage
          </h2>
        </Link>
      </li>
      <li className="hover:border pt-4 pb-2 px-2 rounded-2xl hover:bg-gray-100 duration-500 transition-all">
        <Link href={"/house-type/house"}>
          <HouseIcon />
          <h2 className="text-sm font-semibold text-gray-800 py-2 text-center">
            House
          </h2>
        </Link>
      </li>

      <li className="hover:border pt-4 pb-2 px-2 rounded-2xl hover:bg-gray-100 duration-500 transition-all">
        <Link href={"/house-type/mews"}>
          <MewsIcon />
          <h2 className="text-sm font-semibold text-gray-800 py-2 text-center">
            Mews
          </h2>
        </Link>
      </li>

      <li className="hover:border pt-4 pb-2 px-2 rounded-2xl hover:bg-gray-100 duration-500 transition-all">
        <Link href={"/house-type/penthouse"}>
          <PenthouseIcon />
          <h2 className="text-sm font-semibold text-gray-800 py-2 text-center">
            Penthouse
          </h2>
        </Link>
      </li>
      <li className="hover:border pt-4 pb-2 px-2 rounded-2xl hover:bg-gray-100 duration-500 transition-all">
        <Link href={"/house-type/ranch"}>
          <RanchIcon />
          <h2 className="text-sm font-semibold text-gray-800 py-2 text-center">
            Ranch
          </h2>
        </Link>
      </li>

      <li className="hover:border pt-4 pb-2 px-2 rounded-2xl hover:bg-gray-100 duration-500 transition-all">
        <Link href={"/house-type/seahouse"}>
          <SeaHouseIcon />
          <h2 className="text-sm font-semibold text-gray-800 py-2 text-center">
            Sea House
          </h2>
        </Link>
      </li>

      <li className="hover:border pt-4 pb-2 px-2 rounded-2xl hover:bg-gray-100 duration-500 transition-all">
        <Link href={"/house-type/villa"}>
          <VillaIcon />
          <h2 className="text-sm font-semibold text-gray-800 py-2 text-center">
            Villa
          </h2>
        </Link>
      </li>
    </ul>
  );
}
