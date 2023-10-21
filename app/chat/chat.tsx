import { ChatContent } from "./components/chatContent/chatContent";
import { MessageBar } from "./components/messagesNavbar/messagesBar";

export function Chat(){
	return (
		<div className="w-full h-screen flex flex-row">
			<MessageBar />
			<ChatContent />
		</div>
	);
}