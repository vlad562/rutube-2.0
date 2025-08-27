"use client";
import { Movie } from "@/entities/movie";
import { useLazyGetMovieByTitleAndYearQuery } from "@/entities/movie/api/movie-api";
import { useEffect, useState } from "react";

const letters = "zsdhfdg".split("");
const CURRENT_YEAR = new Date().getFullYear();

type MovieForSlider = Pick<Movie, "imdbID" | "Poster">;

export const useMovieSlider = () => {
	const [movies, setMovies] = useState<MovieForSlider[]>([]);
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
					.map(m =>
						m
							? {
									imdbID: m.imdbID,
									Poster: m.Poster,
							  }
							: null
					)
					.filter((m): m is MovieForSlider => Boolean(m && m.Poster))
					.slice(0, 10) as MovieForSlider[]
			);
			setIsLoading(false);
		};
		fetchMovies();
	}, [trigger]);

	return { movies, isLoading };
};
