import Navigation from "@/widgets/Navigation/ui/Navigation"
import Slider from "../../../public/Slider"
import React from "react"
import { SnippedList } from "@/features/snipped-list"

const Main = () => {
	return (
		<div className="flex">
			<Navigation />
			<main className="pt-6 pb-6 pr-7 pl-7">
				<SnippedList />
				<Slider />
			</main>
		</div>
	)
}

export default Main
