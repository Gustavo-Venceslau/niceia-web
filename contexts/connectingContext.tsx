import { createContext, useContext, useState } from "react";
import { IConnectingContext } from "../app/chat/interfaces/iConnectingContext";

const ConnectingContext = createContext<IConnectingContext>(null!);

export function ConnectingContextProvider({ children }: { children: React.ReactNode }){
	const [connected, setConnected] = useState(false);

	return <ConnectingContext.Provider value={{connected, setConnected}}>{children}</ConnectingContext.Provider>
}

export function useConnectingContext(){
	return useContext(ConnectingContext);
}