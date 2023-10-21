import { Message } from './components/message';
import { MessagesInput } from './components/messageInput';

export function MessagesContent() {
	return (
		<div className="w-full h-full flex flex-col justify-end relative overflow-hidden gap-4">
			<div className="w-full h-full flex flex-col justify-end gap-4">
				<Message message='OMG 😲 do you remember what you did last night at the work night out?'/>
			</div>
			<MessagesInput />
		</div>
	)
}