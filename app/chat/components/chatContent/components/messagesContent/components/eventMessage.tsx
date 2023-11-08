interface EventMessageProps {
	message: string
}

export function EventMessage({ message }: EventMessageProps) {
	return (
		<div className="w-full h-10 flex items-center justify-center py-10">
			<span className="p-2 rounded-xl text-xs text-white bg-[#3D70B899]">
				{message}
			</span>
		</div>
	)
}