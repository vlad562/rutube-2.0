import { Movie } from "@/entities/movie";
import { MovieForSlider } from "@/features/movie-slider/model/interface";
import { ReactNode } from "react";

export interface MovieSearchResponse {
	Response: "True" | "False";
	Search?: Movie[];
	totalResults?: string;
}

export interface SliderProps {
	movies: MovieForSlider[];
	spaceBetween: number;
	slidesPerView: number;
	classNameSwiperSlide: string;
}

interface PropsBase {
	children?: ReactNode;
	className?: string;
}

export type Props<T = object> = PropsBase & T;
