import { type FC } from 'react';

import Layout from '@/components/template/Layout';
import Nav from '@/components/organisms/Nav';
import Hero from '@/components/organisms/Hero';
import SectionHands from '@/components/organisms/SectionHands';
import SectionSkill from '@/components/organisms/SectionSkill';
import SectionWork from '@/components/organisms/SectionWork';
import Footer from '@/components/organisms/Footer';

const App :FC = () => {

  return (
    
    <Layout>
      <Nav/>
      <Hero />
      <SectionHands/>
      <SectionSkill/>
      <SectionWork/>
      <Footer/>
    </Layout>
    
  )
}

export default App
