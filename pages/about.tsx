import { NextPage } from 'next';
import Page from '../components/Page';

const About: NextPage = () => {
  return (
    <div>
      <Page
        metaContent='I enjoy building interfaces that are a joy to use and support inclusive visions.'
        metaName='About me'
        title='About me'
      />
      <div className='container'>
        <h1>About me</h1>
      </div>
    </div>
  );
};

export default About;
