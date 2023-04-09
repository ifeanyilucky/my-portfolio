/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useContext } from 'react';
import styled from 'styled-components';

/* -------------------------- Internal Dependencies ------------------------- */

// import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
// import Tabs, { TabItems } from '../components/Tabs';
import MansoryLayout from '../components/mansory';
import MansoryItem from '../components/mansory/mansory-item';
import { ProjectsContext } from '../context';
import Page from '../components/Page';

const Projects = () => {
  const projectsData = useContext(ProjectsContext);
  return (
    <div>
      <Page
        metaContent='I enjoy building interfaces that are a joy to use and support inclusive visions.'
        metaName='About me'
        title='About me'
      />
      <div className='container'>
        <PageSection>
          <div>
            <h1 className='intro__text'>Projects.</h1> <br />
            <MansoryLayout>
              {projectsData.map((item, index) => (
                <MansoryItem key={index} item={item} />
              ))}
            </MansoryLayout>
          </div>
        </PageSection>
      </div>
    </div>
  );
};
export const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  button {
    font-size: calc(var(--font-sm) + 1.5px);
    background: var(--mark);
    border: none;
    border-radius: 5px;
    padding: 0px 9px;
  }
`;

export default Projects;
