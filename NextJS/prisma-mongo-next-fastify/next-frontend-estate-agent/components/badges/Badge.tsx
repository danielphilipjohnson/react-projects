export default function Badges({...props}) {
	return (<div className="flex justify-between space-x-4">
		<div className="flex items-center justify-between max-w-max px-1 py-1 rounded">
			<div className="w-6 h-6 mr-4">
				{props.children}
			</div>
			<p className="text-sm">{props.count} Beds</p>
		</div>
	</div>)

}