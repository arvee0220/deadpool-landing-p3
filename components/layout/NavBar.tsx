import { Moon, Phone } from "lucide-react";
import { Button } from "../ui/button";

const NavBar: React.FC = () => {
	return (
		<div className="w-11/12 h-[8rem] flex justify-between items-center">
			<div className="h-15 px-3 md:px-0">
				<span className="text-[16px]">NIGHT</span>
				<Moon size={15} className="inline relative bottom-1" />
				<p className="font-bold text-[24px] relative bottom-3">CINEMA</p>
			</div>

			<div className="md:w-6/12 md:hidden flex gap-2 items-center">
				<div>
					<Phone />
				</div>
				<div className="flex flex-col justify-between w-6 h-5 cursor-pointer">
					<span className="block w-full h-[2px] bg-deadpool-primary rounded" />
					<span className="block w-4/6 h-[2px] bg-deadpool-primary rounded ml-auto" />
					<span className="block w-full h-[2px] bg-deadpool-primary rounded" />
				</div>
			</div>

			{/* Mid to larger viewport */}
			<div className="hidden w-6/12 md:flex justify-end items-center gap-5 pr-2">
				<ul className="w-6/12 flex flex-row justify-between gap-3 p-3">
					<li>Home</li>
					<li>Reviews</li>
					<li>Article</li>
					<li>Cast</li>
				</ul>
				<Button variant="secondary" className="rounded-full">
					Contact
				</Button>
			</div>
		</div>
	);
};

export default NavBar;
