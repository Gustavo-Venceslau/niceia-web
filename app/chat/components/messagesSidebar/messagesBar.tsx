"use client";

import { useNavbarContext } from "../../../../contexts/navbarContext";
import { motion } from "framer-motion";
import { Navbar } from "./components/navbar/navbar";
import { ChatList } from "./components/chatList/chatList";

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