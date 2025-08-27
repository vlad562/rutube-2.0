"use client";

import { useGetMovieByTitleQuery } from "@/entities/movie/api/movie-api";
import { SearchDropdown } from "@/features/search-dropdown/ui/SearchDropDown";
import { Backdrop, Input, Portal } from "@/share";
import { useDebounce } from "@/share/lib/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export const SearchForm = () => {
	const [value, setValue] = useState<string>("");
	const [focus, setFocused] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const router = useRouter();
	const debouncedValue = useDebounce(value, 300);

	const { data, isFetching, error } = useGetMovieByTitleQuery(
		{ title: debouncedValue, page: 1 },
		{
			skip: !debouncedValue,
		}
	);

	const moviesToShow = data?.Search?.slice(0, 5) ?? [];

	useEffect(() => {
		if (!debouncedValue) return;
	}, [debouncedValue]);

	const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!value.trim()) {
			alert("введите название фильма");
			return;
		}
		setFocused(false);
		router.push(`/movies?query=${encodeURIComponent(value.trim())}&page=1`);
	};

	return (
		<>
			{/* Фон */}
			<Backdrop
				isVisible={focus}
				onClose={() => {
					inputRef.current?.blur();
					setFocused(false);
				}}
			/>

			{/* Сам поиск в портале */}
			<Portal>
				<form
					className={`
						fixed top-[10px] left-1/2 -translate-x-1/2
						z-[50] w-[470px]
					`}
					onSubmit={formSubmit}
				>
					<Input
						ref={inputRef}
						type="text"
						placeholder="Поиск"
						value={value}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setValue(e.target.value)
						}
						onFocus={() => setFocused(true)}
						onBlur={() => setFocused(false)}
						className={
							focus
								? "relative bg-[#29333D] border border-[#29333D] rounded-[6px] w-[470px] cursor-text transition-[width] duration-300 ease-in-out min-w-xs outline-none px-3 py-3 z-50"
								: "bg-[#29333D] border border-[#29333D] rounded-[6px] cursor-text transition-colors duration-[120ms] ease-out w-[370px] outline-none px-3 py-3 z-50"
						}
					/>

					<SearchDropdown
						isVisible={focus && !!debouncedValue}
						isLoading={isFetching}
						error={error}
						results={moviesToShow}
					/>
				</form>
			</Portal>
		</>
	);
};
