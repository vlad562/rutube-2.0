"use client"

import React, { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export const Button = ({ children, className, ...props }: Props) => {
	return (
		<button
			className={className}
			{...props}
		>
			{children}
		</button>
	)
}
