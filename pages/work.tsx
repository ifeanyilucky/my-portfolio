import { NextPage } from 'next';
import Page from '../components/Page';

const Work: NextPage = () => {
  return (
    <>
      <Page
        metaContent='My selected projects'
        metaName='My works'
        title='My Works'
      />
      <div className='container'>
        <h1>Selected Projects</h1>
      </div>
    </>
  );
};

export default Work;
