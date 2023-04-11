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
                  As a frontend developer based in Lagos, I am passionate about
                  creating visually appealing and user-friendly websites that
                  engage and inspire users. With my in-depth knowledge of
                  front-end technologies such as HTML, CSS, JavaScript, and
                  React, I am able to bring designs to life and ensure seamless
                  functionality across all devices.{' '}
                </p>
                <p className='text-primary'>
                  I pride myself on my ability to work collaboratively with
                  designers and back-end developers to ensure that every aspect
                  of a website is optimized for performance, usability, and
                  accessibility. From responsive layouts to interactive
                  animations, I am committed to delivering high-quality code
                  that meets the needs of both clients and end-users.
                </p>{' '}
                <p className='text-primary'>
                  {' '}
                  Whether I am working on a small project for a local business
                  or a large-scale application for a global brand, I approach
                  each task with the same level of enthusiasm and attention to
                  detail. As a frontend developer in Lagos, I am constantly
                  learning and adapting to new technologies and trends in order
                  to stay ahead of the curve and deliver the best possible
                  results for my clients.
                </p>
                <p className='text-primary'>
                  If you're interested in the tools and software i use check out
                  my{' '}
                  <Link href='/uses'>
                    <a className='link'>uses</a>
                  </Link>{' '}
                  page.
                  {/* In my spare time i like to read Books, watch movies and
                  attempt codewars challenge. */}
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
            </div>{' '}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default About;
