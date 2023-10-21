import { Dispatch, SetStateAction } from "react";

export interface INavbarContext {
	isVisible: boolean,
	setIsVisible: Dispatch<SetStateAction<boolean>>
}