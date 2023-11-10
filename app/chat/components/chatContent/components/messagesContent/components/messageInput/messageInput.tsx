"use client";

import { IoSend } from 'react-icons/io5'
import { IMessageInput } from '../../../../../../interfaces/iMessageInput';
import { useForm } from 'react-hook-form';
import { stompClient } from '@/app/chat/components/userForm/userForm';
import { useAuthContext } from '@/contexts/authContext';
import { FaRegSmile } from 'react-icons/fa'
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data'
import { useState } from 'react';

export function MessagesInput(){
	const { username } = useAuthContext();

	const [isVisible, setIsVisible] = useState(false);

	const { register, handleSubmit, getValues, setValue } = useForm<IMessageInput>();

	const sendMessage = ({message}: IMessageInput) => {
		if(message && stompClient) {
			var chatMessage = {
				sender: username,
				content: message,
				type: 'CHAT'
			};
			stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
		}
		setValue('message', '');
	}

	const handleEmojiSelect = (emoji: string) => {
		const inputValue = getValues('message');
		setValue('message', inputValue + emoji);
		setIsVisible(false);
	};

	return(
		<div
			className="w-full flex py-4 px-4 justify-between gap-4 items-center bg-white rounded-xl mb-8 relative"
		>
			<div
				className='absolute select-none -translate-y-64 -translate-x-2'
			>
				{isVisible && <Picker 
									data={data} 
									onEmojiSelect={(e: any) => handleEmojiSelect(e.native)} 
									searchPosition="none" 
									theme="light"
									previewPosition="none"
								/>
				}
			</div>
			<FaRegSmile 
				size={24} 
				color="#8BABD8"
				className="cursor-pointer"
				onClick={() => setIsVisible(!isVisible)}
			/>
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