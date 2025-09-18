import { type FC } from 'react';

import SectionHeader from '@/components/atoms/SectionHeader';

import imgThumbDbd from '@/assets/img/work/img_dbd.png'
import imgThumbPlus from '@/assets/img/work/img_plus.png'
import imgThumbPortfolio from '@/assets/img/work/img_portfolio.png'
import imgThumbTabichoku from '@/assets/img/work/img_tabichoku.png'
import imgThumbMusic from '@/assets/img/work/img_music.png'
import imgThumbMusicOld from '@/assets/img/work/img_music_old.png'
import imgThumbChatbox from '@/assets/img/work/img_chatbox.png'

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
  website: string;
}

interface workList {
  work: work[]
} 

const workList: workList = {
  work: [
    { 
      title: 'Tabichoku', 
      category: 'HTML / CSS / JavaScript',
      description: 'Freelance', 
      img: imgThumbTabichoku,
      website: "https://tabi-choku.com/",
    },
    { 
      title: 'Dead By Daylight Multi Language Peak List', 
      category: 'HTML / CSS / JavaScript',
      description: 'Private Project', 
      img: imgThumbDbd,
      website: "",
    },
    { 
      title: 'Medical Web Application - Plus Reserve', 
      category: 'HTML / CSS / JavaScript',
      description: 'Freelance', 
      img: imgThumbPlus,
      website: "",
    },
    { 
      title: 'Anna Nakazawa - Portfolio', 
      category: 'React / TypeScript / Vite',
      description: 'Private Project', 
      img: imgThumbPortfolio,
      website: "",
    },
    { 
      title: 'Anna Nakazawa - Music Portfolio Ver 2.0', 
      category: 'HTML / CSS / JavaScript / Adobe XD',
      description: '', 
      img: imgThumbMusic,
      website: "",
    },
    { 
      title: 'Anna Nakazawa - Music Portfolio Ver 1.0', 
      category: 'HTML / CSS / JavaScript / Adobe XD',
      description: '', 
      img: imgThumbMusicOld,
      website: "",
    },
    { 
      title: 'Twitch Chatbox', 
      category: 'HTML / CSS / JavaScript',
      description: '', 
      img: imgThumbChatbox,
      website: "",
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