"use client";
import { useLazyGetMovieByTitleAndYearQuery } from "@/entities/movie/api/movie-api";
import { useEffect, useState } from "react";

const letters = "zsdhfdg".split("");
const CURRENT_YEAR = new Date().getFullYear();

export const useMovieSlider = () => {
	const [movies, setMovies] = useState<string[]>([]);
	const [trigger] = useLazyGetMovieByTitleAndYearQuery();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchMovies = async () => {
			setIsLoading(true);
			const requests = letters.map(letter =>
				trigger({ title: letter, year: CURRENT_YEAR })
					.unwrap()
					.catch(() => null)
			);
			const resultsData = await Promise.all(requests);
			setMovies(
				resultsData
					.map(m => m?.Poster)
					.filter(Boolean)
					.slice(0, 10) as string[]
			);
			setIsLoading(false);
		};
		fetchMovies();
	}, [trigger]);

	return { movies, isLoading };
};
