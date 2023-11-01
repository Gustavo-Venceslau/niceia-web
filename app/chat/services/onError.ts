export const OnError = () => {
	var connectingElement = document.querySelector("#connecting");

	if(connectingElement){
		connectingElement.textContent = "Could not connect to WebSocket server. Please refresh this page to try again!";
	}
}