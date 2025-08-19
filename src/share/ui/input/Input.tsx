"use client"

import React, { InputHTMLAttributes, RefObject } from "react"

type Props = {
	ref: RefObject<HTMLInputElement | null>
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className, ref, ...props }: Props) => {
	return (
		<input
			ref={ref}
			{...props}
			className={className}
		/>
	);
}
