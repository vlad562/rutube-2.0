import AuthButton from "@/features/auth/ui/AuthButton";
import { SearchForm } from "@/features/search-form";
import Logo from "@/widgets/logo/ui/Logo";
import React from "react";

const Header = () => {
	return (
		<header className="bg-[#1c232b] display: flex justify-between px-3 py-2">
			<Logo />
			<SearchForm />
			<AuthButton />
		</header>
	);
};

export default Header;
