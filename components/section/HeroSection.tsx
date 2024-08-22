import NavBar from "../layout/NavBar";
import Image from "next/image";
import marvelStudio from "../../public/marvelStudios.svg";
import { Button } from "../ui/button";

function HeroSection() {
	return (
		<div
			className="w-screen h-screen bg-deadpool-dark bg-cover bg-center flex flex-col items-center"
			id="#home"
		>
			<NavBar />
			<div className="w-11/12 h-1/6">
				<p className="text-[16px] text-left self-start px-3 md:px-1 leading-6">
					Premiered on July 22, 2024
				</p>
			</div>
			<div className="w-11/12 flex justify-start">
				<div className="w-4/5 md:w-3/6 px-3 md:px-1 flex flex-col">
					<Image src={marvelStudio} alt="Marvel logo" className="relative -left-1" />
					<h1 className="text-5xl md:text-8xl font-bold">DEADPOOL</h1>
					<h1 className="py-2 text-5xl md:text-8xl font-bold flex">
						<span className=" text-4xl md:text-5xl text-transparent font-outline-secondary leading-8 md:leading-snug">
							&
						</span>
						<span className="text-transparent font-outline-primary">WOLVERINE</span>
					</h1>
					<p className="text-wrap">
						&quot;Deadpool & Wolverine&quot; is a 2024 superhero film featuring the
						Marvel characters, produced by Marvel Studios and distributed by Disney.
					</p>
					<div className="flex gap-5 py-8">
						<Button variant={"secondary"} className="rounded-full" size={"lg"}>
							Onsale Tickets
						</Button>
						<Button variant={"outline"} className="rounded-full" size={"lg"}>
							Trailer
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
