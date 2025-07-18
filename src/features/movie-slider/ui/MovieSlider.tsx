"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import Image from "next/image"
import { Movie } from "@/entities/movie"

import "swiper/css"
import "swiper/css/navigation"

interface MovieSliderProps {
	movies: Movie[]
	onSelect?: (movie: Movie) => void
}

export const MovieSlider = ({ movies, onSelect }: MovieSliderProps) => {
	return (
		<div className="relative w-full max-w-[1200px] overflow-hidden">
			<Swiper
				modules={[Navigation]}
				spaceBetween={16}
				slidesPerView={3}
				navigation
				className="w-full"
			>
				{movies.map(movie => (
					<SwiperSlide
						key={movie.id}
						className="!w-[340px] flex justify-center"
					>
						<div
							className="cursor-pointer hover:scale-105 transition-transform"
							onClick={() => onSelect && onSelect(movie)}
						>
							<Image
								src={movie.poster}
								alt={movie.title}
								width={340}
								height={190}
								className="rounded-lg"
								style={{ height: "190px", width: "340px" }}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
