import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Sortable = ({ item }) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: item.id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<div>
			<div ref={setNodeRef} style={style} {...attributes} {...listeners}>
				<div className="card" key={item.id}>
					<img className="image" src={item.imgLink} alt="pic" />
					<p>{item.tag}</p>
				</div>
			</div>
		</div>
	);
};

export default Sortable;
