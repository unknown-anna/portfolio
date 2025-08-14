import { type FC } from 'react';
import handLeft from '@/assets/img/hand_left.png'
import handRight from '@/assets/img/hand_right.png'

import style from '@/scss/organisms/SectionHands.module.scss'

const SectionHands: FC = () => {
	return (
		<section className={`${style.hands}`}>
			<img src={handLeft} className={`${style.img_hand}`} />
			<img src={handRight} className={`${style.img_hand}`} />
		</section>
	);
}
export default SectionHands;