import { MessageBar } from "./components/messagesBar";

export function Chat(){
	return (
		<div className="w-full h-screen flex flex-row">
			<MessageBar />
			<section className="w-full h-screen">
				
			</section>
		</div>
	);
}