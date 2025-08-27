import { baseApi } from "@/share/api/baseApi";
import { Movie } from "../model/types";
import { buildOmdbParams } from "@/share";
import { MovieSearchResponse } from "@/share/model/types";

export const movieApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getMovieByTitle: build.query<
			MovieSearchResponse,
			{ title: string; page: number }
		>({
			query: ({ page, title }) => ({
				url: "",
				params: buildOmdbParams({ s: title, page }),
			}),
		}),
		getMovieByTitleAndYear: build.query<Movie, { title: string; year: number }>(
			{
				query: ({ title, year }) => ({
					url: "",
					params: buildOmdbParams({ t: title, y: year }),
				}),
			}
		),
		getMovieById: build.query<Movie, string>({
			query: (id: string) => ({
				url: "",
				params: buildOmdbParams({ i: id }),
			}),
		}),
	}),
});

export const {
	useGetMovieByTitleQuery,
	useGetMovieByTitleAndYearQuery,
	useLazyGetMovieByTitleAndYearQuery,
	useGetMovieByIdQuery,
	useLazyGetMovieByIdQuery,
} = movieApi;
