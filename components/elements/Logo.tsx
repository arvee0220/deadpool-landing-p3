import { Moon } from "lucide-react";

function Logo() {
	return (
		<div className="h-15 flex flex-col text-deadpool-primary ml-3">
			<span className="text-[16px]">
				NIGHT <Moon size={18} className="inline relative -top-[10px] -left-[2px]" />
			</span>
			<span className="font-bold text-[24px] leading-none relative -top-[0.4rem]">
				CINEMA
			</span>
		</div>
	);
}

export default Logo;
