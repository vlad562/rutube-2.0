"use client";

import { Button } from "@/share";
import Link from "next/link";

export const AuthButton = () => {
	return (
		<Button className="bg-blue-500 text-white text-sm py-1 px-3 rounded-sm font-semibold">
			<Link href="/auth">Вход и регистрация</Link>
		</Button>
	);
};
