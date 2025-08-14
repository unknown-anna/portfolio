import { type FC } from "react";
import style from '@/scss/organisms/Footer.module.scss'

const Footer: FC = () => {
	return (
		<footer className={style.footer}>
			<p>Anna Nakazawa 2025&copy;</p>
		</footer>
	);
};
export default Footer;