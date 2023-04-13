import React, { useContext } from 'react';
import styled from 'styled-components';

import FooterLink from '../components/Footer';
import MansoryLayout from '../components/mansory';
import MansoryItem from '../components/mansory/mansory-item';
import { ProjectsContext } from '../context';
import Page from '../components/Page';
import { ProjectDetailProps } from '../types';

const Projects = () => {
  const projectsData = useContext(ProjectsContext);
  return (
    <div>
      <Page
        metaContent='I enjoy building interfaces that are a joy to use and support inclusive visions.'
        metaName='My works'
        title='My works'
      />
      <div className='container'>
        <PageSection>
          <div>
            <h1>Selected projects.</h1> <br />
            <p className='text-primary'>
              I've worked on some neat projects throughout the years and these
              are some of my favourites:
            </p>{' '}
            <br />
            <MansoryLayout>
              {projectsData.map((item: ProjectDetailProps, index: number) => (
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
