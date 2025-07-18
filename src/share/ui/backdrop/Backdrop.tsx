"use client"

import { useEffect } from "react"
import { Portal } from "../portal/Portal"

interface BackdropProps {
	isVisible: boolean
	onClose: () => void
}

export const Backdrop = ({ isVisible, onClose }: BackdropProps) => {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose()
			}
		}

		if (isVisible) {
			document.addEventListener("keydown", handleKeyDown)
		}

		return () => {
			document.removeEventListener("keydown", handleKeyDown)
		}
	}, [isVisible, onClose])

	return (
		<Portal>
			<div
				className={`
					fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out
					${
						isVisible
							? "opacity-100 pointer-events-auto"
							: "opacity-0 pointer-events-none"
					}
				`}
			/>
		</Portal>
	)
}
