import { MessagesInput } from './components/messageInput';

export function MessagesContent() {
	return (
		<div className="w-full h-full flex flex-col justify-end">
			<MessagesInput />
		</div>
	)
}