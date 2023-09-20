import React from "react";
import { images } from "../scripts/images";

function Gallery() {
	return (
		<>
			<h1>Your Gallery</h1>
			<div className="images">
				<div className="images-grid">
					{images.map(({ imgLink, id }) => (
						<img className="image" src={imgLink} key={id} alt="" />
					))}
				</div>
			</div>
		</>
	);
}

export default Gallery;
