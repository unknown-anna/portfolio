import { type FC, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from "motion/react"

import Layout from '@/components/template/Layout';
import Nav from '@/components/organisms/Nav';
import Hero from '@/components/organisms/Hero';
import SectionHands from '@/components/organisms/SectionHands';
import SectionSkill from '@/components/organisms/SectionSkill';
import SectionWork from '@/components/organisms/SectionWork';
import Footer from '@/components/organisms/Footer';

const App :FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll(
      {target: ref}
    );
    const [ scrollY, setScrollY ] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      setScrollY(latest);
    });

    
  return (
    
    <Layout>
      <Nav isShowBG={scrollY > 0} />
      <Hero/>
      <div ref={ref}>
        <SectionHands/>
        <SectionSkill/>
        <SectionWork/>
        <Footer/>
      </div>
    </Layout>
    
  )
}

export default App
