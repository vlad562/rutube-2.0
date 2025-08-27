import { AuthButton } from "@/features/auth";
import { SearchForm } from "@/features/search-form";
import { Logo } from "@/widgets/logo";
import React from "react";

export const Header = () => {
	return (
		<header className="bg-[#1c232b] display: flex justify-between px-3 py-2 fixed w-full">
			<Logo />
			<SearchForm />
			<AuthButton />
		</header>
	);
};
