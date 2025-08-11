"use client";

import { useGetMovieByTitleQuery } from "@/entities/movie/api/movie-api";
import { SearchDropdown } from "@/features/search-dropdown/ui/SearchDropDown";
import { Backdrop, Input } from "@/share";
import { useDebounce } from "@/share/lib/hooks/useDebounce";
import { useState, useEffect, useRef } from "react";

export const SearchInput = () => {
	const [value, setValue] = useState<string>("");
	const [focus, setFocused] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
    
	const debouncedValue = useDebounce(value, 300);
    
	const { data, isFetching, error } = useGetMovieByTitleQuery({title: debouncedValue, page: 1}, {
        skip: !debouncedValue,
	});

    const moviesToShow = data?.Search?.slice(0, 5) ?? [];

	useEffect(() => {
		if (!debouncedValue) return;
	}, [debouncedValue]);

	return (
		<div className="relative w-[470px]">
			<Backdrop
				isVisible={focus}
				onClose={() => {
					inputRef.current?.blur();
					setFocused(false);
				}}
			/>

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
						? `
                    bg-[#29333D]
                    border
                    border-[#29333D]
                    rounded-[6px]
                    w-[470px]
                    cursor-text
                    transition-[width] duration-300 ease-in-out
                    min-w-xs
                    outline-none
                    px-3
                    py-3
                    z-1000
                    `
						: `
                    bg-[#29333D]
                    border 
                  border-[#29333D]
                    rounded-[6px]
                    cursor-text
                    transition-colors duration-[120ms] ease-out
                    w-[370px]
                    outline-none
                    px-3
                    py-3
                    `
				}
			/>

			<SearchDropdown
				isVisible={focus && !!debouncedValue}
				isLoading={isFetching}
				error={error}
				results={moviesToShow}
				onSelect={movie => {
					setValue(movie.title);
				}}
			/>
		</div>
	);
};
