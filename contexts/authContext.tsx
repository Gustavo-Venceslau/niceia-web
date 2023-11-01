"use client";

import { createContext, useState, useContext } from "react";
import { IAuthContext } from "../app/chat/components/userForm/interfaces/iAuthContext";

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthContextProvider({ children }: { children: React.ReactNode }){
	const [username, setUsername] = useState("");

	return <AuthContext.Provider 
		value={{username, setUsername}}>{children}</AuthContext.Provider>
}

export function useAuthContext(){
	return useContext(AuthContext);
}