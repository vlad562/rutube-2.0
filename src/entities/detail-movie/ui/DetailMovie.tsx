"use client";
import { useGetMovieByIdQuery } from "@/entities/movie/api/movie-api";
import React from "react";
import { IDetailMovieProps } from "../model/interface";
import { Props } from "@/share/model/interface";
import Image from "next/image";
import { MovieSlider } from "@/features/movie-slider";

const DetailMovie = ({ id }: Props<IDetailMovieProps>) => {
	const { data: movie, isError, isFetching } = useGetMovieByIdQuery(id);

	if (isFetching) {
		// Скелетон при загрузке
		return (
			<div className="container mx-auto p-6 flex flex-col md:flex-row gap-6 animate-pulse">
				<div className="w-full md:w-64 h-96 bg-gray-300 rounded-lg" />
				<div className="flex-1 space-y-4 py-1">
					<div className="h-8 bg-gray-300 rounded w-3/4" />
					<div className="h-6 bg-gray-300 rounded w-1/4" />
					<div className="h-4 bg-gray-300 rounded" />
					<div className="h-4 bg-gray-300 rounded" />
					<div className="h-4 bg-gray-300 rounded w-5/6" />
					<div className="h-4 bg-gray-300 rounded w-2/3" />
				</div>
			</div>
		);
	}

	if (isError || !movie || movie.Response === "False") {
		return (
			<p className="text-center text-red-500 text-lg font-semibold">
				Фильм не найден
			</p>
		);
	}

	return (
		<div className="container mx-auto flex flex-col">
			<div className="flex p-6 gap-8">
				{/* Постер */}
				<Image
					src={movie.Poster}
					alt={movie.Title}
					className="w-full md:w-80 h-auto rounded-lg shadow-lg"
					width={500}
					height={500}
				/>

				{/* Основная информация */}
				<div className="flex-1 flex flex-col gap-4">
					<h1 className="text-4xl font-bold">{movie.Title}</h1>
					<p className="text-gray-500 text-lg">
						{movie.Year} • {movie.Runtime} • {movie.Genre}
					</p>

					{/* Рейтинг и IMDB */}
					<div className="flex gap-4 items-center">
						<p className="text-yellow-500 font-semibold">
							⭐ {movie.imdbRating} / 10
						</p>
						<p className="text-gray-500">{movie.imdbVotes} голосов</p>
						<p className="text-gray-500">IMDB ID: {movie.imdbID}</p>
					</div>

					{/* Режиссер, сценарий, актёры */}
					<div className="space-y-1 text-gray-700">
						<p>
							<span className="font-semibold">Режиссер:</span> {movie.Director}
						</p>
						<p>
							<span className="font-semibold">Сценарий:</span> {movie.Writer}
						</p>
						<p>
							<span className="font-semibold">Актёры:</span> {movie.Actors}
						</p>
					</div>

					{/* Сюжет */}
					<div>
						<h2 className="text-2xl font-semibold mt-4 mb-2">Сюжет</h2>
						<p className="text-gray-700 leading-relaxed">{movie.Plot}</p>
					</div>

					{/* Дополнительно */}
					<div className="text-gray-600 mt-4 space-y-1">
						<p>
							<span className="font-semibold">Язык:</span> {movie.Language}
						</p>
						<p>
							<span className="font-semibold">Страна:</span> {movie.Country}
						</p>
						<p>
							<span className="font-semibold">Награды:</span> {movie.Awards}
						</p>
						{movie.BoxOffice && (
							<p>
								<span className="font-semibold">Сборы:</span> {movie.BoxOffice}
							</p>
						)}
						{movie.Production && (
							<p>
								<span className="font-semibold">Студия:</span>{" "}
								{movie.Production}
							</p>
						)}
					</div>
				</div>
			</div>
			<MovieSlider />
		</div>
	);
};

export default DetailMovie;
