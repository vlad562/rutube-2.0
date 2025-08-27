import DetailMovie from "@/entities/detail-movie/ui/DetailMovie";
import React from "react";

const MoviePageId = ({ params }: { params: { id: string } }) => {
	const { id } = params;
	return <DetailMovie id={id} />;
};

export default MoviePageId;
