import Link from 'next/link';
import { projects } from './projects';

export default function Home(): JSX.Element {
  return (
    <div className='container'>
      <div className='hero'>
        <div className='intro'>
          <h1>
            Frontend Developer of intuitive and aesthetic digital products. I
            enjoy building interfaces that are a joy to use and support
            inclusive visions.
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
