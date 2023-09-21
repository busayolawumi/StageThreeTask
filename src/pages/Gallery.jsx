import React, { useState } from "react";
import { images } from "../scripts/images";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import ArrangeItem from "../components/ArrangeItem";

function Gallery() {
	const [items, setItems] = useState([...images]);

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
				<div className="images">
					<div className="images-grid">
						{items.map((item, index) => (
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
