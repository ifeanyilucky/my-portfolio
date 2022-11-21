import Link from 'next/link';
import { projects } from './projects';

export default function Home(): JSX.Element {
  return (
    <div className='container'>
      <div className='hero'>
        <div className='intro'>
          <h1>
            Hi there, I'm glad you found me. My name is Ifeanyi Lucky and I
            build software, explain it to people in “human”, and make sure it
            does what they really need.
            <br />
            <Link href='/about'>
              <a className='link'> Read more</a>
            </Link>
          </h1>
        </div>
      </div>
      <div className='work-section'></div>
    </div>
  );
}
