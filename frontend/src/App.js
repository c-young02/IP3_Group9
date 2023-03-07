import React, { useState } from 'react';
import Map from 'react-map-gl';

export default function App() {
	return (
		<Map
			mapboxAccessToken="pk.eyJ1IjoiYy15b3VuZzAyIiwiYSI6ImNsZXhjd2xqOTI5cHozeXAxbG02NndlNWUifQ.GcKdJYrL-O6qCKW1UK4dMQ" //todo make environment variable
			initialViewState={{ latitude: 55.8668, longitude: -4.25, zoom: 15 }}
			style={{ width: 1000, height: 800 }}
			mapStyle="mapbox://styles/mapbox/satellite-v9"
		/>
	);
}
