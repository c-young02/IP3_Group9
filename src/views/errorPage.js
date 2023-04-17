import { useRouteError } from 'react-router-dom';
import '../App.css';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page">
			<h1>Error</h1>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
