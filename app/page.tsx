"use client";

import { useState } from "react";
import { Chat } from "./chat/chat";
import { AppContexts } from "./chat/components/messagesNavbar/navbar/contexts";
import { UserContext } from "./chat/components/userForm/contexts";
import { UserForm } from "./chat/components/userForm/userForm";

export default function Home() {
	const [usernamed, setUsernamed] = useState("");

	return (
		<AppContexts>
			<UserContext>
				<main>
					<UserForm username={usernamed} setUsername={setUsernamed}/>
					<Chat />
				</main>
			</UserContext>
		</AppContexts>
	)
}
