import { useEffect, useState } from 'react';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';

function RoverComp() {
	document.title = 'Mars Rover Images';
	const roverImages = process.env.REACT_APP_MARS_KEY;

	//Fetches data from the Mars Rover API
	const [rover, setRover] = useState([]);
	useEffect(() => {
		async function fetchRover() {
			const res = await fetch(roverImages);
			const { photos } = await res.json();
			setRover(photos);
		}

		fetchRover();
	}, [roverImages]);

	const [selectedImage, setSelectedImage] = useState(null);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
									onClick={(e) => {
										e.preventDefault();
										setSelectedImage(rover);
										handleShow();
									}}
								/>
							</Carousel.Item>
						))}
					</Carousel>
				</div>
			</div>
			{selectedImage ? (
				<Modal show={show} onHide={handleClose} fullscreen={true}>
					<Modal.Header closeButton>
						<Modal.Title>
							{JSON.stringify(selectedImage.camera.full_name)}
						</Modal.Title>
					</Modal.Header>
					<div className="bg-dark">
						<Modal.Body>
							<img
								className="mx-auto d-block"
								src={selectedImage.img_src}
								alt="Rover Images"
							/>
						</Modal.Body>
					</div>
				</Modal>
			) : null}
		</div>
	);
}

export default RoverComp;
