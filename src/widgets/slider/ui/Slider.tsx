"use client";

import { Movie } from "@/entities/movie";
import { useLazyGetMovieByTitleAndYearQuery } from "@/entities/movie/api/movie-api";
import { MovieSlider } from "@/features/movie-slider";
import { useEffect, useState } from "react";

const letters = "zsdhfdg".split("");
const CURRENT_YEAR = new Date().getFullYear();

const Slider = () => {
	const [movies, setMovies] = useState<string[]>([]);
	const [trigger] = useLazyGetMovieByTitleAndYearQuery();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchMovies = async () => {
			setIsLoading(true);

			const results: string[] = [];

			for (const letter of letters) {
				const movie = await trigger({ title: letter, year: CURRENT_YEAR })
					.unwrap()
					.catch(() => null);
				if (movie?.Poster) {
					results.push(movie.Poster);
				}

				if (results.length >= 10) {
					console.log(results);
					break;
				} // лимит фильмов
			}

			setMovies(results);
			setIsLoading(false);
		};

		fetchMovies();
	}, [trigger]);

	const handleSelectMovie = (movie: Movie) => {
		console.log("Открыть модалку с фильмом:", movie);
	};

	if (isLoading) {
		return <div className="p-4 text-gray-500">Загрузка фильмов...</div>;
	}

	return (
		<MovieSlider
			movies={movies}
			onSelect={handleSelectMovie}
		/>
	);
};

export default Slider;
