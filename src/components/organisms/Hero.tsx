import { type FC } from 'react';
import { motion } from 'motion/react';
import style from '@/scss/organisms/Hero.module.scss'

const Hero: FC = () => {
	return(
		<motion.section className={`${style.hero}`} >
      <h1 className={`${style.hero_name}`}>ANNA <span>NAKAZAWA</span></h1> 
      <h2 className={`${style.hero_title}`}
      ><span>Full-Stack Web Developer, UI/UX Designer, and Illustrator</span></h2>
		</motion.section>
	);
}

export default Hero