"use client";
import { useGetMovieByTitleQuery } from "@/entities/movie/api/movie-api";
import { Pagination } from "@/features/pagination";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

export const MovieSearchList = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const query = searchParams.get("query") || "";
	const page = parseInt(searchParams.get("page") || "1", 10);

	const { data, isFetching, error } = useGetMovieByTitleQuery(
		{ title: query, page },
		{
			skip: !query,
		}
	);

	const totalPages = data?.totalResults
		? Math.ceil(Number(data.totalResults) / 10)
		: 1;

	const handlePageChange = (newPage: number) => {
		if (newPage < 1) return;
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", String(newPage));
		router.push(`?${params.toString()}`);
	};

	if (!query)
		return <p className="text-center">Введите запрос для поиска фильмов.</p>;
	if (isFetching) return <p className="text-center">Загрузка...</p>;
	if (error) return <p className="text-center">Ошибка загрузки.</p>;
	if (!data?.Search?.length)
		return <p className="text-center">Фильмы не найдены.</p>;

	return (
		<div className="flex flex-col items-center pointer cursor-pointer">
			{/* Сетка фильмов */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
				{data.Search.map((movie, idx) => (
					<div
						key={idx}
						className=" shadow-md rounded-lg p-4 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
						onClick={() => router.push(`/movie/${movie.imdbID}`)}
					>
						<Image
							src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"}
							alt={movie.Title}
							width={500}
							height={500}
							className="w-40 h-60 object-cover rounded mb-3"
						/>
						<h3 className="font-semibold">{movie.Title}</h3>
						<p className="text-gray-600">{movie.Year}</p>
					</div>
				))}
			</div>
			{totalPages > 1 && (
				<div className="mt-6">
					<Pagination
						totalPages={totalPages}
						initialPage={page}
						onPageChange={handlePageChange}
					/>
				</div>
			)}
		</div>
	);
};

