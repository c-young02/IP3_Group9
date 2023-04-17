import { useEffect, useState } from 'react';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function RoverComp() {
	document.title = 'Mars Rover Images';
	const roverImages = process.env.REACT_APP_MARS_KEY;

	//Fetches data from the Mars Rover API
	const [rover, setRover] = useState([]);
	async function fetchRover() {
		const res = await fetch(roverImages);
		const { photos } = await res.json();
		setRover(photos);
	}

	useEffect(() => {
		fetchRover();
	}, []);

	return (
		<div className="Rover">
			<div className="Container">
				<h1 className="display-1 text-center px-3">Mars Rover Images</h1>
				<div style={{ display: 'block', padding: 20 }}>
					<Carousel className="RoverCarousel">
						{rover?.map((rover) => (
							<Carousel.Item key={rover.id} interval={null}>
								<img
									className="d-block w-100 h-100 img-fluid"
									src={rover.img_src}
									alt="Rover Images"
								/>
							</Carousel.Item>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
}

export default RoverComp;
