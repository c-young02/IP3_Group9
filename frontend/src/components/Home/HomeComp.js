import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function HomeComp() {
	document.title = 'NASA APIs';
	const APOD = process.env.REACT_APP_APOD_KEY;

	useEffect(() => {
		fetch(APOD)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [APOD]);

	const [data, setData] = useState([]);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div className="Home" height="100%">
				<div className="text-center d-inline-flex px-5">
					<h2>
						Welcome to "Project name", an interactive website showcasing NASA
						APIs. The collection of APIs were hand-picked to showcase the
						breadth of NASA's open-source work. To begin, select from the menu
						options.
					</h2>
				</div>
				<div class="text-center">
					<img
						class="img-fluid"
						alt=""
						src={data.url}
						width="900"
						onClick={handleShow}
					></img>
					<h4 class="text-center p-2">
						NASA Astronomy Picture of the Day. Click the image for a full
						description.
					</h4>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>{data.title}</Modal.Title>
						</Modal.Header>
						<Modal.Body>{data.explanation}</Modal.Body>
						<Modal.Footer>
							<Button variant="dark" onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		</>
	);
}

export default HomeComp;
