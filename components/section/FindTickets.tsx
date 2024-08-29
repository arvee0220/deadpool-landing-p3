import { Road_Rage } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { deadpoolWolverine } from "../constants/images";

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
			<div className="flex justify-center items-center">
				<div className="hidden absolute xl:flex w-[700px] h-[700px] border-2 border-deadpool-body rounded-full bg-transparent items-center justify-center 2xl:-left-[12rem] 2xl:top-[1870px] xl:-left-[18rem] xl:top-[1920px]">
					<div className="hiden xl:flex justify-center xl:w-3/6 2xl:w-4/6 h-[25%] relative items-center border-2 border-deadpool-primary rounded-full bg-transparent">
						<div className="w-[1075px] h-[100px] absolute flex items-center justify-center left-1 -mt-2 overflow-hidden">
							<Image
								src={deadpoolWolverine}
								alt="Deadpool and Wolverine"
								className="rotate-45 top-16 -left-36 relative"
							/>
						</div>
					</div>
				</div>
				<h1 className="text-8xl lg:text-[250px] xl:text-[300px] tracking-tighter font-outline-primary text-transparent font-semibold">
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
