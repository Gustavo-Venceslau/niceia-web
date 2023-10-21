import { BsCheckLg } from "react-icons/bs";

interface MessageProps {
	message: string
}

export function Message({ message }: MessageProps) {
	return (
		<div className="">
			<div className="max-w-sm relative bg-white px-3 py-1 rounded-xl">
				<p className="text-[#011627]">
					{message}
				</p>
				<div className="w-full flex items-center justify-end gap-1">
					<span className="text-xs">
						18:12
					</span>
					<BsCheckLg size={14}/>
				</div>
			</div>
		</div>
	)
}