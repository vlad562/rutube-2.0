import AuthButton from "@/features/auth/ui/AuthButton"
import { SearchInput } from "@/features/film-search/ui"
import Image from "next/image"
import React from "react"

const Header = () => {
	return (
		<header className="bg-[#1c232b] display: flex justify-between px-3 py-2">
			<Image
				src="/logo.svg"
				alt="logo"
				width={200}
				height={200}
				priority
			/>
			<SearchInput />
			<AuthButton />
		</header>
	)
}

export default Header
