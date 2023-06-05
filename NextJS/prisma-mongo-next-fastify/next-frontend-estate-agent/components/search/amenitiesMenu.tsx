type AmenitiesProps = {
	bathrooms: number,
	bedrooms: number,
	showMenu: boolean,
	setAmountOfBedrooms: (bedrooms: number) => void,
	setAmountOfBathrooms: (bathrooms: number) => void,
}

export default function AmenitiesMenu(props: AmenitiesProps) {
	return (

		<div className={"w-max flex justify-center absolute top-20 mt-2 border z-10 bg-white rounded-2xl " + (props.showMenu ? "block" : "hidden")}>
			<div className="px-6 py-8">
				<div className="flex border-b pb-4 flex-grow-0 mb-4" >
					<header className="mr-28">
						<h2 className="text-gray-800 font-semibold text-md mb-1">Bedrooms</h2>
						<h3 className="text-sm text-gray-500">Select amount</h3>
					</header>
					<div className="flex items-center space-x-4 text-black">

						<button className="border rounded-full p-2 disabled:opacity-40" disabled={props.bedrooms === 0} onClick={() => {
							props.setAmountOfBedrooms(props.bedrooms - 1)
						}
						}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
							</svg>
						</button>

						<p>{props.bedrooms}</p>
						<button className="border rounded-full p-2" onClick={() => {
							props.setAmountOfBedrooms(props.bedrooms + 1)
						}
						}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>

						</button>


					</div>
				</div>
				<div className="flex border-b pb-4 flex-grow-0" >
					<header className="mr-28">
						<h2 className="text-gray-800 font-semibold text-md mb-1">Bathrooms</h2>
						<h3 className="text-sm text-gray-500">Select amount</h3>
					</header>
					<div className="flex items-center space-x-4 text-black">

						<button className="border rounded-full p-2 disabled:opacity-40" disabled={props.bathrooms === 0} onClick={() => {
							props.setAmountOfBathrooms(props.bathrooms - 1)
						}
						}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
							</svg>
						</button>

						<p>{props.bathrooms}</p>
						<button className="border rounded-full p-2" onClick={() => {
							props.setAmountOfBathrooms(props.bathrooms + 1)
						}
						}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>

	)
}