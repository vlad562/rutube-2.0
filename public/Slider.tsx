"use client"

import { Movie } from "@/entities/movie"
import { MovieSlider } from "@/features/movie-slider"
import React from "react"

const mockMovies: Movie[] = [
	{ id: "1", title: "Inception", poster: "/photo.png" },
	{ id: "2", title: "Interstellar", poster: "/photo-1.png" },
	{ id: "3", title: "Tenet", poster: "/photo-2.png" },
	{ id: "4", title: "Dunkirk", poster: "/photo-3.png" },
	{ id: "5", title: "The Dark Knight", poster: "/photo-4.png" },
]

const Slider = () => {
	const handleSelectMovie = (movie: Movie) => {
		console.log("Открыть модалку с фильмом:", movie)
	}
	return (
		<section>
			<MovieSlider
				movies={mockMovies}
				onSelect={handleSelectMovie}
			/>
		</section>
	)
}

export default Slider
