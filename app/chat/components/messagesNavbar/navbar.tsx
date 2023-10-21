"use client";

import { RxHamburgerMenu } from 'react-icons/rx';
import { FiSearch } from 'react-icons/fi';
import { useNavbarContext } from './contexts/navbarContext';

export function Navbar() {

	const {isVisible, setIsVisible} = useNavbarContext();

	const handleNavbar = () => {
		setIsVisible(!isVisible);
	}

	return (
		<nav className="w-full h-10 flex flex-row gap-5 items-center">
			<button
				className='w-6 h-6'
				onClick={() => handleNavbar()}
			>
				<RxHamburgerMenu size={24} color="#707991" />
			</button>
			<div className="w-full flex flex-row">
				<button 
					className='w-14 h-10 flex items-center justify-center text-[#707991] bg-[#F5F5F5] rounded-l-full'
				>
					<FiSearch size={24} />
				</button>
				<input 
					type="text"
					className='w-full h-10 bg-[#F5F5F5] rounded-r-full outline-none'
					placeholder='Search'
				/>
			</div>
		</nav>
	)
}