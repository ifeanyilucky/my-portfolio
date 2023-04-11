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
                I'm currently looking for a job but still available for
                freelance work in the meantime. Feel free to contact me if you
                want to collaborate on future projects or have a little chat.
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
                    <Link href='/uses'>Uses</Link>
                  </p>
                </div>
              </div>
              <div>
                <h3>Connect</h3>
                <div className='footer-list'>
                  <p className='link'>
                    <a
                      href='https://twitter.com/ifeanyilucas'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Twitter
                    </a>
                  </p>
                  <p className='link'>
                    <a
                      href='https://www.linkedin.com/in/ifeanyi-lucky-193b44194/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      LinkedIn
                    </a>
                  </p>
                  <p className='link'>
                    <a
                      href='https://github.com/ifeanyilucky'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Github
                    </a>
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
