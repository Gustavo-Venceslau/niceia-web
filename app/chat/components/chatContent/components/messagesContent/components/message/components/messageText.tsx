import { BsCheckLg } from "react-icons/bs"

interface MessageText {
	message: string
	isSender: boolean
}

export function MessageText({ message, isSender }: MessageText){
	const date = new Date();

	const bgColor = isSender ? "bg-[#78E378]" : "bg-white";
	const textColor = isSender ? "text-white" : "text-[#011627]"

	return(
		<div
		className={`max-w-sm relative ${bgColor} px-3 py-1 rounded-xl`}>
			<p>
				{message}
			</p>
			<div className={`w-full flex items-center justify-end gap-1 ${textColor}`}>
				<span className="text-xs">
					{
						`${date.getHours()}:${date.getMinutes()}`
					}
				</span>
				<BsCheckLg size={14}/>
			</div>
		</div>
	)
}