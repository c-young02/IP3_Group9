import { useEffect, useState } from 'react';

function MeteorsComp() {
	document.title = 'Near Earth Asteroid';
	const asteroidData = process.env.REACT_APP_NeoWs_KEY;

	//Fetches data from the Nasa NeoWs API
	const [asteroid, setAsteroid] = useState([]);
	useEffect(() => {
		async function fetchAsteroid() {
			const res = await fetch(asteroidData);
			const { near_earth_objects } = await res.json();
			setAsteroid(near_earth_objects);
		}

		fetchAsteroid();
	}, [asteroidData]);

	return (
		//displays page heading, creates buttons, creates date select and creates dropdown menu
		<div
			className="container row align-items-start pt-3"
			style={{ margin: '2em' }}
		>
			<h1 className="display-1 text-center">Asteroid Information</h1>

			{/*Iterates through asteroid array to display API data in a grid*/}
			<div className="MeteorsGrid">
				<div className="row align-items-end pt-3">
					{asteroid?.map((asteroid) => (
						<div className="col-lg-3 pt-2" key={asteroid.id}>
							<div className="card bg-dark" style={{ width: '18rem' }}>
								<div className="card-header">
									<h5>ID: {asteroid.id}</h5>
									<h5>Name: {asteroid.name_limited}</h5>
								</div>
								<div className="card-body">
									<h5 className="card-text">
										Min Diameter (km):&nbsp;
										{asteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(
											2
										)}
									</h5>
									<h5 className="card-text">
										Max Diameter (km):&nbsp;
										{asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(
											2
										)}
									</h5>
									<h5 className="card-text">
										Velocity (km/s):<br></br>
										{
											asteroid.close_approach_data[0].relative_velocity
												.kilometers_per_second
										}
									</h5>
									<h5 className="card-text">
										Closest Date:&nbsp;
										{asteroid.close_approach_data[0].close_approach_date}
									</h5>
									<h5 className="card-text">
										Miss Distance (LD):<br></br>
										{asteroid.close_approach_data[0].miss_distance.lunar}
									</h5>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default MeteorsComp;
