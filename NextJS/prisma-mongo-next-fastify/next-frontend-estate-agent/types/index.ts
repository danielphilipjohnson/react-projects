export * from "../../prisma-estate-agent/node_modules/.prisma/client";
import { Property, Address,  } from "../../prisma-estate-agent/node_modules/.prisma/client";

export interface HouseWithAddress extends Property {
  address: Address;
}



export interface BaseResponse<T> {
  data: T[];
  response: number;
}
export type HouseResponse = BaseResponse<HouseWithAddress>;
