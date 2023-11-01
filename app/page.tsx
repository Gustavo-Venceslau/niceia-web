"use client";

import { Chat } from "./chat/chat";
import { UserForm } from "./chat/components/userForm/userForm";
import { AppContexts } from "@/contexts";

export default function Home() {
	return (
		<AppContexts>
			<main>
				<UserForm />
				<Chat />
			</main>
		</AppContexts>
	)
}
