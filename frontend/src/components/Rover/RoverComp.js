import { useEffect, useState } from 'react';

const RoverComp = () => {
	document.title = 'Mars Rover Images';
	const roverImages = process.env.REACT_APP_MARS_KEY;
	async function fetchEvent() {
		const res = await fetch(roverImages);
		const fetchImages = await res.json();
		const fetchImages2 = fetchImages.photos.slice(0, 5);
		setImages(
			fetchImages2.map((arrayItem) => {
				return arrayItem.img_src;
			})
		).catch((err) => {
			console.log(err);
		});
	}

	useEffect(() => {
		fetchEvent();
	}, []);

	const [images, setImages] = useState([]);

	return (
		<div className="Container">
			<h1 className="text-center">Mars Rover Images</h1>
			{images.map((temp, index) => {
				return (
					<picture>
						<div class="col">
							<img
								width="125px"
								key={index}
								src={temp}
								alt=""
								class="img-fluid img-thumbnail img-responsive"
							/>
						</div>
					</picture>
				);
			})}
		</div>
	);
};

export default RoverComp;
