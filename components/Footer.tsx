import Link from "next/link";
export default function Footer(): JSX.Element {
  const today = new Date();
  const date = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="copyright">
              <h4>&copy; Ifeanyi Lucky.</h4>
              <p className="text-fade">{date}</p>
            </div>
            <div className="footer-text">
              <h2>
                I'm currently looking for a job but still available for
                freelance work in the meantime. Feel free to contact me if you
                want to collaborate on future projects or have a little chat.
                <br />
                <a href="mailto:ifeanyilucky360@gmail.com" className="link">
                  Get in touch.
                </a>
              </h2>
            </div>
          </div>
          <div className="column">
            <div className="right-footer-row">
              <div className="footer-column">
                <h3>Information</h3>
                <div className="footer-list">
                  <p>
                    <Link href="/about">
                      <a className="link" aria-label="About page">About</a>
                    </Link>
                  </p>
                  <p>
                    <Link href="/work">
                      <a className="link" aria-label="Work page">Work</a>
                    </Link>
                  </p>
                  <p>
                    <Link href="/resume">
                      <a className="link" aria-label="View my resume">Resume</a>
                    </Link>
                  </p>
                  <p>
                    <Link href="/uses">
                      <a className="link" aria-label="Uses page">Uses</a>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="footer-column">
                <h3>Connect</h3>
                <div className="footer-list">
                  <p>
                    <a
                      href="https://twitter.com/ifeanyilucas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                      aria-label="Twitter profile"
                    >
                      Twitter
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/ifeanyi-lucky-193b44194/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                      aria-label="LinkedIn profile"
                    >
                      LinkedIn
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/ifeanyilucky"
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub profile"
                    >
                      Github
                    </a>
                  </p>
                  <p>
                    <a
                      className="link"
                      href="mailto:ifeanyilucky360@gmail.com"
                      aria-label="Email contact"
                    >
                      Email
                    </a>
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
