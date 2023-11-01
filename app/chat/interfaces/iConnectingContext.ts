import { Dispatch, SetStateAction } from "react";

export interface IConnectingContext {
	connected: boolean,
	setConnected: Dispatch<SetStateAction<boolean>>
}