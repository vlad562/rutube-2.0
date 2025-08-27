import { Movie } from "@/entities/movie";

export type MovieForSlider = Pick<Movie, "imdbID" | "Poster">;
