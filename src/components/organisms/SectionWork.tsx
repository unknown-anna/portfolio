import { type FC } from 'react';

import SectionHeader from '@/components/atoms/SectionHeader';
import { type slideImage } from '../molecules/WorkSlide';

import imgThumbAVSL from '@/assets/img/work/AVLSm.jpg'
import imgThumbCRAZY from '@/assets/img/work/CRAZYminoritym.jpg'
import imgThumbJSGame from '@/assets/img/work/Dotm.jpg'
import imgThumbIBS from '@/assets/img/work/IBSm.jpg'
import imgThumbKyoto from '@/assets/img/work/kyotom.jpg'
import imgThumbTatooGecko from '@/assets/img/work/TattooGeckom.jpg'

import { Navigation } from 'swiper/modules';
import { 
  Swiper, 
  SwiperSlide,
} from 'swiper/react';

import 'swiper/swiper-bundle.css'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


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

const SwiperNavBtnPrev = () => {
  return (
    <ArrowBackIosNewIcon className={`${style.swiper_navigation_btn} swiper-work-prev`}/>
  )
}
const SwiperNavBtnNext = () => {
  return (
    <ArrowForwardIosIcon className={`${style.swiper_navigation_btn} swiper-work-next`}/>
  )
}

const SectionWork: FC = () => {
	return (
		<section className={`${style.work_list}`}>
      <SectionHeader headerName={'Works'} />

      <div className={`${style.swiper_navigation}`}>
        <SwiperNavBtnPrev/>
        <SwiperNavBtnNext/>
      </div>

			<div className={`${style.container}`}>
				<Swiper 
          modules={[Navigation]}
          className={`${style.work}`}
          spaceBetween={16}
          slidesPerView={3}
          loop={true}
          navigation = {{
            nextEl: '.swiper-work-next',
            prevEl: '.swiper-work-prev',
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            300: {
              slidesPerView: 1,
            }
          }}
        >
          {workList.work.map((work, index) => (
            <SwiperSlide 
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
            </SwiperSlide>
          ))}
        </Swiper>        
			</div>
		</section>
	);
}
export default SectionWork;