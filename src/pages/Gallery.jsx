import React, { useState } from "react";
import {
	GridContextProvider,
	GridDropZone,
	GridItem,
	move,
	swap,
} from "react-grid-dnd";

import tech from "../assets/tech.jpg";
import tech2 from "../assets/tech2.jpg";
import tech3 from "../assets/tech3.jpg";
import tech4 from "../assets/tech4.jpg";
import tech5 from "../assets/tech5.jpg";
import tech6 from "../assets/tech6.jpg";
import tech7 from "../assets/tech7.jpg";
import tech8 from "../assets/tech8.jpg";
import tech9 from "../assets/tech9.jpg";

function Gallery() {
	const [items, setItems] = useState({
		images: [
			{
				position: 0,
				imgLink: tech,
			},
			{
				position: 1,
				imgLink: tech2,
			},
			{
				position: 2,
				imgLink: tech3,
			},
			{
				position: 3,
				imgLink: tech4,
			},
			{
				position: 4,
				imgLink: tech5,
			},
			{
				position: 5,
				imgLink: tech6,
			},
			{
				position: 6,
				imgLink: tech7,
			},
			{
				position: 7,
				imgLink: tech8,
			},
			{
				position: 8,
				imgLink: tech9,
			},
		],
	});

	function onChange(sourceId, sourceIndex, targetIndex, targetId) {
		console.log(targetId, sourceId);
		if (targetId) {
			const result = move(
				items[sourceId],
				items[targetId],
				sourceIndex,
				targetIndex
			);
			return setItems({
				...items,
				[sourceId]: result[0],
				[targetId]: result[1],
			});
		}

		const result = swap(items[sourceId], sourceIndex, targetIndex);
		return setItems({
			...items,
			[sourceId]: result,
		});
	}
	return (
		<>
			<h1>Your Gallery</h1>
			<GridContextProvider onChange={onChange}>
				<div className="images">
					<GridDropZone id="items" boxesPerRow={3} rowHeight={218}>
						<div className="images-grid">
							{items.images.map((item) => (
								<GridItem key={item.position}>
									<div className="image-div">
										<img
											className="image"
											src={item.imgLink}
											alt=""
										/>
									</div>
								</GridItem>
							))}
						</div>
					</GridDropZone>
				</div>
			</GridContextProvider>
		</>
	);
}

export default Gallery;
