import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Page from '../components/Page';
import { PageWrapper } from '../components/PageWrapper';

const Resume: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <Page
        metaContent="Ifeanyi Lucky's Resume - Full Stack Developer"
        metaName="Resume"
        title="Resume"
      />
      <PageWrapper>
        <div className="container">
          <div className="resume-container">
            <h1 className="resume-title">My Resume</h1>
            <div className="resume-actions">
              <a 
                href="/ifeanyilucky1.pdf" 
                download 
                className="resume-button"
                aria-label="Download resume PDF"
              >
                Download PDF
              </a>
            </div>
            
            {isMounted && (
              <div className="pdf-container">
                <object
                  data="/ifeanyilucky1.pdf"
                  type="application/pdf"
                  className="pdf-viewer"
                >
                  <div className="pdf-fallback">
                    <p>
                      It appears your browser doesn't support embedded PDFs.
                      You can{" "}
                      <a href="/ifeanyilucky1.pdf" target="_blank" rel="noopener noreferrer">
                        download the PDF
                      </a>{" "}
                      instead.
                    </p>
                  </div>
                </object>
              </div>
            )}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Resume;
