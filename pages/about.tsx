import { NextPage } from 'next';
import Link from 'next/link';
import { bucketList } from '../components/bucketlist';
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
        <div className='about-box'>
          <div className='about-section'>
            <h1 style={{ paddingBottom: '1.5rem' }}>About</h1>

            <p className='text-primary'>
              I'm Ifeanyi, currently i live in Lagos. If you're interested in
              the tools and software i use check out my{' '}
              <Link href='/uses'>
                <a className='link'>uses</a>
              </Link>{' '}
              page. In my spare time i like to read Books, watch movies and
              attempt codewars challenge.
            </p>
            <p className='text-primary'>
              {' '}
              My whole life is shaped around my passion for programming. I'm
              always down for hearing about new projects, so feel free to drop
              me a line.
            </p>
          </div>
          <div className='about-section'>
            <h1 style={{ paddingBottom: '1.5rem' }}>Experience</h1>
            <p className='text-primary'>
              So as not to bore you, I'll leave my school career out of this.
              Many important lessons can only be found outside the classroom and
              studying for Accounting class was never my dearest thing to do.
              After my secondary school, however, I compiled my first lines of
              code and started to work as a freelancer simultaneously.
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
          </div>
          <div className='about-section'>
            <h1 style={{ paddingBottom: '1.5rem' }}>Bucket List</h1>
            <p className='text-primary'>
              This is a list of things I will (hopefully) accomplish in this
              lifetime. The only rule is that I can't delete anything, just add
              more:
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
  );
};

export default About;
