import Map, { Marker } from 'react-map-gl';
import './map.css';
import { FaFire } from 'react-icons/fa';

function MapComp() {
	return (
		<Map
			mapboxAccessToken="pk.eyJ1IjoiYy15b3VuZzAyIiwiYSI6ImNsZXhjd2xqOTI5cHozeXAxbG02NndlNWUifQ.GcKdJYrL-O6qCKW1UK4dMQ" //todo make environment variable
			initialViewState={{ latitude: 55.8668, longitude: -4.25, zoom: 6 }}
			style={{ width: '100vw', height: '100vh' }}
			mapStyle="mapbox://styles/c-young02/clf2kthzf006g01ln8gmkfiv0"
		>
			{/* creates markers on the map */}
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
