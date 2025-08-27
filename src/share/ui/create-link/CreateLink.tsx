"use client";
import { ICreateLinkProps } from "@/share/model/create-link/types";
import { Props } from "@/share/model/types";
import { useRouter } from "next/navigation";
import React from "react";

export const CreateLink = ({
	children,
	link,
	className,
}: Props<ICreateLinkProps>) => {
	const router = useRouter();

	return (
		<div
			className={className}
			onClick={() => router.push(link)}
		>
			{children}
		</div>
	);
};
