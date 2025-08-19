'use client';

import { type FC, type RefObject } from 'react';
import handLeft from '@/assets/img/hand_left.png'
import handRight from '@/assets/img/hand_right.png'

import style from '@/scss/organisms/SectionHands.module.scss'

// type Props = {
// 	ref: RefObject<HTMLDivElement | null>
// }
// const SectionHands: FC<Props> = ({ref}) => {
const SectionHands: FC = () => {
	return (
		<section className={`${style.hands}`}>
			<img src={handLeft} className={`${style.img_hand}`} />
			<img src={handRight} className={`${style.img_hand}`} />
		</section>
	);
}
export default SectionHands;