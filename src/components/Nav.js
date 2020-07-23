import React, { useEffect, useState } from 'react';
import './Nav.css';
function Nav({ name }) {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else {
				handleShow(false);
			}
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);
	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<img
				className='nav__logo'
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
				alt='Netflix Logo'
			/>
			<div className='nav__avatar__container'>
				<h4 className='nav__name'>Hello {name}</h4>
				<img
					className='nav__avatar'
					src='https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1'
					alt='Avatar'
				/>
			</div>
		</div>
	);
}

export default Nav;
