import { NextPage } from 'next';
import Link from 'next/link';
import { bucketList } from '../components/bucketlist';
import Page from '../components/Page';
import { PageWrapper } from '../components/PageWrapper';

const About: NextPage = () => {
  return (
    <div>
      <Page
        metaContent='I enjoy building interfaces that are a joy to use and support inclusive visions.'
        metaName='About me'
        title='About me'
      />
      <PageWrapper>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 col-12 mx-auto'>
              <div className='about-section'>
                <h1 style={{ paddingBottom: '1.5rem' }}>About</h1>
                <p className='text-primary'>
                As a versatile full-stack developer based in Lagos, I am passionate about crafting engaging, user-friendly digital experiences that inspire and connect with users. With expertise in front-end technologies like HTML, CSS, JavaScript, React, and React Native, I bring designs to life, ensuring seamless functionality and responsiveness across devices. My backend experience with Node.js allows me to build robust, scalable server-side solutions, while my proficiency in Swift for iOS development enables me to create intuitive, high-performance mobile applications.
                </p>
                <p className='text-primary'>
                I thrive on collaboration, working closely with designers, developers, and stakeholders to optimize every aspect of a project for performance, usability, and accessibility. From responsive web layouts and interactive animations to efficient APIs and native mobile features, I am committed to delivering clean, high-quality code that meets the needs of clients and end-users alike.
                </p>{' '}
                <p className='text-primary'>
                  {' '}
                  Whether tackling a small-scale project for a local business or a complex application for a global brand, I approach each challenge with enthusiasm, precision, and a dedication to excellence. Constantly learning and embracing new technologies—such as React Native for cross-platform mobile development and Node.js for backend architecture—I stay ahead of industry trends to deliver innovative solutions that drive results.
                </p>
                <p className='text-primary'>
                  If you're interested in the tools and software I use, check out
                  my{' '}
                  <Link href='/uses'>
                    <a className='link'>uses</a>
                  </Link>{' '}
                  page. You can also view my{' '}
                  <Link href='/resume'>
                    <a className='link'>resume</a>
                  </Link>{' '}
                  for more details about my professional experience.
                </p>
              </div>
              {/* <div className='about-section'>
                <h1 style={{ paddingBottom: '1.5rem' }}>Experience</h1>
                <p className='text-primary'>
                  So as not to bore you, I'll leave my school career out of
                  this. Many important lessons can only be found outside the
                  classroom and studying for Accounting class was never my
                  dearest thing to do. After my secondary school, however, I
                  compiled my first lines of code and started to work as a
                  freelancer simultaneously.
                </p>{' '}
                <p className='text-primary'>
                  {' '}
                  As of now, learning to balance work and University until
                  graduation teaches me to thoroughly plan and execute tasks, as
                  well as focusing on the highest relevance of both sides.
                </p>
                <p className='text-primary'>
                  If you want regular updates, see my{' '}
                  <Link href='/now'>
                    <a className='link'>"Now" page</a>
                  </Link>
                  .
                </p>
              </div> */}
              <div className='about-section'>
                <h1 style={{ paddingBottom: '1.5rem' }}>Bucket List</h1>
                <p className='text-primary'>
                  This is a list of things I will (hopefully) accomplish in this
                  lifetime. The only rule is that I can't delete anything, just
                  add more:
                </p>
                <ul className='bucket-list'>
                  {bucketList.map((list) => (
                    <li
                      className={`${
                        list.done ? 'text-secondary' : 'text-primary'
                      } bucket-list-item`}
                      key={list.title}
                    >
                      {list.title} {list.done ? '✅' : ''}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default About;
