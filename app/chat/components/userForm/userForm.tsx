"use client";

import { useForm } from "react-hook-form";
import { IUserForm } from "./interfaces/iUserForm";
import { useAuthContext } from "../../../../contexts/authContext";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { OnError } from "@/app/chat/services/onError";
import { IChatMessage } from "../../interfaces/iChatMessage";
import { EventMessage } from "../chatContent/components/messagesContent/components/eventMessage";
import { useMessagesContext } from "@/contexts/messagesContext";
import { Message } from "../chatContent/components/messagesContent/components/message/message";
import { useConnectingContext } from "@/contexts/connectingContext";
import { pickRandomColor } from "../chatContent/components/messagesContent/components/message/functions/PickRandomColor";

export var socket: WebSocket;
export var stompClient: Stomp.Client;

export function UserForm() {

	const { register, handleSubmit } = useForm<IUserForm>();
	const form = useAuthContext();
	const { setMessages } = useMessagesContext();
	const { connected, setConnected} = useConnectingContext();

	function HandleUserFormData({name}: IUserForm) {
		if(name){
			socket = new SockJS("http://localhost:8080/ws");
			stompClient = Stomp.over(socket);
			
			stompClient.connect({}, onConnected, OnError);
		};
	}

	const onConnected = () => {
		setConnected(true);
		stompClient.subscribe("/topic/public", onMessageReceived);
		stompClient.send("/app/chat.addUser",
			{},
			JSON.stringify({ sender: form.username, type: "JOIN" })
		);
	}

	const onMessageReceived = (payload: any) => {
		var message: IChatMessage = JSON.parse(payload.body);

		const color = pickRandomColor(message.sender);

		if(message.type === "JOIN"){
			const eventMessage = <EventMessage message={message.sender + " joined!"}/>
			setMessages(prev => [...prev, eventMessage]);
		}
		else if(message.type === "LEAVE"){
			const eventMessage = <EventMessage message={message.sender + " leaft!"}/>;
			setMessages(prev => [...prev, eventMessage]);
		}
		else {
			const messageComponent = <Message 
										message={message.content} 
										color={color} 
										icon={message.sender[0]}
										isSender={message.sender === form.username}
									/>;
			setMessages(prev => [...prev, messageComponent]);
		}
	}

	const userFormDisplay = connected ? "hidden" : "flex"

	return (
		<div 
			className={`w-full h-screen bg-black/50 absolute ${userFormDisplay} items-center justify-center z-50`}
		>
			<form
				onSubmit={handleSubmit(HandleUserFormData)}
				className="bg-white w-1/2 rounded-xl px-4 py-3 flex flex-col gap-3"
			>
				<label>Pick your username</label>
				<div className="w-full flex gap-5">
					<input
						{...register("name")}
						type="text"
						id="name"
						placeholder="John Doe"
						onChange={e => form.setUsername(e.target.value)}
						className="bg-[#F5F5F5] outline-none w-full h-10 p-2 rounded-lg"
					/>
					<button 
						type="submit"
						className="px-4 py-2 bg-[#8BABD8] text-white rounded-lg"
					>
						Entrar
					</button>
				</div>
			</form>
		</div>
	)
}