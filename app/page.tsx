import { Chat } from "./chat/chat";
import { AppContexts } from "./chat/components/messagesNavbar/contexts";

export default function Home() {
  return (
    <main>
      <AppContexts>
	  	<Chat />
	  </AppContexts>
    </main>
  )
}
