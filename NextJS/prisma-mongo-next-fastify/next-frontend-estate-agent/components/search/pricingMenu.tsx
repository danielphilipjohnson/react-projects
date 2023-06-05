
type PricingMenuProps = {
	showPricing: boolean,
	setMinimumPrice: (price: number) => void,
	setMaximumPrice: (price: number) => void,
}

const validatePrice = (potentialPrice: number, defaultPrice: number) => {
	if (!Number.isNaN(Number(potentialPrice)))
		return potentialPrice
	return defaultPrice
}


export default function Pricing(props: PricingMenuProps) {
	const minimumPrice = 0
	const maximumPrice = 1000000

	return (

		<div className={"w-max flex justify-center absolute top-20 mt-2 border z-10 bg-white rounded-2xl " + (props.showPricing ? "block" : "hidden")}>
			<div className="px-6 py-8 border-b">
				<div className="flex border-b pb-4">
					<header className="mr-4">
						<h2 className="text-gray-800 font-semibold text-md mb-1">Minimum price</h2>
						<h3 className="text-sm text-gray-500">Set your Minimum price</h3>
					</header>

					<select defaultValue={minimumPrice} id="minPriceRange" className="border px-2 py-2 rounded h-max" onChange={(event) => {
						const minPriceRange = validatePrice(Number(event.target.value), 0)
						props.setMinimumPrice(minPriceRange)
					}}>
						<option>Select Price</option>
						<option value="0">No min</option>
						<option value="100000">£100,000</option>
						<option value="200000">£200,000</option>
						<option value="300000">£300,000</option>
						<option value="400000">£400,000</option>
						<option value="500000">£500,000</option>
						<option value="600000">£600,000</option>
						<option value="700000">£700,000</option>
						<option value="800000">£800,000</option>
						<option value="900000">£900,000</option>
						<option value="1000000">£1,000,000</option>
						<option value="1250000">£1,250,000</option>
						<option value="1500000">£1,500,000</option>
						<option value="1750000">£1,750,000</option>
						<option value="2000000">£2,000,000</option>
						<option value="2500000">£2,500,000</option>
						<option value="3000000">£3,000,000</option>
						<option value="4000000">£4,000,000</option>
						<option value="5000000">£5,000,000</option>
						<option value="7500000">£7,500,000</option>
						<option value="10000000">£10,000,000</option>
						<option value="15000000">£15,000,000</option>
						<option value="20000000">£20,000,000</option>
						<option value="30000000">£30,000,000</option>
						<option value="40000000">£40,000,000</option>
						<option value="50000000">£50,000,000</option>
					</select>
				</div>

				<div className="flex border-b py-4">
					<header className="mr-4">
						<h2 className="text-gray-800 font-semibold text-md mb-1">Maximum price</h2>
						<h3 className="text-sm text-gray-500">Set your Maximum price</h3>
					</header>

					<select id="maxPriceRange" defaultValue={maximumPrice} className="border px-2 py-2 rounded h-max" onChange={(event) => {
						const maxPriceRange = validatePrice(Number(event.target.value), 999999999)
						props.setMaximumPrice(maxPriceRange)
					}}>
						<option>Select Price</option>
						<option value="100000">£100,000</option>
						<option value="200000">£200,000</option>
						<option value="300000">£300,000</option>
						<option value="400000">£400,000</option>
						<option value="500000">£500,000</option>
						<option value="600000">£600,000</option>
						<option value="700000">£700,000</option>
						<option value="800000">£800,000</option>
						<option value="900000">£900,000</option>
						<option value="1000000">£1,000,000</option>
						<option value="1250000">£1,250,000</option>
						<option value="1500000">£1,500,000</option>
						<option value="1750000">£1,750,000</option>
						<option value="2000000">£2,000,000</option>
						<option value="2500000">£2,500,000</option>
						<option value="3000000">£3,000,000</option>
						<option value="4000000">£4,000,000</option>
						<option value="5000000">£5,000,000</option>
						<option value="7500000">£7,500,000</option>
						<option value="10000000">£10,000,000</option>
						<option value="15000000">£15,000,000</option>
						<option value="20000000">£20,000,000</option>
						<option value="30000000">£30,000,000</option>
						<option value="40000000">£40,000,000</option>
						<option value="50000000">£50,000,000</option>
						<option value="99999999">No max</option>
					</select>
				</div>
			</div>
		</div>
	)
}