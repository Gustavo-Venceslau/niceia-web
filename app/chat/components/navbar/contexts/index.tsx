import { NavbarContextProvider } from "./navbarContext";

export function AppContexts({children}: {children: React.ReactNode}){
	return(
		<>
			<NavbarContextProvider>{children}</NavbarContextProvider>
		</>
	)
}