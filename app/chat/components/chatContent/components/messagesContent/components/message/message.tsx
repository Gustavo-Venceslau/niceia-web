import { MessageText } from "./components/messageText"
import { MessageUser } from "./components/messageUser"

interface MessageProps {
	message: string;
	color: string;
	icon: string
	isSender: boolean
}

export function Message({ message, color, icon, isSender}: MessageProps) {

	const alignMessage = isSender ? "justify-end" : ""
	const messageDisplay = isSender ? "flex-row-reverse" : ""

	return (
		<div className={`w-full flex ${alignMessage}`}>
			<div className={`flex gap-3 ${messageDisplay}`}>
				<MessageUser color={color} icon={icon} />
				<MessageText message={message} isSender={isSender} />
			</div>
		</div>
	)
}