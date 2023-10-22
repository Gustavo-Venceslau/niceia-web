"use client";

import { useForm } from "react-hook-form";
import { IUserForm } from "./interfaces/iUserForm";
import { IUserFormContext } from "./interfaces/iUserFormContext";

export function UserForm({ username, setUsername }: IUserFormContext) {

	const { register, handleSubmit } = useForm<IUserForm>();

	function HandleUserFormData({name}: IUserForm) {
		setUsername(name);
	}

	const userFormDisplay = username.length > 0 ? "hidden" : "flex"

	return (
		<div 
			className={`w-full h-screen bg-black/50 absolute ${userFormDisplay} items-center justify-center z-50`}
		>
			<form
				onSubmit={handleSubmit(HandleUserFormData)}
				className="bg-white w-1/2 rounded-xl px-4 py-3 flex flex-col gap-3"
			>
				<label>Pick your username</label>
				<div className="w-full flex gap-5">
					<input
						{...register("name")}
						type="text"
						placeholder="John Doe"
						className="bg-[#F5F5F5] outline-none w-full h-10 p-2 rounded-lg"
					/>
					<button 
						type="submit"
						className="px-4 py-2 bg-[#8BABD8] text-white rounded-lg"
					>
						Entrar
					</button>
				</div>
			</form>
		</div>
	)
}