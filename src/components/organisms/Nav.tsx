import { type FC } from "react";
import { Link } from "react-router";

import style from '@/scss/organisms/Nav.module.scss'

const Nav: FC = () => {
	return (
		<nav className={`${style.nav}`}>
			<div className={`${style.nav__breadcrumb}`}>ANNA NAKAZAWA</div>
			<ul className={`${style.nav__list}`}>
				<li className={`${style.nav__item}`}><Link to={``} className={`${style.nav__link}`}>Home</Link></li>
				<li className={`${style.nav__item}`}><Link to={``} className={`${style.nav__link}`}>About</Link></li>
				<li className={`${style.nav__item}`}><Link to={``} className={`${style.nav__link}`}>Contact</Link></li>
			</ul>
		</nav>
	);
};
export default Nav;