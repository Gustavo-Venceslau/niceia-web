import { colors } from "@/app/chat/constants/colors";

export const pickRandomColor = (sender: string): string => {
	let hash = 0;
	for(let i = 0; i < sender.length; i++){
		hash = 31 * hash + sender.charCodeAt(i);
	}
	let index = Math.abs(hash % colors.length);
	return colors[index];
}