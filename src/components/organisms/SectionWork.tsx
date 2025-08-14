import { type FC } from 'react';

import SectionHeader from '@/components/atoms/SectionHeader';
import { type slideImage } from '../molecules/WorkSlide';

import imgThumbAVSL from '@/assets/img/work/AVLSm.jpg'
import imgThumbCRAZY from '@/assets/img/work/CRAZYminoritym.jpg'
import imgThumbJSGame from '@/assets/img/work/Dotm.jpg'
import imgThumbIBS from '@/assets/img/work/IBSm.jpg'
import imgThumbKyoto from '@/assets/img/work/kyotom.jpg'
import imgThumbTatooGecko from '@/assets/img/work/TattooGeckom.jpg'

import style from '@/scss/organisms/SectionWork.module.scss'

interface work {
  title: string;
  category: string;
  description: string;
  img: string;
  imgSlide: slideImage[];
}

interface workList {
  work: work[]
} 

const workList: workList = {
  work: [
    { 
      title: 'AVSL Video Company', 
      category: 'Logo Design',
      description: 'Adobe illustrator, and Print Design', 
      img: imgThumbAVSL,
      imgSlide: [
        { src: imgThumbAVSL },
        { src: imgThumbAVSL },
        { src: imgThumbAVSL }
      ]
    },
    { 
      title: 'CRAZY Minority', 
      category: 'Logo Design',
      description: 'Adobe illustrator, and Print Design', 
      img: imgThumbCRAZY,
      imgSlide: [
        { src: imgThumbCRAZY },
        { src: imgThumbCRAZY },
        { src: imgThumbCRAZY }
      ]
    },
    { 
      title: 'Ikubunkan Broadcasting System', 
      category: 'T-Shirt Design',
      description: 'Design, applying to mockup, Adobe illustrator, and Print Design', 
      img: imgThumbIBS,
      imgSlide: [
        { src: imgThumbIBS },
        { src: imgThumbIBS },
        { src: imgThumbIBS }
      ]
    },
    { 
      title: 'JavaScript Canvas Game', 
      category: 'JavaScript',
      description: 'Design, Code, and Illustration', 
      img: imgThumbJSGame,
      imgSlide: [
        { src: imgThumbJSGame },
        { src: imgThumbJSGame },
        { src: imgThumbJSGame }
      ]
    },
    { 
      title: 'A poser for Aprilfool event', 
      category: 'Illustration',
      description: 'Illustration, Design, and photoshop', 
      img: imgThumbKyoto,
      imgSlide: [
        { src: imgThumbKyoto },
        { src: imgThumbKyoto },
        { src: imgThumbKyoto }
      ]
    },
    { 
      title: 'Black and White Tatoo: Gecko', 
      category: 'Tattoo Design',
      description: 'Adobe illustrator', 
      img: imgThumbTatooGecko,
      imgSlide: [
        { src: imgThumbTatooGecko },
        { src: imgThumbTatooGecko },
        { src: imgThumbTatooGecko }
      ]
    },
  ]
}

const SectionWork: FC = () => {
	return (
		<section className={`${style.work_list}`}>
      <SectionHeader headerName={'Works'} />

			<div className={`${style.container}`}>
				<ul className={`${style.work}`}>
          {workList.work.map((work, index) => (
            <li 
              className={`${style.item}`} 
              key={index}
            >
              <div 
                className={`${style.thumbnail}`}
                style={{ 
                  backgroundImage: `url(${work.img})`, 
                  backgroundPosition: 'center', 
                  backgroundSize: 'cover', 
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <h3 className={`${style.title}`}>{work.title}</h3>
              <p className={`${style.category}`}>{work.category}</p>
              {/* <p className={`${style.description}`}>{work.description}</p> */}
            </li>
          ))}
        </ul>
			</div>
		</section>
	);
}
export default SectionWork;