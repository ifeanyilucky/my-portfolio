import type { NextPage } from 'next';
import Link from 'next/link';
import Page from '../components/Page';
import HomeProjects from '../components/HomeProject';
import { PageWrapper } from '../components/PageWrapper';

const Index: NextPage = () => {
  return (
    <div>
      <Page
        metaContent={`Ifeanyi Lucky's Portfolio - Web Developer & Designer`}
        metaName='Home'
        title='Home'
      />

      <div className='container'>
        <div className='hero-section'>
          <PageWrapper>
            <h1 className='hero-title'>
              Hi there, I'm glad you found me. My name is Ifeanyi Lucky and I'm
              passionate about web development and design.
            </h1>
            <p className='hero-subtitle'>
              I specialize in creating modern web experiences using NextJs, VueJs,
              Typescript, GSAP, NodeJs and more. I focus on building responsive,
              accessible, and performant websites and applications.
            </p>
            <div className='hero-cta'>
              <Link href='/about'>
                <a className='cta-button primary'> Read more about me</a>
              </Link>
              <Link href='/work'>
                <a className='cta-button secondary'>View my work</a>
              </Link>
            </div>
          </PageWrapper>
        </div>
        <HomeProjects />
      </div>
    </div>
  );
};

export default Index;
