import { MessageText } from "./components/messageText"
import { MessageUser } from "./components/messageUser"

interface MessageProps {
	message: string;
}

export function Message({ message }: MessageProps) {
	return (
		<div className="flex gap-3">
			<MessageUser />
			<MessageText message={message}/>
		</div>
	)
}