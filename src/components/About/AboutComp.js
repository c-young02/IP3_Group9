import { AiOutlineGithub } from 'react-icons/ai';

function AboutComp() {
	document.title = 'About Us';

	//Multidimensional array containing details on all of the members
	const Members = [
		{
			name: 'Stacey',
			role: 'Frontend Developer & Project Manager',
			course: 'Software Development',
			year: '3',
		},
		{
			name: 'Callum',
			role: 'Frontend Developer & Designer',
			course: 'Computing',
			year: '3',
		},
		{
			name: 'Logan',
			role: 'Backend Developer & Designer',
			course: 'Computing',
			year: '3',
		},
		{
			name: 'Darren',
			role: 'Backend Developer',
			course: 'Software Development',
			year: '3',
		},
		{
			name: 'Lauren',
			role: 'Report Writer',
			course: 'Software Development',
			year: '3',
		},
		{ name: 'Dionne', role: 'Report Writer', course: 'Computing', year: '3' },
	];

	return (
		<div className="About">
			<div className="container row align-items-start">
				<h1 className="display-1 text-center">About Us</h1>
				{/*Creates a card for each members within the multidimensional array*/}
				<div className="row align-items-end px-5">
					{Members?.map((member) => (
						<div key={member.name} className="col-lg-4 pt-2">
							<div className="card bg-dark shadow" style={{ width: '21rem' }}>
								<div className="card-header text-center">
									<h3>{member.name}</h3>
								</div>
								<div className="card-body">
									{/*Maps data from within the array*/}
									<h5 className="card-text">Role(s): {member.role}</h5>
									<h5 className="card-text">Course: {member.course}</h5>
									<h5 className="card-text">Year: {member.year}</h5>
								</div>
							</div>
						</div>
					))}
				</div>
				{/*Link to the project GitHub repository*/}
				<a
					href="https://github.com/c-young02/IP3_Group9"
					className="text-center pt-3"
				>
					<AiOutlineGithub />
					GitHub Repository
				</a>
			</div>
		</div>
	);
}

export default AboutComp;
