import { type FC } from 'react';
import { motion } from 'motion/react';
import imgHero from '@/assets/img/hero_img.png'

import style from '@/scss/organisms/Hero.module.scss'

const Hero: FC = () => {
	return(
		<motion.section 
			className={`${style.hero}`}
			style={{
        background: `url('${imgHero}') no-repeat center fixed,
        linear-gradient(#00a5b3)`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
		>
    <div>
      <h1 className={`${style.hero_name}`}>ANNA NAKAZAWA</h1> 
      <h2 className={`${style.hero_title}`}
      ><span>Full-Stack Web Developer, UI/UX Designer, and Illustrator</span></h2>
    </div>
    

		</motion.section>
	);

}

export default Hero