const API_KEY = "28a8ad6d";

export function buildOmdbParams(params: Record<string, unknown>) {
	return {
		apikey: API_KEY,
		...params,
	};
}
