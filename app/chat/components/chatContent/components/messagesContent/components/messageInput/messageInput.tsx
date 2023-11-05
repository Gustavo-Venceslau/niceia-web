"use client";

import { FaRegSmile } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5'
import { IMessageInput } from '../../../../../../interfaces/iMessageInput';
import { useForm } from 'react-hook-form';
import { stompClient } from '@/app/chat/components/userForm/userForm';
import { useAuthContext } from '@/contexts/authContext';
import { useState } from 'react';

export function MessagesInput(){
	const { username } = useAuthContext();
	const [inputValue, setInputValue] = useState("");

	const { register, handleSubmit, reset } = useForm<IMessageInput>();

	const sendMessage = ({message}: IMessageInput) => {
		if(message && stompClient) {
			var chatMessage = {
				sender: username,
				content: message,
				type: 'CHAT'
			};
			stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
		}
		reset()
	}

	return(
		<div className="w-full flex py-4 px-4 justify-between gap-4 items-center bg-white rounded-xl mb-8">
			<button>
				<FaRegSmile size={24} color="#8BABD8" />
			</button>
			<form
				onSubmit={handleSubmit(sendMessage)}
				className='w-full flex items-center gap-5'
			>
				<input
					{...register("message")} 
					type="text"
					id="message"
					placeholder='Message'
					className='w-full h-8 outline-none'
				/>
				<button
					type='submit'
				>
					<IoSend size={24} color="#8BABD8" />
				</button>
			</form>
		</div>
	)
}