"use client";
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
import Image, { StaticImageData } from "next/image";
import { aaron, emma, hugh, matthew, ryan, shioli } from "../constants/images";
import { useState } from "react";

type CastProps = {
	img: StaticImageData;
	castName: string;
	castRole: string;
};

const castMembers: CastProps[] = [
	{ img: ryan, castName: "Ryan Reynolds", castRole: "Deadpool" },
	{ img: hugh, castName: "Hugh Jackman", castRole: "Wolverine" },
	{ img: emma, castName: "Emma Corrin", castRole: "Cassandra Nova" },
	{ img: aaron, castName: "Aaron Stanford", castRole: "Pyro" },
	{ img: matthew, castName: "Matthew Macfayden", castRole: "Mobius" },
	{ img: shioli, castName: "Shioli Kutsuna", castRole: "Yukio" },
];

const itemsPerPage = 3;

function Cast() {
	const [currentPage, setCurrentPage] = useState(1);

	const lastItemIdx = currentPage * itemsPerPage;
	const firstItemIdx = lastItemIdx - itemsPerPage;
	const currentItems = castMembers.slice(firstItemIdx, lastItemIdx);

	const pageChangeHandler = (pageNumber: number): void => setCurrentPage(pageNumber);

	const totalPages = Math.ceil(castMembers.length / itemsPerPage);

	return (
		<section>
			<h1>Deadpool & Wolverine Cast</h1>
			<p>
				Meet the Star-Studded Lineup Bringing Your Favorite Characters to Life. Explore the
				actors behind this iconic Marvel duo and their roles in the film.
			</p>
			<div>
				{currentItems.map(({ img, castName, castRole }, idx) => (
					<Card key={idx}>
						<CardHeader>
							<Image src={img} alt={castName} />
						</CardHeader>
						<CardContent>
							<CardTitle>{castName}</CardTitle>
							<CardDescription>{castRole}</CardDescription>
						</CardContent>
					</Card>
				))}
			</div>
			<Paginate
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={pageChangeHandler}
			/>
		</section>
	);
}

type PaginateProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (pageNumber: number) => void;
};

const Paginate: React.FC<PaginateProps> = ({ currentPage, totalPages, onPageChange }) => (
	<Pagination>
		<PaginationContent>
			<PaginationItem>
				<PaginationPrevious
					href="#"
					onClick={(e) => {
						e.preventDefault();
						onPageChange(Math.max(currentPage - 1, 1));
					}}
				/>
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
				<PaginationLink href="#">4</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationEllipsis />
			</PaginationItem>
			<PaginationItem>
				<PaginationNext
					href="#"
					onClick={(e) => {
						e.preventDefault();
						onPageChange(Math.min(currentPage + 1, totalPages));
					}}
				/>
			</PaginationItem>
		</PaginationContent>
	</Pagination>
);

export default Cast;
