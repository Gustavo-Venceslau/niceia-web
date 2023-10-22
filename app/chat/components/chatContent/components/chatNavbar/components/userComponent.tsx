"use client";

import { FaCircleUser } from 'react-icons/fa6';
import { useUserFormContext } from '../../../../userForm/contexts';

export function UserComponent(){

	const {username} = useUserFormContext();

	return(
		<button className="w-full flex items-center gap-2">
			<FaCircleUser size={40} color="#011627" />
			<h3
				className='font-semibold text-[#011627]'
			>
				{username.length > 0 ? username : "Username"}
			</h3>
		</button>
	)
}