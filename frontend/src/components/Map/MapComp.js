import { useEffect, useState } from 'react';
import Map, { Marker, GeolocateControl, FullscreenControl } from 'react-map-gl';
import './map.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';

//Sets desired may initial location and style
function MapComp() {
	const [viewport, setViewPort] = useState({
		latitude: 55.8668,
		longitude: -4.25,
		zoom: 3,
		width: '100vw',
		height: '100vh',
	});

	//Hooks for popups
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [show, setShow] = useState(false);

	//handlers for popup
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	//Fetches data from the EONET API
	const [event, setEvent] = useState([]);
	async function fetchEvent() {
		const res = await fetch(
			`https://eonet.gsfc.nasa.gov/api/v2.1/events?days=30`
		);
		const { events } = await res.json();
		setEvent(events);
	}

	useEffect(() => {
		fetchEvent();
	}, []);

	return (
		//Creates map
		<Map
			{...viewport}
			mapboxAccessToken="pk.eyJ1IjoiYy15b3VuZzAyIiwiYSI6ImNsZXhjd2xqOTI5cHozeXAxbG02NndlNWUifQ.GcKdJYrL-O6qCKW1UK4dMQ" //todo make environment variable
			onMove={(evt) => setViewPort(evt.viewport)}
			mapStyle="mapbox://styles/c-young02/clf2kthzf006g01ln8gmkfiv0"
		>
			{/* add ability to go fullscreen */}
			<FullscreenControl />
			{/* lets map centre on users location */}
			<GeolocateControl
				className="geolocate-control"
				positionOptions={{ enableHighAccuracy: true }}
				trackUserLocation={true}
				label="Find My Location"
			/>
			{/* creates markers on the map from test file*/}
			{event.map((disaster) => (
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
							handleShow();
						}}
					>
						<img
							src={`../images/${disaster.categories[0].id}.png`}
							alt={disaster.categories[0].title}
						/>
					</button>
				</Marker>
			))}
			{/*Displays info on clicked event in a popup*/}
			{selectedEvent ? (
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>{JSON.stringify(selectedEvent.title)}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{'Type: ' + JSON.stringify(selectedEvent.categories[0].title)}
					</Modal.Body>
					<Modal.Body>
						{'Latitude: ' +
							JSON.stringify(selectedEvent.geometries[0].coordinates[1]) +
							' Longitude: ' +
							JSON.stringify(selectedEvent.geometries[0].coordinates[0])}
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			) : null}
		</Map>
	);
}
export default MapComp;
