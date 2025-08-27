"use client";
import { useState } from "react";
import { useLazyGetMovieByIdQuery } from "../api";

export const useMovieById = () => {
	const [trigger, { data, isFetching, isError }] = useLazyGetMovieByIdQuery();
	const [movieId, setMovieId] = useState("");

	const searchMovie = async () => {
		if (movieId.trim()) {
			await trigger(movieId);
		}
	};

	return {
		movie: data,
		isFetching,
		isError,
		movieId,
		setMovieId,
		searchMovie,
	};
};
