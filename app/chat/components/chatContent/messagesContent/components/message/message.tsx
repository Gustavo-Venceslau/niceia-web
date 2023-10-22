import { MessageText } from "./components/messageText"
import { MessageUser } from "./components/messageUser"

export function Message() {
	return (
		<div className="flex gap-3">
			<MessageUser />
			<MessageText message='OMG 😲 do you remember what you did last night at the work night out?'/>
		</div>
	)
}