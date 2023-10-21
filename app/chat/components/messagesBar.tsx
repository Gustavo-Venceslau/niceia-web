"use client";

import { useNavbarContext } from "./messagesNavbar/contexts/navbarContext";
import { Navbar } from "./messagesNavbar/navbar";
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
		</motion.section>
	)
}