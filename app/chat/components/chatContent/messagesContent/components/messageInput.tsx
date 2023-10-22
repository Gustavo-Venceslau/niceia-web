"use client";

import { useForm } from 'react-hook-form';
import { FaRegSmile } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5'
import { IMessageInput } from '../interfaces/iMessageInput';
import { handleMessageInputData } from '../services/handleMessageInputData';

export function MessagesInput(){

	const { register, handleSubmit } = useForm<IMessageInput>();

	return(
		<form
			onSubmit={handleSubmit(handleMessageInputData)}
			className="w-full flex py-4 px-4 justify-between gap-4 items-center bg-white rounded-xl mb-8"
		>
			<FaRegSmile size={24} color="#707991" />
			<input
				{...register("username")} 
				type="text"
				placeholder='Message'
				className='w-full h-8 outline-none'
			/>
			<button
				type='submit'
			>
				<IoSend size={24} color="#8BABD8" />
			</button>
		</form>
	)
}