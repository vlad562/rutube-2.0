"use client";

import { Props, SliderProps } from "@/share/model/interface";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = ({
	movies,
	className,
	slidesPerView,
	spaceBetween,
    classNameSwiperSlide
}: Props<SliderProps>) => {
	const router = useRouter();
	return (
		<Swiper
			className={className}
			slidesPerView={slidesPerView}
			spaceBetween={spaceBetween}
			modules={[Navigation]}
			navigation
		>
			{movies.map((movie, idx) => (
				<SwiperSlide
					key={idx}
					className="flex justify-center"
					onClick={() => router.push(`/movie/${movie.imdbID}`)}
				>
					<div className={classNameSwiperSlide}>
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
