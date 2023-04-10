import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin: 1.5em 0;
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
  -webkit-animation-fill-mode: both;

  @keyframes fadeInUp {
    from {
      margin-top: 4rem;
      opacity: 0;
    }

    to {
      margin-top: 1.5em;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeInUp {
    from {
      margin-top: 4rem;
      opacity: 0;
    }

    to {
      margin-top: 1.5em;
      opacity: 1;
    }
  }
`;
