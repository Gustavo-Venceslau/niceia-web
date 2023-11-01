import { useConnectingContext } from "@/contexts/connectingContext";


export function Connecting() {

	const { connected } = useConnectingContext();

	const connectingDisplay = connected ? "hidden" : "flex"

	return(
		<span 
			id="connecting"
			className=
		{
			`w-40 h-12 bg-white shadow-md ${connectingDisplay} rounded-lg absolute
			 top-3 left-1/2 right-1/2 -translate-x-1/2 items-center justify-center`
		}>
			Connecting...
		</span>
	)
}