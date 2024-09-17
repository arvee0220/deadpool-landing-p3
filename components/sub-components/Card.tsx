import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useEffect, useState } from "react";
import CircularProgressWithLabel from "./LoadingComponent";
import { progress } from "framer-motion";

interface CelebCardsProps {
	imgs: StaticImageData | string; // Or string if you're using external URLs
	castName: string;
	castRole: string;
}

const CelebCards: React.FC<CelebCardsProps> = ({ imgs, castName, castRole }, idx) => {
	const [loading, setLoading] = useState(true);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
		}, 800);
		return () => {
			clearInterval(timer);
		};
	}, []);

	useEffect(() => {
		setLoading(true);
	}, [imgs]);

	const handleImageLoad = () => {
		setLoading(false);
	};

	return (
		<Card className="bg-deadpool-neutral border-none flex flex-col items-center">
			<CardHeader className="flex justify-center">
				<div className="relative min-w-[176px] max-w-[176px] h-[300px] flex justify-center items-center">
					{loading && <CircularProgressWithLabel value={progress} />}
					<Image
						src={imgs}
						alt={castName}
						fill={true}
						style={{ objectFit: "cover" }}
						className={`rounded-lg`}
						onLoad={handleImageLoad}
					/>
				</div>
			</CardHeader>

			{loading === true ? (
				""
			) : (
				<CardContent className="flex flex-col items-start relative w-full">
					<CardTitle className="text-deadpool-primary">{castName}</CardTitle>
					<CardDescription>{castRole}</CardDescription>
				</CardContent>
			)}
		</Card>
	);
};
export default CelebCards;
