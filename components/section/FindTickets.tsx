import { Road_Rage } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { deadpoolWolverine, icon1, icon2, icon3, play } from "../constants/images";
import { Button } from "../ui/button";
import { PlayIcon } from "lucide-react";

const roadRage = Road_Rage({ subsets: ["latin"], weight: ["400"] });

function FindTickets() {
	return (
		<section className="w-11/12 flex flex-col items-center">
			<div className="flex flex-col">
				<h1
					className={`${roadRage.className} text-5xl md:text-7xl lg:text-9xl text-center`}
				>
					<span className="text-deadpool-accent">DEADPOOL</span> &{" "}
					<span className="text-deadpool-secondary">WOLVERINE</span> IS JUST THE BLOODY,
					PUERILE, HEARTFELT MOVIE WE WANTED
				</h1>
				<p className="text-right text-deadpool-body relative self-end mr-[7.4%]">
					by Kyle Anderson
				</p>
			</div>
			<div className="flex justify-center items-center">
				<div className="hidden absolute xl:flex w-[700px] h-[700px] border-2 border-deadpool-body rounded-full bg-transparent items-center justify-center 2xl:-left-[20rem] 2xl:top-[1780px] xl:-left-[22rem] xl:top-[1920px]">
					<div className="hiden xl:flex justify-center xl:w-3/6 2xl:w-3/6 h-[25%] relative items-center border-2 border-deadpool-primary rounded-full bg-transparent">
						<div className="w-[1075px] h-[100px] absolute flex items-center justify-center left-1 -mt-2 overflow-hidden">
							<Image
								src={deadpoolWolverine}
								alt="Deadpool and Wolverine"
								className="rotate-45 top-16 -left-36 relative"
							/>
						</div>
					</div>
				</div>
				<h1 className="text-8xl md:text-[200px] lg:text-[250px] xl:text-[300px] tracking-tighter font-outline-primary text-transparent font-semibold">
					MARVEL
				</h1>
			</div>
			<div className="w-full relative flex flex-col md:flex-row self-end 2xl:mr-[7.4%] gap-4 justify-center items-center">
				<div className="flex justify-center items-center w-3/6 relative">
					<div>arrow</div>
				</div>
				<div className="w-full md:w-3/6 h-16 relative flex justify-between items-center px-2 md:gap-2 xl:justify-end">
					<Button className="flex justify-evenly items-center w-56 h-20 md:h-16 py-7 rounded-full text-deadpool-primary bg-[#363636] gap-3">
						<div className="left-2 p-2 bg-deadpool-primary rounded-full">
							<PlayIcon className="size-6 fill-black text-black" />
						</div>

						<div>Find Tickets</div>
					</Button>
					<div className="flex">
						<Avatar>
							<Image src={icon1} alt="Icon1" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className="-left-2">
							<Image src={icon2} alt="Icon2" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className="-left-4">
							<Image src={icon3} alt="Icon3" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FindTickets;
