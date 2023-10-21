import { FaCircleUser } from 'react-icons/fa6';

export function UserComponent(){
	return(
		<button className="w-full flex items-center gap-2">
			<FaCircleUser size={40} color="#011627" />
			<h3
				className='font-semibold text-[#011627]'
			>
				Username
			</h3>
		</button>
	)
}