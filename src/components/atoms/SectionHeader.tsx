import { type FC } from 'react';
import style from '@/scss/atoms/SectionHeader.module.scss'

type props = {
	headerName:string
}

const SectionHeader: FC<props> = ({ headerName }) => {
	return (
		<h2 className={`${style.headline}`}>
			<div className={`${style.headline__left}`}></div>
			<div className={`${style.headline__text}`}>{headerName}</div>
			<div className={`${style.headline__right}`}></div>
		</h2>
	);
};
export default SectionHeader;