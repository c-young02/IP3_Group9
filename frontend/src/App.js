import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function App() {
	const [viewport, setViewport] = useState({
		latitude: 55.860916,
		longitude: -4.251433,
		width: '100%',
		height: '100%',
		zoom: 12,
	});
	return (
		<div className="App">
			<ReactMapGL
				{...viewport}
				mapboxAccessToken="pk.eyJ1IjoiYy15b3VuZzAyIiwiYSI6ImNsZXhjd2xqOTI5cHozeXAxbG02NndlNWUifQ.GcKdJYrL-O6qCKW1UK4dMQ"
			>
				Markers
			</ReactMapGL>
		</div>
	);
}
