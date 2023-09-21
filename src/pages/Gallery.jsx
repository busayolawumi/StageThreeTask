import React, { useState } from "react";
import { images } from "../scripts/images";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import ArrangeItem from "../components/ArrangeItem";
import { FaSearch } from "react-icons/fa";

function Gallery() {
	const [input, setInput] = useState("");
	const [items, setItems] = useState([...images]);

	const newItems = items.filter((item) =>
		item.tag.toLowerCase().includes(input.toLowerCase())
	);

	function handleDragEnd(event) {
		const { active, over } = event;

		if (active.id !== over.id) {
			setItems((items) => {
				const activeId = items.findIndex(
					(item) => item.id === active.id
				);
				const overId = items.findIndex((item) => item.id === over.id);
				const movedItems = arrayMove(items, activeId, overId);
				return movedItems;
			});
		}
	}

	return (
		<DndContext
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
		>
			<SortableContext items={items}>
				<h1>Gallery</h1>
				{/* Search Functionality */}
				<div className="search-div">
					<FaSearch className="search-button" />
					<input
						placeholder="Search..."
						className="search-input"
						onChange={(e) => setInput(e.target.value)}
						type="text"
						value={input}
					/>
				</div>

				<div className="images">
					<div className="images-grid">
						{newItems.map((item, index) => (
							<ArrangeItem
								item={item}
								index={index}
								key={item.id}
								id={item.id}
							/>
						))}
					</div>
				</div>
			</SortableContext>
		</DndContext>
	);
}

export default Gallery;
