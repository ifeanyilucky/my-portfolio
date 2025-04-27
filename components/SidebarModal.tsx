import React, { useCallback, useEffect } from "react";

import styled, { css, createGlobalStyle } from "styled-components";

import { Close, Github, Product } from "./Icons";
import { ISideBarModal } from "../types";

const SideBarModal = ({
  show,
  closeShow,
  size,
  overlayColor,
  css: styling,
  data,
}: ISideBarModal) => {
  const handleKeyPress = useCallback(
    (e: any) => {
      if (e.key === "Escape") {
        closeShow();
      }
    },
    [closeShow]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
  return (
    <>
      {show && (
        <>
          <Body />
          <Wrapper size={size} data-testid="sidebarmodal">
            <Overlay
              overlayColor={overlayColor}
              className="overlay"
              onClick={() => closeShow()}
            />
            <aside className="fadeInLeft">
              <div className="pos__relative">
                <div className="d-flex justify-content-between header">
                  <button
                    onClick={() => closeShow()}
                    className="none-button"
                    type="button"
                  >
                    <Close />
                  </button>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      closeShow();
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Back To Projects.
                  </a>
                </div>

                <div className="main__post">
                  <h3 className="mt-4">{data.title}</h3>
                  <p className="te mb-4">{data.description}</p>
                  <img src={data.cover} alt={data.title} />
                  <h4>About</h4>
                  <p>{data.about && data.about}</p>
                  <h4>Technologies</h4>

                  {data.technologies && (
                    <p className="d-flex flex-wrap">
                      {data.technologies.map((tech, index) => (
                        <span key={index} className="d-block mb-1">
                          {tech}
                        </span>
                      ))}
                    </p>
                  )}
                  <h5>
                    <Product /> Website
                  </h5>
                  <p>
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data.link}
                    </a>
                  </p>

                  {data.github && (
                    <>
                      <h5>
                        <Github /> Github
                      </h5>
                      <p>
                        <a
                          href={data.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.github}
                        </a>
                      </p>
                    </>
                  )}
                </div>
                <a
                  href={data.link}
                  className="open__project"
                  target="_blank"
                  id="cardHover"
                  rel="noopener noreferrer"
                >
                  Open Project{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
                  </svg>
                </a>
              </div>
            </aside>
          </Wrapper>
        </>
      )}
    </>
  );
};

const generateSize = (size: string) => {
  if (size === "sm")
    return css`
      width: 21.8em;
      padding: 1.5rem;
    `;
  if (size === "lg")
    return css`
      width: 34em;
    `;
  if (size === "md")
    return css`
      width: 29em;
      padding: 2rem;
    `;
};
const Body = createGlobalStyle`

body{
  overflow: hidden
}`;
const Wrapper = styled.div`
  .none-button {
    border: none;
    background: transparent;
    padding-left: 0;
    svg {
      fill: none !important;
    }
  }

  @keyframes fadeLeft {
    from {
      opacity: 0.8;
      transform: translateX(80%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  aside {
    background: var(--color-dark-gray);
    ${({ size }: { size: string }) => generateSize(size)}
    @media (max-width: 768px) {
      width: 100% !important;
    }
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999999;
    transition: all 0.3s ease;
    will-change: opacity, transform;
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.3);

    &.fadeInLeft {
      animation-name: fadeLeft;
      animation-duration: 0.5s;
      animation-fill-mode: both;
    }

    .header {
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        color: var(--color-white);
        opacity: 0.8;
        transition: opacity 0.2s ease;

        &:hover {
          opacity: 1;
        }
      }
    }

    .pos__relative {
      position: relative;
      padding: 2rem 2rem 5rem;
      overflow-y: auto;
      max-height: 100%;
      scrollbar-width: thin;
      scrollbar-color: var(--color-graphite) transparent;

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--color-graphite);
        border-radius: 20px;
      }
    }

    .open__project {
      background: var(--color-black);
      position: fixed;
      width: 100%;
      left: 0;
      bottom: 0;
      padding: 18px;
      color: var(--color-white);
      font-weight: 600;
      text-align: center;
      transition: background-color 0.2s ease;
      border-top: 1px solid rgba(255, 255, 255, 0.1);

      &:hover {
        background-color: #333;
      }

      svg {
        width: 16px;
        vertical-align: bottom;
        margin-left: 8px;
        fill: var(--color-white);
      }
    }
  }
  .main__post {
    h3 {
      color: var(--color-white);
      font-weight: 800;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    h4 {
      color: var(--color-white);
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-weight: 600;
      font-size: 1.2rem;

      svg {
        vertical-align: bottom;
        width: 16px;
        margin-right: 6px;
      }
    }

    h5 {
      margin-top: 1.5rem;
      font-weight: 600;
      display: flex;
      align-items: center;

      svg {
        margin-right: 8px;
      }
    }

    p {
      color: var(--color-light-grey);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1rem;

      span {
        background: #333;
        padding: 6px 13px;
        border-radius: 6px;
        text-transform: capitalize;
        font-size: 11px;
        margin-right: 8px;
        margin-bottom: 8px;
        color: var(--color-white);
        font-weight: 600;
        display: inline-block;
      }

      a {
        color: var(--color-white);
        opacity: 0.8;
        transition: opacity 0.2s ease;
        word-break: break-all;

        &:hover {
          opacity: 1;
          text-decoration: underline;
        }

        svg {
          fill: var(--color-white);
        }
      }
    }

    img {
      width: 100%;
      height: auto;
      max-height: 400px;
      object-fit: cover;
      border-radius: 8px;
      margin: 1.5rem 0;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  }
`;

const Overlay = styled.div`
  z-index: 9999;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  background: ${({ overlayColor }: { overlayColor: string }) =>
    overlayColor || "rgba(0, 0, 0, 0.8)"};
`;

export default SideBarModal;
