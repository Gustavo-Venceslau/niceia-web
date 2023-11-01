"use client"

import { createContext, useContext, useState } from "react";
import { INavbarContext } from "../app/chat/interfaces/iNavbarContext";

const NavbarContext = createContext<INavbarContext>(null!);

export function NavbarContextProvider({ children}: { children: React.ReactNode }){
	const [isVisible, setIsVisible] = useState(true);

	return <NavbarContext.Provider value={{isVisible, setIsVisible}}>{children}</NavbarContext.Provider>
}

export function useNavbarContext(){
	return useContext(NavbarContext);
}
