"use client";

import { useUserFormContext } from "@/app/chat/components/userForm/contexts";

export function MessageUser(){

	const { username } = useUserFormContext();

	return(
		<div className="w-10 h-10 bg-purple-600 rounded-full text-white flex items-center justify-center">
			{username[0] ? username[0] : "?"}
		</div>
	)
}