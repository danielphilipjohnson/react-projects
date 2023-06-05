import Link from "next/link";
import RadioStuff from "../components/RadioStuff";
export default function Navbar(props) {

	return (
		<nav className="border-b py-4">
			<div className="container mx-auto flex items-center">
				<div className="flex-1 text-sm">
					<Link href="/" className="">
						{props.title}
					</Link>
				</div>
				<RadioStuff />	
					<ul className="flex px-1 text-sm mx-4">
						<li className="mr-2 underline hover:text-gray-700 duration-500">
							<Link href="/showcase">Showcase</Link>
						</li>
						<li className="mr-2 underline hover:text-gray-700 duration-500">
							<Link href="/new-listings">New Listings</Link>
						</li>
					</ul>
			
			</div>
		</nav>
	)
}