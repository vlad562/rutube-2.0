import Navigation from "@/widgets/aside/ui/Aside"
import Slider from "../../widgets/slider/ui/Slider"
import React from "react"
// import { SnippedList } from "@/features/navigation"

const Main = () => {
	return (
		<div className="flex">
			<Navigation />
			<main className="flex-grow pt-6 pb-6 pr-7 pl-7 overflow-hidden">
				<Slider />
			</main>
		</div>
	)
}

export default Main
