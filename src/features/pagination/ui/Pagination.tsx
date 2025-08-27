import { useState } from "react";

interface PaginationProps {
	totalPages: number;
	initialPage?: number;
	onPageChange?: (page: number) => void;
}

export const Pagination = ({
	totalPages,
	initialPage = 1,
	onPageChange,
}: PaginationProps) => {
	const [currentPage, setCurrentPage] = useState(initialPage);

	const changePage = (page: number) => {
		if (page < 1 || page > totalPages) return;
		setCurrentPage(page);
		onPageChange?.(page);
	};

	const generatePages = () => {
		const pages: (number | string)[] = [];

		if (totalPages <= 7) {
			// если страниц мало – показываем все
			for (let i = 1; i <= totalPages; i++) pages.push(i);
		} else {
			pages.push(1); // первая страница

			if (currentPage > 4) pages.push("...");

			const start = Math.max(2, currentPage - 2);
			const end = Math.min(totalPages - 1, currentPage + 2);

			for (let i = start; i <= end; i++) {
				pages.push(i);
			}

			if (currentPage < totalPages - 3) pages.push("...");

			pages.push(totalPages); // последняя страница
		}

		return pages;
	};

	return (
		<div className="flex items-center gap-1 transition text-xl">
			{/* Левая стрелка */}
			<button
				className="px-4 py-2 rounded hover:bg-neutral-800 cursor-pointer transition duration-200 ease-in-out"
				onClick={() => changePage(currentPage - 1)}
				disabled={currentPage === 1}
			>
				◀
			</button>

			{/* Номера страниц */}
			{generatePages().map((p, i) =>
				typeof p === "number" ? (
					<button
						key={i}
						onClick={() => changePage(p)}
						className={`px-4 py-2 rounded cursor-pointer duration-200 ease-in-out ${
							currentPage === p
								? "bg-blue-500 text-white"
								: "hover:bg-neutral-800"
						}`}
					>
						{p}
					</button>
				) : (
					<span
						key={i}
						className="px-2"
					>
						{p}
					</span>
				)
			)}

			{/* Правая стрелка */}
			<button
				className="px-4 py-2 rounded hover:bg-neutral-800 cursor-pointer duration-200 ease-in-out"
				onClick={() => changePage(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				▶
			</button>
		</div>
	);
};
