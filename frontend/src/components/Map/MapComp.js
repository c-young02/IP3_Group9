import { useEffect, useState } from 'react';
import Map, { Marker, GeolocateControl, NavigationControl } from 'react-map-gl';
import './map.css';
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.css';

function MapComp() {
	const EONETKey = process.env.REACT_APP_EONET_KEY;
	const MapBoxKey = process.env.REACT_APP_MAPBOX_KEY;

	document.title = 'Earth Events';

	//Fetches data from the EONET API
	const [event, setEvent] = useState([]);
	async function fetchEvent() {
		const res = await fetch(EONETKey);
		const { events } = await res.json();
		setEvent(events);
	}

	useEffect(() => {
		fetchEvent();
	}, []);

	//Sets desired map initial location and style
	const [viewport, setViewPort] = useState({
		latitude: 55.8668,
		longitude: -4.25,
		zoom: 2,
		width: '100vw',
		height: '100vh',
	});

	//Hooks for popups
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [show, setShow] = useState(false);

	//handlers for popup
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	//Hook and handles for the list of events
	const [list, setList] = useState(false);
	const closeList = () => setList(false);
	const showList = () => setList(true);

	return (
		//Creates map
		<Map
			{...viewport}
			mapboxAccessToken={MapBoxKey}
			onMove={(evt) => setViewPort(evt.viewport)}
			mapStyle="mapbox://styles/c-young02/clf2kthzf006g01ln8gmkfiv0"
		>
			{/* Button that opens list of events */}
			<button
				type="button"
				className="btn btn-primary overlay-btn"
				onClick={showList}
			>
				Events
			</button>
			{/* Adds navigation controls */}
			<NavigationControl />
			{/* lets map centre on users location */}
			<GeolocateControl trackUserLocation={true} label="Find My Location" />

			{/* creates markers from the API*/}
			{event?.map((disaster) => (
				<Marker
					key={disaster.id}
					latitude={disaster.geometries[0].coordinates[1]}
					longitude={disaster.geometries[0].coordinates[0]}
				>
					{/* Each marker is a button that can be clicked to get details on the events*/}
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
						<button className="btn btn-secondary" onClick={handleClose}>
							Close
						</button>
					</Modal.Footer>
				</Modal>
			) : null}

			{/* When events button is pressed opens a section from off the screen */}
			<Offcanvas show={list} onHide={closeList}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>
						<h2>Events</h2>
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					{/* Headings for the sections */}

					<div className="table table-hover">
						<thead>
							<tr>
								<td> Icon </td>
								<td> Name </td>
								<td> Date/Time </td>
							</tr>
						</thead>
						<tbody>
							{/* Maps out objects from the array into the table */}
							{event?.map((list) => (
								<tr key={list.id}>
									<td>
										<img
											className="list-icon"
											//All images acquired from https://www.flaticon.com/icons
											src={`../images/${list.categories[0].id}.png`}
											alt="Icon"
										/>{' '}
									</td>
									<td> {list.title} </td>
									<td> {list.geometries[0].date} </td>
								</tr>
							))}
						</tbody>
					</div>
				</Offcanvas.Body>
			</Offcanvas>
		</Map>
	);
}
export default MapComp;
