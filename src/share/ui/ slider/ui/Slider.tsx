"use client";

import { Props, SliderProps } from "@/share/model/interface";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = ({ movies, className }: Props<SliderProps>) => {
	const router = useRouter();
	return (
		<Swiper className={className}>
			{movies.map((movie, idx) => (
				<SwiperSlide
					key={idx}
					className="flex justify-center"
					onClick={() => router.push(`/movie/${movie.imdbID}`)}
				>
					<div className="relative w-full aspect-[16/9] overflow-hidden">
						<Image
							src={movie.Poster}
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

export default Slider;
