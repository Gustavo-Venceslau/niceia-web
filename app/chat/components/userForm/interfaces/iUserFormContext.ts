import { Dispatch, SetStateAction } from "react";

export interface IUserFormContext{
	username: string,
	setUsername: Dispatch<SetStateAction<string>>
}