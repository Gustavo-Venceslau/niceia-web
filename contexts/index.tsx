import { AuthContextProvider } from "./authContext";
import { ConnectingContextProvider } from "./connectingContext";
import { MessagesContextProvider } from "./messagesContext";
import { NavbarContextProvider } from "./navbarContext";

export function AppContexts({children}: {children: React.ReactNode}){
	return(
		<>
			<ConnectingContextProvider>
				<NavbarContextProvider>
					<AuthContextProvider>
						<MessagesContextProvider>
							{children}
						</MessagesContextProvider>
					</AuthContextProvider>
				</NavbarContextProvider>
			</ConnectingContextProvider>
		</>
	)
}