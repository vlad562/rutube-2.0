"use client"

import { useEffect, useState, ReactNode } from "react"
import { createPortal } from "react-dom"

interface PortalProps {
	children: ReactNode
}

export const Portal = ({ children }: PortalProps) => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		return () => setMounted(false)
	}, [])

	if (!mounted) return null

	const portalRoot = document.getElementById("portal-root")
	return portalRoot ? createPortal(children, portalRoot) : null
}
