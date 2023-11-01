import { createContext, useContext, useState } from "react";
import { IMessagesContext } from "../app/chat/interfaces/iMessagesContext";

const MessagesContext = createContext<IMessagesContext>(null!);

export function MessagesContextProvider({ children }: { children: React.ReactNode }){
	const [messages, setMessages] = useState<JSX.Element[]>([]);

	return <MessagesContext.Provider value={{messages, setMessages}}>{children}</MessagesContext.Provider>
}

export function useMessagesContext(){
	return useContext(MessagesContext);
}