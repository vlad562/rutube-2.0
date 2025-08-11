import Navigation from "@/widgets/navigation/ui/Navigation";
import React from "react";
import { SnippedList } from "@/features/navigation";
import Slider from "@/widgets/slider/ui/Slider";

const HomePage = () => {
	return (
		<div className="flex">
			<Navigation />
			<main className="flex-grow pt-6 pb-6 pr-7 pl-7 overflow-hidden">
				<SnippedList />
				<Slider />
			</main>
		</div>
	);
};

export default HomePage;
