import { Chat } from "./chat/chat";
import { AppContexts } from "./chat/components/navbar/contexts";

export default function Home() {
  return (
    <main>
      <AppContexts>
	  	<Chat />
	  </AppContexts>
    </main>
  )
}
