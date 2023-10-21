import { FaRegSmile } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5'

export function MessagesInput(){
	return(
		<div 
			className="w-full flex py-4 px-4 justify-between gap-4 items-center bg-white rounded-xl mb-8"
		>
			<FaRegSmile size={24} color="#707991" />
			<input 
				type="text"
				placeholder='Message'
				className='w-full h-8 outline-none'
			/>
			<button>
				<IoSend size={24} color="#8BABD8" />
			</button>
		</div>
	)
}