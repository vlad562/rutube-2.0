"use client";
import "swiper/css";
import "swiper/css/navigation";
import { useMovieSlider } from "../lib/useMovieSlider";
import Slider from "@/share/ui/ slider/ui/Slider";

export const MovieSlider = () => {
	const { movies, isLoading } = useMovieSlider();
	if (isLoading) {
		return (
			<div className="flex gap-4">
				{Array(3)
					.fill(0)
					.map((_, idx) => (
						<div
							key={idx}
							className="w-full aspect-[16/9] bg-gray-700 animate-pulse rounded-lg"
						/>
					))}
			</div>
		);
	}

	return (
		<Slider
			movies={movies}
			slidesPerView={3}
			spaceBetween={20}
			className="w-full -z-50"
			classNameSwiperSlide="relative w-full aspect-[16/9] overflow-hidden"
		/>
	);
};
