import { UserFormContexProvider } from "./userFormContext";

export * from "./userFormContext";

export function UserContext({ children }: { children: React.ReactNode }) {
	return(
		<>
			<UserFormContexProvider>{children}</UserFormContexProvider>
		</>
	)
}