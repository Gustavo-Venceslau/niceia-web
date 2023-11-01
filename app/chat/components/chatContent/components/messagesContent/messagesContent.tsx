"use client"

import { useMessagesContext } from '@/contexts/messagesContext';
import { Connecting } from './components/connecting';
import { MessagesInput } from './components/messageInput/messageInput';

export function MessagesContent() {

	const { messages } = useMessagesContext();

	return (
		<div className="w-full h-full flex flex-col justify-end relative overflow-hidden gap-4">
			<div 
				className="w-full h-full flex flex-col justify-end gap-4 relative">
				<Connecting />
				{messages.map(message => message)}
			</div>
			<MessagesInput />
		</div>
	)
}