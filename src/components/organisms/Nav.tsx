'use client';

import { type FC } from "react";
import { Link } from "react-router";
import {type MotionValue, useMotionValue } from "motion/react"

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import style from '@/scss/organisms/Nav.module.scss'

type Props = {
	isShowBG: boolean
}
const Nav: FC<Props> = ({isShowBG}) => {
	return (
		<nav className={`${style.nav}` + (isShowBG ? ` ${style.nav__bg}` : '')}>
			<div className={`${style.nav__title}`}>ANNA NAKAZAWA</div>
			<ul className={`${style.nav__list}`}>
				<li className={`${style.nav__item}`}><Link to={`https://github.com/unknown-anna`} className={`${style.nav__link}`} target="_blank" rel="noreferrer"><GitHubIcon/></Link></li>
				<li className={`${style.nav__item}`}><Link to={`https://www.linkedin.com/in/annadesign/`} className={`${style.nav__link}`} target="_blank" rel="noreferrer"><LinkedInIcon/></Link></li>
			</ul>
		</nav>
	);
};
export default Nav;