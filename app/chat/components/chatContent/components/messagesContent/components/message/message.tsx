import { MessageText } from "./components/messageText"
import { MessageUser } from "./components/messageUser"

interface MessageProps {
	message: string;
	color: string;
	icon: string
}

export function Message({ message, color, icon }: MessageProps) {
	return (
		<div className="flex gap-3">
			<MessageUser color={color} icon={icon} />
			<MessageText message={message}/>
		</div>
	)
}