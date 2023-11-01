import { Dispatch, SetStateAction } from "react";

export interface IAuthContext{
	username: string,
	setUsername: Dispatch<SetStateAction<string>>
}