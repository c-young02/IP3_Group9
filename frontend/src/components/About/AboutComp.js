import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function AboutComp() {
	const Members = [
		{ name: 'Callum', role: 'Frontend Developer, Designer' },
		{ name: 'Stacey', role: 'Frontend Developer, Project Manager' },
		{ name: 'Logan', role: 'Backend Developer, Designer' },
		{ name: 'Darren', role: 'Backend Developer' },
		{ name: 'Lauren', role: 'Report Writer' },
		{ name: 'Dionne', role: 'Report Writer' },
	];

	return (
		<div
			className="container row align-items-start pt-3"
			style={{ margin: '4em' }}
		>
			<h1 className="text-center">About Us</h1>

			<div className="row align-items-end px-5">
				{Members?.map((member) => (
					<div className="col-lg-4 pt-2">
						<div className="card bg-dark" style={{ width: '20rem' }}>
							<div className="card-header">
								<h5>Name: {member.name}</h5>
							</div>
							<div className="card-body">
								<h5 className="card-text">Role(s): {member.role}</h5>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default AboutComp;
