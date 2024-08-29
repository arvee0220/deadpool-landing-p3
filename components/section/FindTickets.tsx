import { Road_Rage } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const roadRage = Road_Rage({ subsets: ["latin"], weight: ["400"] });

function FindTickets() {
	return (
		<div className="w-11/12 flex flex-col items-center">
			<div className="flex flex-col">
				<h1 className={`${roadRage.className} text-5xl lg:text-9xl text-center`}>
					<span className="text-deadpool-accent">DEADPOOL</span> &{" "}
					<span className="text-deadpool-secondary">WOLVERINE</span> IS JUST THE BLOODY,
					PUERILE, HEARTFELT MOVIE WE WANTED
				</h1>
				<p className="text-right text-deadpool-body relative self-end mr-[7.4%]">
					by Kyle Anderson
				</p>
			</div>
			<div className="flex">
				<div className="hidden absolute lg:flex w-[600px] h-[600px] border-2 border-deadpool-body rounded-full bg-transparent items-center justify-center -left-3 top-[1880px]">
					<div className="hiden lg:flex justify-center w-4/6 h-[25%] relative items-center border-2 border-deadpool-primary rounded-full bg-transparent">
						<div></div>
					</div>
				</div>
				<h1 className="text-8xl lg:text-[300px] tracking-tighter font-outline-primary text-transparent font-semibold">
					MARVEL
				</h1>
			</div>
			<div className="flex self-end mr-[7.4%] gap-4">
				<div>arrow</div>
				<div>Find tickets button</div>
				<div>Avatars</div>
			</div>
		</div>
	);
}

export default FindTickets;
