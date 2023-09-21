import React, { useState } from "react";
import { images } from "../scripts/images";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import Sortable from "../components/Sortable";

function Gallery() {
	const [items, setItems] = useState([...images]);

	function handleDragEnd(event) {
		const { active, over } = event;
		console.log("ACTIVE: " + active.id);
		console.log("OVER: " + over.id);

		if (active.id !== over.id) {
			setItems((items) => {
				const activeId = items.indexOf(active.id);
				const overId = items.indexOf(over.id);

				console.log(arrayMove(items, activeId, overId));
				return arrayMove(items, activeId, overId);
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
							<Sortable
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
