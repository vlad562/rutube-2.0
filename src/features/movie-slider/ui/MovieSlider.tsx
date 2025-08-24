"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useMovieSlider } from "../lib/useMovieSlider";

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
		<Swiper
			modules={[Navigation]}
			spaceBetween={20}
			slidesPerView={3}
			navigation
			className="w-full -z-50"
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
