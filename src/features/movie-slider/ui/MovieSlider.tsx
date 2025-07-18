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
		<Swiper
			modules={[Navigation]}
			spaceBetween={20}
			slidesPerView={3}
			navigation
			className="w-full"
		>
			{movies.map(movie => (
				<SwiperSlide
					key={movie.id}
					className="flex justify-center"
				>
					<div
						className="cursor-pointer hover:scale-105 transition-transform duration-300 w-full"
						style={{
							aspectRatio: "16 / 9",
							maxWidth: "520px",
						}}
						onClick={() => onSelect && onSelect(movie)}
					>
						<Image
							src={movie.poster}
							alt={movie.title}
							fill
							className="rounded-lg object-cover" 
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
