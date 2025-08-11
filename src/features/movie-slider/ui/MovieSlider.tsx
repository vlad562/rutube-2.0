"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { Movie } from "@/entities/movie";

import "swiper/css";
import "swiper/css/navigation";

interface MovieSliderProps {
	movies: Array<string>;
	onSelect?: (movie: Movie) => void;
}

export const MovieSlider = ({ movies }: MovieSliderProps) => {
	return (
		<Swiper
			modules={[Navigation]}
			spaceBetween={20}
			slidesPerView={3}
			navigation
			className="w-full"
		>
			{movies.map((movie, idx) => (
				<SwiperSlide
					key={idx}
					className="flex justify-center"
				>
					<div className="relative w-full aspect-[16/9] overflow-hidden">
						<Image
							src={movie}
							alt=""
							fill
							className="rounded-lg object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
