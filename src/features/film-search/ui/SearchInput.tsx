"use client"

import { Portal } from "@/share/ui/portal"
import { useDebounce } from "@/share/lib/useDebounce"
import { Input } from "@/share/ui/Input"
import { useState, useEffect } from "react"

export const SearchInput = () => {
	const [value, setValue] = useState<string>("")
	const [focus, setFocused] = useState<boolean>(false)

	const debouncedValue = useDebounce(value, 300)

	useEffect(() => {
		if (!debouncedValue) return
		console.log("Поиск:", debouncedValue)
		// добавить fetch или диспатч в zustand/store
	}, [debouncedValue])

	return (
		<div className="relative w-[470px]">
			{focus && (
				<Portal>
					<div
						className={`fixed inset-0 bg-black/50 transition-opacity duration-400 ease-in-out ${
							focus
								? "opacity-100 pointer-events-auto"
								: "opacity-0 pointer-events-none"
						}
		        `}
					/>
				</Portal>
			)}

			<Input
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
		</div>
	)
}
