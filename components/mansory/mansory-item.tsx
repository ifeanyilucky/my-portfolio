/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import SideBarModal from '../SidebarModal';
import { WithRouterProps } from 'next/dist/client/with-router';
import { ProjectDetailProps } from '../../types';

interface MansoryItemProp extends WithRouterProps {
  item: ProjectDetailProps;
  key: number;
}
const MansoryItem = withRouter(
  ({ item, key, router: { pathname } }: MansoryItemProp) => {
    const [show, setShow] = useState(false);
    const height = ['400px', '454px', '310px'];
    const random = Math.floor(Math.random() * height.length);
    return (
      <>
        {!pathname.includes('/work') ? (
          <a
            href={item.link}
            target='_blank'
            style={{
              color: 'var(--color-graphite)',
              textDecoration: 'none',
              display: 'block',
            }}
            rel='noopener noreferrer'
            title={item.title}
            id='cardHover'
            aria-label={`${item.title} ${item.description}`}
          >
            <MansoryItemStyle
              {...{ item }}
              style={{
                height: height[random],
              }}
              role='gridcell'
            >
              <img src={item.cover} alt={item.cover} />
              <div className='content__slate'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </MansoryItemStyle>
          </a>
        ) : (
          <>
            <MansoryItemStyle
              {...{ item }}
              style={{
                height: height[random],
              }}
              role='gridcell'
              id='cardHover'
              aria-label={`${item.title} ${item.description}`}
              onClick={() => setShow(true)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') return setShow(true);
              }}
              tabIndex={0}
            >
              <img src={item.cover} alt={item.cover} />
              <div className='content__slate'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.technologies && (
                  <p className='d-flex flex-wrap'>
                    {item.technologies.map((tech: string, index: number) => (
                      <span key={index} className='d-block mb-1'>
                        {tech}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </MansoryItemStyle>

            <SideBarModal
              show={show}
              closeShow={() => setShow(false)}
              size='lg'
              data={item}
              overlayColor={''}
              css={undefined}
            />
          </>
        )}
      </>
    );
  }
);

const MansoryItemStyle = styled.div`
  margin: 0 0 1.5em;
  position: relative;

  cursor: pointer;
  border-radius: 9px;
  object-fit: cover;
  background-color: var(--button-index);
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: 1.4rem 2rem;
  display: flex;
  align-items: flex-end;
  border-radius: 9px;
  break-inside: avoid;
  img {
    width: 100% !important;
    height: 100% !important;
    position: absolute;
    left: 0 !important;
    top: 0 !important;
    object-fit: cover;
  }
  &:before {
    content: '';
    pointer-events: none;
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    background: radial-gradient(
      circle at center center,
      white 10%,
      whitesmoke 11%,
      whitesmoke 100%
    );
  }
  &:after {
    content: '';
    pointer-events: none;
    position: absolute;
    z-index: 1;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.3;
    /* background: linear-gradient(
      191deg,
      rgba(0, 0, 0, 0.1) 20%,
      rgba(0, 0, 0, 0.76) 100%
    ); */
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1) 10%,
      rgb(0 0 0 / 78%) 80%
    );
  }
  &:hover,
  &:focus {
    cursor: none;
    &:after {
      opacity: 1;
    }
    div.content__slate {
      z-index: 999;
      transform: none;
      opacity: 1;
    }
  }

  h3 {
    color: #fff;
    font-size: var(--font-x-md);
    font-weight: 800;
  }
  p {
    color: #d5d5d5 !important;
    font-size: calc(var(--font-sm) + 0.9px);
    span {
      background: #696869;
      padding: 4px 10px;
      border-radius: 50px;
      text-transform: capitalize;
      font-size: 11px;
      margin-right: 6px;
      color: #fff;
      font-weight: 500;
    }
  }

  div.content__slate {
    opacity: 0;
    transform: translateY(10%);
    transition: opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s;

    /* &:hover {
            transform: none;
            opacity: 1;
        } */
  }
  @media (max-width: 585px) {
    &:after {
      opacity: 1 !important;
    }
    div.content__slate {
      z-index: 999 !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }
  @media (max-width: 989px) {
    &:after {
      opacity: 1 !important;
    }
    div.content__slate {
      z-index: 999 !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }
  @media (max-width: 220px) {
    &:after {
      opacity: 1 !important;
    }
    div.content__slate {
      z-index: 999 !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }
`;

export default MansoryItem;
