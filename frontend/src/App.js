import React, { useState } from 'react';
import Map from 'react-map-gl';

export default function App() {
	return (
		<Map
			mapboxAccessToken="pk.eyJ1IjoiYy15b3VuZzAyIiwiYSI6ImNsZXhjd2xqOTI5cHozeXAxbG02NndlNWUifQ.GcKdJYrL-O6qCKW1UK4dMQ" //todo make environment variable
			initialViewState={{ latitude: 55.860916, longitude: -4.251433, zoom: 12 }}
			style={{ width: 1000, height: 800 }}
			mapStyle="mapbox://styles/mapbox/streets-v9"
		/>
	);
}
