import { ChatContent } from "./components/chatContent/chatContent";
import { MessageBar } from "./components/messagesSidebar/messagesBar";

export function Chat(){
	return (
		<div className="w-full h-screen flex flex-row relative">
			<MessageBar />
			<ChatContent />
		</div>
	);
}