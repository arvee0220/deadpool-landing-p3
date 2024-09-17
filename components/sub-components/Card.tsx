import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useEffect, useState } from "react";
import CircularProgressWithLabel from "./LoadingComponent";

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
		<div className="flex flex-col justify-center items-center">
			{loading && <CircularProgressWithLabel value={progress} />}
			<Card className="bg-deadpool-neutral border-none flex flex-col items-center">
				<CardHeader className="flex justify-center">
					<div className="relative min-w-[188px] max-w-[188px] h-[300px]">
						<Image
							src={imgs}
							alt={castName}
							fill={true}
							style={{ objectFit: "cover" }}
							className="rounded-lg"
							onLoad={handleImageLoad}
						/>
					</div>
				</CardHeader>
				{loading === false ? (
					<CardContent className="flex flex-col items-start relative w-full">
						<CardTitle className="text-deadpool-primary">{castName}</CardTitle>
						<CardDescription>{castRole}</CardDescription>
					</CardContent>
				) : (
					<CircularProgressWithLabel value={progress} />
				)}
			</Card>
		</div>
	);
};

export default CelebCards;
