import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { GiBurningMeteor } from 'react-icons/gi';

import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { NavLink } from 'react-router-dom';

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<nav className="navbar">
					<div className="navbar-container container">
						<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
							<GiBurningMeteor className="navbar-icon" />
							Project Title
						</Link>
						<div className="menu-icon" onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</div>
						<ul className={click ? 'nav-menu active' : 'nav-menu'}>
							<li className="nav-item">
								<NavLink
									to="/"
									className={({ isActive }) =>
										'nav-links' + (isActive ? ' activated' : '')
									}
									onClick={closeMobileMenu}
								>
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/meteors"
									className={({ isActive }) =>
										'nav-links' + (isActive ? ' activated' : '')
									}
									onClick={closeMobileMenu}
								>
									Meteors
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink
									to="/events"
									className={({ isActive }) =>
										'nav-links' + (isActive ? ' activated' : '')
									}
									onClick={closeMobileMenu}
								>
									Events
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/about"
									className={({ isActive }) =>
										'nav-links' + (isActive ? ' activated' : '')
									}
									onClick={closeMobileMenu}
								>
									About Us
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/rover"
									className={({ isActive }) =>
										'nav-links' + (isActive ? ' activated' : '')
									}
									onClick={closeMobileMenu}
								>
									Mars rover
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;
/*Adapted from https://github.com/briancodex/react-navbar-router-v6.4/blob/main/src/components/Navbar.js on 13/03/23*/
