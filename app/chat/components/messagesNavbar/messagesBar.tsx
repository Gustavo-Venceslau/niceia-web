"use client";

import { ChatList } from "./components/chatList/chatList";
import { useNavbarContext } from "./components/navbar/contexts/navbarContext";
import { Navbar } from "./components/navbar/navbar";
import { motion } from "framer-motion";

export function MessageBar(){

	const {isVisible} = useNavbarContext();

	const messageBarSize = isVisible ? "30%" : "3.5%";

	return (
		<motion.section 
			animate={{ width: messageBarSize }}
			transition={{ ease: "easeOut" }}
			initial={false}
			className={`h-screen border-r-[1px] border-stone-200 overflow-hidden relative`}
		>
			<Navbar />
			<ChatList />
		</motion.section>
	)
}