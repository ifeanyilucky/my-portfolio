import { NextPage } from 'next';

const Now: NextPage = () => {
  return (
    <div className='container'>
      <div className='about-box'>
        <div className='about-section'>
          <h1>Now-ish</h1>
          <p className='text-primary'>
            This is what happens in my life. If you want to know more about why
            and how to create a "now" page, check{' '}
            <a href='https://nownownow.com/about' className='link'>
              nownownow.com.
            </a>
          </p>
        </div>
        <div className='about-section'>
          <h1 style={{ paddingBottom: '1.5rem' }}>Currently reading</h1>
          <div>
            {['', '', ''].map((book, index) => (
              <div className='book-wrapper' key={index}>
                <div className='book-cover-wrapper'>
                  <img src='book' alt='book' className='book-cover' />
                </div>
                <div className='book-content'>
                  <p className='book-title'>
                    The book you wish your parents had read
                  </p>
                  <p className='author'>Philippa Perry</p>
                </div>
              </div>
            ))}
          </div>
          <p className='text-primary'>
            See entire library on{' '}
            <a href='https://literal.com/codack' className='link'>
              Literal
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Now;
