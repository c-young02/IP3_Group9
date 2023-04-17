import { AiOutlineGithub } from 'react-icons/ai';

function AboutComp() {
	document.title = 'About Us';

	const Members = [
		{ name: 'Stacey', role: 'Frontend Developer & Project Manager' },
		{ name: 'Callum', role: 'Frontend Developer & Designer' },
		{ name: 'Logan', role: 'Backend Developer & Designer' },
		{ name: 'Darren', role: 'Backend Developer' },
		{ name: 'Lauren', role: 'Report Writer' },
		{ name: 'Dionne', role: 'Report Writer' },
	];

	return (
		<div className="container row align-items-start">
			<h1 className="display-1 text-center">About Us</h1>
			<div className="row align-items-end px-5">
				{Members?.map((member) => (
					<div key={member.name} className="col-lg-4 pt-2">
						<div className="card bg-dark shadow" style={{ width: '20rem' }}>
							<div className="card-header text-center">
								<h3>{member.name}</h3>
							</div>
							<div className="card-body">
								<h5 className="card-text">Role(s): {member.role}</h5>
							</div>
						</div>
					</div>
				))}
			</div>
			<a href="https://github.com/c-young02/IP3_Group9" className="text-center">
				<AiOutlineGithub />
				GitHub Repository
			</a>
		</div>
	);
}

export default AboutComp;
