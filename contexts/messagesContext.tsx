import { createContext, useContext, useState } from "react";
import { IMessagesContext } from "../app/chat/interfaces/iMessagesContext";
import { IChatMessage } from "@/app/chat/interfaces/iChatMessage";
import { EventMessage } from "@/app/chat/components/chatContent/components/messagesContent/components/eventMessage";
import { Message } from "@/app/chat/components/chatContent/components/messagesContent/components/message/message";

const MessagesContext = createContext<IMessagesContext>(null!);

export function MessagesContextProvider({ children }: { children: React.ReactNode }){
	const [messages, setMessages] = useState<JSX.Element[]>([]);

	const OnMessageReceived = (payload: any) => {

		const {setMessages} = useMessagesContext();
	
		var message: IChatMessage = JSON.parse(payload.body);
	
	
		if(message.type === "JOIN"){
			const eventMessage = <EventMessage message={message.sender + " joined!"}/>
			// setMessages(prev => [...prev, eventMessage]);
		}
		else if(message.type === "LEAVE"){
			const eventMessage = <EventMessage message={message.sender + " leaft!"}/>;
			// setMessages(prev => [...prev, eventMessage]);
		}
		else {
			const messageComponent = <Message message={message.content}/>;
			// setMessages(prev => [...prev, messageComponent]);
		}
	}

	return <MessagesContext.Provider value={{messages, setMessages}}>{children}</MessagesContext.Provider>
}

export function useMessagesContext(){
	return useContext(MessagesContext);
}