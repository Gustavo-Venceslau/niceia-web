import { Dispatch, SetStateAction } from "react"

export interface IMessagesContext{
	messages: JSX.Element[]
	setMessages: Dispatch<SetStateAction<JSX.Element[]>>
}