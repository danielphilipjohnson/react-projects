import { HouseWithAddress } from "../types";

/**
 * @Name FrontendEstateAgentApiClientUrlsInterface
 * @description
 * Interface for the Items urls used to avoid hard-coded strings
 */
export interface FrontendEstateAgentApiClientUrlsInterface {
  houseById: string;
  houseByType: string;
  newListings: string;
}

const urls: FrontendEstateAgentApiClientUrlsInterface = {
  houseById: "/houses",
  houseByType: "/houses/type",
  newListings: "/houses/new-listings"
};

export class EstateAgentFrontendApiClientModel {
  private readonly urls!: FrontendEstateAgentApiClientUrlsInterface;
  private readonly baseUrl: string;
  /**
   * Creates a estate agent frontend api client
   * @param {urls} FrontendEstateAgentApiClientUrlsInterface - Object with key and values for urls.
   */
  constructor(urls: FrontendEstateAgentApiClientUrlsInterface) {
    this.urls = urls;
    // ! set depending on environment
    this.baseUrl = "http://127.0.0.1:8080";
  }

  private async baseRequest<T>(url: string) {
    try {
      const res = await fetch(url, {
        next: { revalidate: 10 }
      });
      const data = await res.json();

      return data.data as T;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getHouseById(id: string) {
    const url = this.baseUrl + this.urls.houseById;
    return this.baseRequest<HouseWithAddress>(`${url}/${id}`);
  }

  async getHouseByType(type: string) {
    const url = this.baseUrl + this.urls.houseByType;
    console.log(`${url}/${type}`)
    return this.baseRequest<HouseWithAddress[]>(`${url}/${type}`);
  }
  async getNewListings() {
    const url = this.baseUrl + this.urls.newListings;
    console.log(url)
    return this.baseRequest<HouseWithAddress[]>(url);
  }
}

export const frontEndApiClient = new EstateAgentFrontendApiClientModel(urls);
