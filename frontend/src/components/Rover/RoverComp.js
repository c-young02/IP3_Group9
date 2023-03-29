import { useEffect, useState } from 'react';

const RoverComp = () => {
	document.title = 'Mars Rover Images';

	async function fetchEvent() {
		const res = await fetch(
			`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=lRXxtWUBBCnscvyH4Ejauz3dGMckJr7gOXyY4BEu`
		);
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
