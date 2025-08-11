import { baseApi } from "@/share/api/baseApi";
import { Movie } from "../model/interface";
import { buildOmdbParams } from "@/share";
import { MovieSearchResponse } from "@/share/model/interface";

export const movieApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getMovieByTitle: build.query<MovieSearchResponse, { title: string; page: number }>({
			query: ({page,title}) => ({
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
	}),
});

export const { useGetMovieByTitleQuery, useGetMovieByTitleAndYearQuery, useLazyGetMovieByTitleAndYearQuery } =
	movieApi;
