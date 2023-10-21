export function ChatBox(){
	return (
		<button className="w-full flex gap-4 px-4 py-3 items-center hover:bg-[#F5F5F5]">
			<div className="min-w-[48px] h-12 bg-[#8BABD8] rounded-full"></div>
			<div className="w-full flex flex-col items-center">
				<div className="w-full flex items-center justify-between">
					<h2 className="font-semibold text-[#011627]">
						John Doe
					</h2>
					<span className="text-xs text-[#707991]">
						19:48
					</span>
				</div>
				<div className="w-full flex items-center justify-between">
					<p className="text-[#707991] text-sm">
						Ok, see you later
					</p>
					<div 
						className="bg-[#78E378] w-4 h-4 rounded-full flex items-center justify-center text-white text-xs"
					>
						1
					</div>
				</div>
			</div>
		</button>
	)
}