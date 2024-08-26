"use client";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import {
	aaron,
	blake,
	chris,
	dafne,
	emma,
	hugh,
	leslie,
	matthew,
	ryan,
	shioli,
} from "../constants/images";
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
	{ img: leslie, castName: "Leslie Uggams", castRole: "Blind Al" },
	{ img: blake, castName: "Blake Lively", castRole: "Ladypool" },
	{ img: chris, castName: "Chris Evans", castRole: "Johnny Storm" },
	{ img: dafne, castName: "Dafne Keen", castRole: "Laura / X-23" },
];

const itemsPerPage = 6;

function Cast() {
	const [currentPage, setCurrentPage] = useState(1);

	const lastItemIdx = currentPage * itemsPerPage;
	const firstItemIdx = lastItemIdx - itemsPerPage;
	const currentItems = castMembers.slice(firstItemIdx, lastItemIdx);

	const pageChangeHandler = (pageNumber: number): void => setCurrentPage(pageNumber);

	const totalPages = Math.ceil(castMembers.length / itemsPerPage);

	return (
		<section className="w-11/12 flex flex-col items-center justify-center -z-10">
			<div className="self-end text-right mb-8 max-w-3xl ml-auto pr-5">
				<h1 className="text-3xl mb-2">Deadpool & Wolverine Cast</h1>
				<p>
					Meet the Star-Studded Lineup Bringing Your Favorite Characters to Life. Explore
					the actors behind this iconic Marvel duo and their roles in the film.
				</p>
			</div>
			<div className="flex flex-wrap justify-center gap-6">
				{currentItems.map(({ img, castName, castRole }, idx) => (
					<Card key={idx} className="bg-deadpool-neutral border-none">
						<CardHeader>
							<Image
								src={img}
								alt={castName}
								className="w-full h-[300px] rounded-lg relative"
							/>
						</CardHeader>
						<CardContent>
							<CardTitle className="text-deadpool-primary">{castName}</CardTitle>
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
			{Array.from({ length: totalPages }, (_, idx) => (
				<PaginationItem key={idx + 1}>
					<PaginationLink
						href="#"
						onClick={(e) => {
							e.preventDefault();
							onPageChange(idx + 1);
						}}
						className={currentPage === idx + 1 ? "active" : ""}
					>
						{idx + 1}
					</PaginationLink>
				</PaginationItem>
			))}
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
