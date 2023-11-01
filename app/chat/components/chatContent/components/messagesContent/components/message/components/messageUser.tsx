"use client";

interface MessageUserProps{
	color: string
	icon: string
}

export function MessageUser({ color, icon }: MessageUserProps){
	return(
		<div style={{ backgroundColor: color }} className={`w-10 h-10 rounded-full text-white flex items-center justify-center`}>
			{"?" && icon.toUpperCase()}
		</div>
	)
}