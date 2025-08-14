import { type FC } from 'react';
import SectionHeader from '@/components/atoms/SectionHeader';

import style from '@/scss/organisms/SectionSkill.module.scss'

interface skill {
  name:string
}

interface skillCategory {
  title:string,
  description:string,
  skill:skill[]
}

interface skillList {
  skillCategory: skillCategory[]
}

const skillList:skillList = {
  skillCategory: [
    {
      title: "Graphic Design",
      description: "My passion is graphic design. I acquired skills in design banner, logo, advatisement pages in magazine, and buissness cards, so on.",
      skill: [
        { name: "UI/UX" },
        { name: "Web" },
        { name: "Logo"},
        { name: "Banner Image" },
        { name: "Print" },
        { name: "Adobe Illustrator" },
        { name: "Adobe PhotoShop" },
      ]
    },

    {
      title: "Front-End Development",
      description: "What if I also developed a website? It'd be cool and great skills to have. I aquired these skills to create a website as I imagined.",
      skill: [
        { name: "HTML" },
        { name: "CSS / SCSS" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Vite" },
        { name: "TypeScript" },
        { name: "JavaScript" },
      ]
    },

    {
      title: "Back-End Development",
      description: "To develop functional websites, I also acquired skills in back-end development. I started with LAMP stack, WordPress, and then moved on to Laravel.",
      skill: [
        { name: "RESTfull" },
        { name: "PHP" },
        { name: "WordPress" },
        { name: "Laravel" },
        { name: "MySQL" },
        { name: "Apache" },
        { name: "NGINX" },
        { name: "Linux" },
        { name: "Docker" },
        { name: "GitHub" },
      ]
    },
    {
      title: "Illustration & Music",
      description: "I take on commissions for illustration and music by following clients' needs and preferences.",
      skill: [
        { name: "Commission" },
        { name: "Drawing Character and Fanart" },
        { name: "Clip Studio" },
        { name: "Pro Create" },
        { name: "Logic Pro" },
        { name: "Vocaloid" },
      ]
    },
    {
      title: "Video Edit",
      description: "I edit clips and music videos for fun and entertain my friends.",
      skill: [
        { name: "Adobe After Effects" },
        { name: "Adobe Premiere Pro" },
        { name: "Adobe Audition" },
        { name: "Animation" },
      ]
    }
]};

const SectionSkill: FC = () => {
	return (
		<section className={`${style.skill_list}`}>
			<SectionHeader headerName={'Skills'} />
      
			<div className={`${style.container}`}>
        <ul className={`${style.skill}`}>
          {skillList.skillCategory.map((skill, index) => (
            <li className={`${style.item}`} key={index}>

              <h3 className={`${style.title}`}>{skill.title}</h3>
              <p className={`${style.description}`}>{skill.description}</p>
              <ul className={`${style.skill_tag}`}>
                {skill.skill.map((tag, index) => (
                  <li className={`${style.tag}`} key={index}>{tag.name}</li>
                ))}
              </ul>

            </li>
          ))}
        </ul>
			</div>
		</section>
	);
}
export default SectionSkill;