import Map, { Marker } from 'react-map-gl';

function MapComp() {
	return (
		<Map
			mapboxAccessToken="pk.eyJ1IjoiYy15b3VuZzAyIiwiYSI6ImNsZXhjd2xqOTI5cHozeXAxbG02NndlNWUifQ.GcKdJYrL-O6qCKW1UK4dMQ" //todo make environment variable
			initialViewState={{ latitude: 55.8668, longitude: -4.25, zoom: 6 }}
			style={{ width: '100vw', height: '100vh' }}
			mapStyle="mapbox://styles/mapbox/satellite-v9"
		>
			<Marker latitude={55} longitude={-4} anchor="bottom">
				<button className="marker-btn">
					<img src="..\images\snow.png" alt="Snow Icon" />
				</button>
			</Marker>
			<Marker latitude={50} longitude={-4} anchor="bottom">
				<button className="marker-btn">
					<img src="..\images\fire.png" alt="Snow Icon" />
				</button>
			</Marker>
		</Map>
	);
}
export default MapComp;
