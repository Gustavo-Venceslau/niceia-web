import { ChatNavbar } from "./chatNavbar/chatNavbar";
import { MessagesContent } from "./messagesContent/messagesContent";

export function ChatContent(){
	return (
		<section className="w-full h-screen">
			<ChatNavbar />
			<div className="w-full h-[calc(100vh-72px)] bg-[#8BABD8] px-32 relative">
				<MessagesContent />
			</div>
		</section>
	)
}