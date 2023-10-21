import { UserComponent } from "./components/userComponent";
import { FiSearch } from 'react-icons/fi';
import { AiTwotonePhone } from 'react-icons/ai';
import { SlOptionsVertical } from 'react-icons/sl';

export function ChatNavbar(){
	return(
		<div className="w-full py-4 px-4 flex items-center">
			<UserComponent />
			<div className="flex gap-6">
				<button>
					<FiSearch size={24} color="#707991" />
				</button>
				<button>
					<AiTwotonePhone size={24} color="#707991" />
				</button>
				<button>
					<SlOptionsVertical size={20} color="#707991" />
				</button>
			</div>
		</div>
	)
}