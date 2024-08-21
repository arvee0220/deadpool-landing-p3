import { Moon } from "lucide-react";
import { Button } from "../ui/button";

const NavBar: React.FC = () => {
	return (
		<div className="w-11/12 h-[8rem] flex justify-between items-center">
			<div>
				<p className="text-sm">
					NIGHT
					<Moon size={15} className="inline bottom-2" />
				</p>
				<p>CINEMA</p>
			</div>
			<div className="w-6/12 flex justify-end items-center gap-5 pr-2">
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
