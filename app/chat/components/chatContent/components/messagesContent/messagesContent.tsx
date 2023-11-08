"use client"

import { useMessagesContext } from '@/contexts/messagesContext';
import { Connecting } from './components/connecting';
import { MessagesInput } from './components/messageInput/messageInput';

export function MessagesContent() {

	const { messages } = useMessagesContext();

	return (
		<div className="w-full h-full flex flex-col justify-end">
			<div 
				className="w-full h-full max-h-screen overflow-y-auto">
				<Connecting />
				{messages.map(message => message)}
			</div>
			<MessagesInput />
		</div>
	)
}