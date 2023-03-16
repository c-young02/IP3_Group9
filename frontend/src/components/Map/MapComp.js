import { useState } from 'react';
import Map, {
	Marker,
	GeolocateControl,
	FullscreenControl,
	Popup,
} from 'react-map-gl';
import './map.css';
import markers from './test.json';

function MapComp() {
	const [viewport, setViewPort] = useState({
		latitude: 55.8668,
		longitude: -4.25,
		zoom: 5,
		width: '100vw',
		height: '100vh',
	});
	const [selectedEvent, setSelectedEvent] = useState(null);

	return (
		<Map
			{...viewport}
			mapboxAccessToken="pk.eyJ1IjoiYy15b3VuZzAyIiwiYSI6ImNsZXhjd2xqOTI5cHozeXAxbG02NndlNWUifQ.GcKdJYrL-O6qCKW1UK4dMQ" //todo make environment variable
			onMove={(evt) => setViewPort(evt.viewport)}
			mapStyle="mapbox://styles/c-young02/clf2kthzf006g01ln8gmkfiv0"
		>
			{/* add ability to go fullscreen */}
			<FullscreenControl
				className="fullscreen-control"
				container={document.querySelector('body')}
			/>
			{/* lets map centre on users location */}
			<GeolocateControl
				className="geolocate-control"
				positionOptions={{ enableHighAccuracy: true }}
				trackUserLocation={true}
				label="Find My Location"
			/>

			{/* creates markers on the map from test file*/}
			{markers.events.map((disaster) => (
				<Marker
					key={disaster.id}
					latitude={disaster.geometries[0].coordinates[1]}
					longitude={disaster.geometries[0].coordinates[0]}
				>
					<button
						className="marker-btn"
						onClick={(e) => {
							e.preventDefault();
							setSelectedEvent(disaster);
						}}
					>
						<img src="..\images\snow.png" alt="Snow Icon" />
					</button>
				</Marker>
			))}

			{selectedEvent ? (
				<Popup
					latitude={selectedEvent.geometries[0].coordinates[1]}
					longitude={selectedEvent.geometries[0].coordinates[0]}
				></Popup>
			) : null}

			{/* example markers */}
			<Marker latitude={55} longitude={-4} anchor="center">
				<button className="marker-btn">
					<img src="..\images\snow.png" alt="Snow Icon" />
				</button>
			</Marker>
			<Marker latitude={51} longitude={-2} anchor="center">
				<button className="marker-btn">
					<img src="..\images\fire.png" alt="Fire Icon" />
				</button>
			</Marker>
			<Marker latitude={37.751783} longitude={14.994604} anchor="center">
				<button className="marker-btn">
					<img src="..\images\volcano.png" alt="Volcano Icon" />
				</button>
			</Marker>
		</Map>
	);
}
export default MapComp;
