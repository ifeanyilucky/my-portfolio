import Link from 'next/link';
export default function Footer(): JSX.Element {
  const today = new Date();
  const date = `${today.getDate()}.${today.getMonth()}.${today.getFullYear()}`;
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='column'>
            <div className='copyright'>
              <h4>&copy; Ifeanyi Lucky.</h4>
              <p className='text-fade'>{date}</p>
            </div>
            <div className='footer-text'>
              <h2>
                Let's envision a better future together by building solutions
                that positively impact the way we live and leave a better earth
                for future generations.
                <br />
                <a href='mailto:ifeanyilucky360@gmail.com' className='link'>
                  Get in touch.
                </a>
              </h2>
            </div>
          </div>
          <div className='column'>
            <div className='right-footer-row'>
              <div>
                <h3>Information</h3>
                <div className='footer-list'>
                  <p className='link'>
                    <Link href='/about'>About</Link>
                  </p>
                  <p className='link'>
                    <Link href='/work'>Work</Link>
                  </p>
                  <p className='link'>
                    <Link href='/resume'>Resume</Link>
                  </p>
                  <p className='link'>
                    <Link href='/blog'>Blog</Link>
                  </p>
                </div>
              </div>
              <div>
                <h3>Connect</h3>
                <div className='footer-list'>
                  <p className='link'>
                    <a href='https://twitter.com/ifeanyilucas'>Twitter</a>
                  </p>
                  <p className='link'>
                    <a href='https://linkedin.com/ifeanyilucky'>LinkedIn</a>
                  </p>
                  <p className='link'>
                    <a href='https://github.com/ifeanyilucky'>Github</a>
                  </p>
                  <p className='link'>
                    <a href='mailto:ifeanyilucky360@gmail.com'>Email</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
