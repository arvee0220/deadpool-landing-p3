import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
	className?: string;
};

function MaxWidthWrapper({ children, className }: Props) {
	return <div className={cn("max-w-full mx-auto", className)}>{children}</div>;
}

export default MaxWidthWrapper;
