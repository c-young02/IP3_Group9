import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
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
				<nav className="thenavigationbar">
					<div className="thenavigationbar-container theContainer">
						<Link
							to="/"
							className="thenavigationbar-logo"
							onClick={closeMobileMenu}
						>
							<img
								src="../images/logo.svg"
								className="thenavigationbar-icon"
								alt="logo"
							/>
							Space=Cool
						</Link>
						<div className="menu-icon" onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</div>
						<ul
							className={click ? 'navigation-menu active' : 'navigation-menu'}
						>
							<li className="navigation-item">
								<NavLink
									to="/"
									className={({ isActive }) =>
										'navigation-links' + (isActive ? ' activated' : '')
									}
									onClick={closeMobileMenu}
								>
									Home
								</NavLink>
							</li>
							<li className="navigation-item">
								<NavLink
									to="/meteors"
									className={({ isActive }) =>
										'navigation-links' + (isActive ? ' activated' : '')
									}
									onClick={closeMobileMenu}
								>
									Asteroids
								</NavLink>
							</li>

							<li className="navigation-item">
								<NavLink
									to="/events"
									className={({ isActive }) =>
										'navigation-links' + (isActive ? ' activated' : '')
									}
									onClick={closeMobileMenu}
								>
									Events
								</NavLink>
							</li>
							<li className="navigation-item">
								<NavLink
									to="/about"
									className={({ isActive }) =>
										'navigation-links' + (isActive ? ' activated' : '')
									}
									onClick={closeMobileMenu}
								>
									About Us
								</NavLink>
							</li>
							<li className="navigation-item">
								<NavLink
									to="/rover"
									className={({ isActive }) =>
										'navigation-links' + (isActive ? ' activated' : '')
									}
									onClick={closeMobileMenu}
								>
									Mars Rover
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
