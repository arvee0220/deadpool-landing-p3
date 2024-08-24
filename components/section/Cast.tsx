import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StaticImageData } from "next/image";

type CastProps = {
	img: StaticImageData;
	castName: string;
	castRole: string;
};

const castMembers: CastProps[] = [];

function Cast() {
	return (
		<section>
			<h1>Deadpool & Wolverine Cast</h1>
			<p>
				Meet the Star-Studded Lineup Bringing Your Favorite Characters to Life. Explore the
				actors behind this iconic Marvel duo and their roles in the film.
			</p>
			<div>
				<Card>
					<CardContent>
						{/* Image */}
						<CardTitle></CardTitle>
						<CardDescription></CardDescription>
					</CardContent>
				</Card>
			</div>
			<Paginate />
		</section>
	);
}

const Paginate: React.FC = () => (
	<Pagination>
		<PaginationContent>
			<PaginationItem>
				<PaginationPrevious href="#" />
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">1</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">2</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">3</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationEllipsis />
			</PaginationItem>
			<PaginationItem>
				<PaginationNext href="#" />
			</PaginationItem>
		</PaginationContent>
	</Pagination>
);

export default Cast;
