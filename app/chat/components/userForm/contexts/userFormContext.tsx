"use client";

import { createContext, useState, useContext } from "react";
import { IUserFormContext } from "../interfaces/iUserFormContext";

const UserFormContext = createContext<IUserFormContext>(null!);

export function UserFormContexProvider({ children }: { children: React.ReactNode }){
	const [username, setUsername] = useState("");

	return <UserFormContext.Provider value={{username, setUsername}}>{children}</UserFormContext.Provider>
}

export function useUserFormContext(){
	return useContext(UserFormContext);
}