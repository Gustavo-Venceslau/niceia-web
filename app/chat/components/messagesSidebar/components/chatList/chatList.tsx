import { ChatBox } from "./components/chatBox";

export function ChatList() {
	return(
		<div className="w-full h-full">
			<ChatBox />
			<ChatBox />
			<ChatBox />
		</div>
	)
}