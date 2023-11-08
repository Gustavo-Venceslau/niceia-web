"use client";

import { useAuthContext } from '@/contexts/authContext';
import { useConnectingContext } from '@/contexts/connectingContext';
import { PiUserCircleThin } from 'react-icons/pi';
import { MessageUser } from '../../messagesContent/components/message/components/messageUser';
import { pickRandomColor } from '@/app/chat/functions/PickRandomColor';

export function UserComponent(){

	const { username } = useAuthContext();
	const { connected } = useConnectingContext();

	return(
		<button className="w-full flex items-center gap-2">
			{
				connected ? <MessageUser icon={username[0]} color={pickRandomColor(username)}/> 
				: <PiUserCircleThin size={40} color="#011627" />
			}
			<h3
				className='font-medium text-[#011627]'
			>
				{connected ? username : "Username"}
			</h3>
		</button>
	)
}