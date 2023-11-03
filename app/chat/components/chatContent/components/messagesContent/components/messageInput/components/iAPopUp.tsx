import { BsFillChatRightTextFill, BsFillFileEarmarkImageFill } from "react-icons/bs";
import { motion } from "framer-motion";

export function IAPopUp(){
	return(
		<motion.div
			initial={{ padding: 0, y: -40, x: 15 }}
			whileInView={{ padding: 8, y: -80, x: 35 }}
			className='bg-white absolute p-2 flex translate-x-8 gap-1 rounded-lg'
		>
			<motion.button
				initial={{ padding: 0}}
				whileInView={{ padding: 20 }}
				transition={{ ease: "easeOut" }}
				className='p-5 hover:bg-black/5 flex justify-center items-center rounded-md'
			>
				<BsFillFileEarmarkImageFill size={24} color="#8BABD8"/>
			</motion.button>
			<motion.button
				initial={{ padding: 0}}
				whileInView={{ padding: 20 }}
				className='p-5 hover:bg-black/5 flex justify-center items-center rounded-md'
			>
				<BsFillChatRightTextFill size={24} color="#8BABD8"/>
			</motion.button>
		</motion.div>
	)
}