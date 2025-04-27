/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { FunctionComponent, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* ------------------------- MansoryLayout PropTypes ------------------------ */
interface MansoryLayoutProps {
  children: ReactNode;
}
const MansoryLayout: FunctionComponent<MansoryLayoutProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  margin: 2em 0;
  animation-duration: 0.8s;
  animation-fill-mode: both;
  -webkit-animation-duration: 0.8s;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
  -webkit-animation-fill-mode: both;
  width: 100%;
  column-gap: 2em;

  @media only screen and (min-width: 1200px) {
    column-count: 2;
  }

  @media only screen and (max-width: 1199px) and (min-width: 768px) {
    column-count: 2;
    column-gap: 1.5em;
  }

  @media only screen and (max-width: 767px) {
    column-count: 1;
    margin: 1em 0;
  }

  @keyframes fadeInUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeInUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Ensure animation doesn't interfere with mobile experience */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-animation: none;
    opacity: 1 !important;
  }
`;

export default MansoryLayout;
