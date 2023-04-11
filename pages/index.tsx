import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Page from '../components/Page';
import HomeProjects from '../components/HomeProject';
import { PageWrapper } from '../components/PageWrapper';

const Index: NextPage = () => {
  return (
    <div>
      <Page
        metaContent={`Ifeanyi Lucky's Portfolio`}
        metaName='Home'
        title='Home'
      />

      <div className='container'>
        <div className='mt-5'>
          <PageWrapper>
            <h1 className='display-4'>
              Hi there, I'm glad you found me. My name is Ifeanyi Lucky and I'm
              passionate about web development and design, currently working
              with NextJs, VueJs, Typescript, GSAP, NodeJs and more.
              <br />
              <Link href='/about'>
                <a className='link'> Read more</a>
              </Link>
            </h1>
          </PageWrapper>
        </div>
      </div>
      {/* <HomeProjects /> */}
    </div>
  );
};

export default Index;
