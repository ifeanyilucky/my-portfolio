import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Home from '../components/Home';
import Page from '../components/Page';

const Index: NextPage = () => {
  return (
    <div>
      <Page
        metaContent={`Ifeanyi Lucky's Portfolio`}
        metaName='Home'
        title='Home'
      />

      <Home />
    </div>
  );
};

export default Index;
