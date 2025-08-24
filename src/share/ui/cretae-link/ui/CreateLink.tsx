"use client";
import { Props } from "@/share/model/interface";
import { useRouter } from "next/navigation";
import React from "react";
import { ICreateLinkProps } from "../model/interface";

const CreateLink = ({ children, link, className }: Props<ICreateLinkProps>) => {
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

export default CreateLink;
