import { Movie } from "@/entities/movie";
import { ReactNode } from "react";

export interface MovieSearchResponse {
	Response: "True" | "False";
	Search?: Movie[];
	totalResults?: string;
}

interface PropsBase {
	children: ReactNode;
	className?: string;
}

export type Props<T = object> = PropsBase & T;
