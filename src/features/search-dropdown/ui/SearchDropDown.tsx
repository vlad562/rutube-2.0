"use client";

import { Movie } from "@/entities/movie";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface SearchDropdownProps {
	isVisible: boolean;
	isLoading: boolean;
	error?: FetchBaseQueryError | SerializedError | undefined;
	results?: Movie[];
}

export const SearchDropdown: React.FC<SearchDropdownProps> = ({
	isVisible,
	isLoading,
	error,
	results = [],
}) => {
	const router = useRouter();
	if (!isVisible) return null;

	return (
		<div className="absolute top-full left-0 mt-2 w-full bg-[#1E252B] rounded shadow-lg max-h-[500px] z-50">
			{isLoading && <div className="p-3 text-gray-400">Загрузка...</div>}
			{error && <div className="p-3 text-red-500">Ошибка при поиске</div>}

			{results.length > 0
				? results.map((movie, idx) => (
						<div
							key={idx}
							className="flex items-center gap-3 p-3 hover:bg-[#29333D] cursor-pointer overflow-hidden"
							onMouseDown={() => {
                                router.push("/movie/" + movie.imdbID);
							}}
						>
							<Image
								src={movie.Poster}
								alt={movie.Title || ""}
								className="w-10 h-14 object-cover rounded"
								width={100}
								height={100}
							/>
							<div className="text-white">
								<div className="font-medium">{movie.Title}</div>
								<div className="text-sm text-gray-400">
									{movie.Year?.slice(0, 4)}
								</div>
							</div>
						</div>
				  ))
				: !isLoading &&
				  !error && <div className="p-3 text-gray-400">Ничего не найдено</div>}
		</div>
	);
};
