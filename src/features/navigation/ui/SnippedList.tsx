"use client"

import { useState } from "react"

const data = [
	{ id: 0, title: "Главная" },
	{ id: 1, title: "Рекомендации" },
	{ id: 2, title: "Фильмы" },
	{ id: 3, title: "Сериалы" },
	{ id: 9, title: "Детям" },
	{ id: 4, title: "Телешоу" },
	{ id: 5, title: "Спорт" },
	{ id: 6, title: "Блогеры" },
	{ id: 7, title: "Новости" },
	{ id: 8, title: "Подкасты" },
]

export const SnippedList = () => {
	const [activeId, setActiveId] = useState<number>(0)

	return (
		<section>
			<ul className="flex pb-5.5">
				{data.map(elem => (
					<li
						className=""
						key={elem.id}
					>
						<p
							onClick={() => setActiveId(elem.id)}
							className={`pb-3 pt-3 pr-4 pl-4 inline-block  
                            text-sm
                            cursor-pointer
                            transition-colors 
                            duration-300
                            colo
                            ${
															activeId === elem.id
																? "bg-[#00A1E7] text-white rounded-md"
																: "text-gray-400 hover:text-blue-400 hover:rounded-md"
														}`}
						>
							{elem.title}
						</p>
					</li>
				))}
			</ul>
		</section>
	)
}
