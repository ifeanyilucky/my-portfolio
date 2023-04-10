import Link from 'next/link';
import { projects } from '../context/projects';

export default function Navbar(): JSX.Element {
  return (
    <div className='navbar'>
      <div className='container'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link href='/'>
              <a className='nav-link'>
                <p className='nav-title'>Ifeanyi Lucky</p>
                <p className='nav-subtitle text-fade'>Biography</p>
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/about'>
              <a className='nav-link'>
                <p className='nav-title'>About</p>
                <p className='nav-subtitle text-fade'>Biography</p>
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <span />
          </li>
          <li className='nav-item'>
            <Link href='/work'>
              <a className='nav-link'>
                <p className='nav-title'>Work</p>
                <p className='nav-subtitle text-fade'>
                  {projects && projects.length} Projects
                </p>
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/about'>
              <a className='nav-link'>
                <p className='nav-title'>Blog</p>
                <p className='nav-subtitle text-fade'>1 Article</p>
              </a>
            </Link>
          </li>
        </ul>{' '}
      </div>
    </div>
  );
}
