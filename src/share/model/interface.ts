import { Movie } from "@/entities/movie";

export interface MovieSearchResponse {
	Response: "True" | "False";
	Search?: Movie[];
	totalResults?: string;
}
