"use client"

import Image from "next/image"
import { useState } from "react"

const data = [
	{
		id: 0,
		src: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
		title: "Главная",
	},
	{
		id: 1,
		src: "https://cdn-icons-png.flaticon.com/512/9915/9915642.png",
		title: "Каталог",
	},
	{
		id: 2,
		src: "https://cdn-icons-png.flaticon.com/512/9736/9736313.png",
		title: "Популярное",
	},
	{
		id: 3,
		src: "https://cdn-icons-png.flaticon.com/512/13365/13365320.png",
		title: "В топе",
	},
	{
		id: 4,
		src: "https://cdn-icons-png.flaticon.com/512/1077/1077046.png",
		title: "Shorts",
	},
	{
		id: 5,
		src: "https://cdn-icons-png.flaticon.com/512/8064/8064609.png",
		title: "ТВ онлайн",
	},
	{
		id: 6,
		src: "https://cdn-icons-png.flaticon.com/512/11631/11631637.png",
		title: "Трансляции",
	},
]

const Navigation = () => {
	const [activeId, setActiveId] = useState<number>(0)

	return (
		<nav className="bg-[#1c232b] w-65 h-screen">
			<ul>
				{data.map(elem => (
					<li
						key={elem.id}
						onClick={() => setActiveId(elem.id)}
						className={`flex pl-6 pt-2 pb-2 cursor-pointer transition-colors ${
							activeId === elem.id
								? "bg-[#2c3b4d] text-white rounded-md"
								: "text-gray-400 hover:bg-[#26323f] hover:rounded-md"
						}`}
					>
						<Image
							src={elem.src}
							alt=""
							width={24}
							height={24}
							priority
						/>
						<p className="ml-6">{elem.title}</p>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation
