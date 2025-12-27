import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

export default function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { pathname } = useRouter();
  const navbarRef = useRef(null);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <NavWrapper isOpen={isOpen}>
      <div className="container">
        <nav>
          <div className="logo">
            <Link href="/">
              <h3 className="logo-text">Ifeanyi.</h3>
            </Link>
          </div>
          <div className="header-right">
            <div
              className="menu-toggle"
              onClick={() => (isOpen ? setOpen(false) : setOpen(true))}
            />
          </div>
          <div className="nav-list-wrapper" ref={navbarRef}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/work">
                  <a className="nav-link">Work</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/uses">
                  <a className="nav-link">Uses</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  .logo-text {
    font-weight: 800;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      cursor: pointer;
    }
  }
  .header-right {
    z-index: 99999999;
    display: flex;
    justify-content: flex-end;
    flex: 1 0 0;
    align-items: center;
    .menu-toggle {
      width: 32px;
      will-change: transform;
      position: relative;
      height: 32px;
      cursor: pointer;
      border-radius: 50%;
      padding: 8px;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      ::before {
        content: "";
        position: absolute;
        background: #fff;
        top: 40%;
        left: 8px;
        width: 16px;
        height: 2px;
        transition: transform 0.3s ease, top 0.3s ease;
        transform: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? "rotate(45deg)" : "rotate(0)"};
        transform-origin: center;
        top: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? "50%" : "40%"};
      }

      ::after {
        content: "";
        position: absolute;
        background: #fff;
        left: 8px;
        width: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? "16px" : "12px"};
        top: 60%;
        height: 2px;
        transition: transform 0.3s ease, width 0.3s ease, top 0.3s ease;
        transform: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? "rotate(-45deg)" : "rotate(0)"};
        transform-origin: center;
        top: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? "50%" : "60%"};
      }
    }
  }
  .nav-list-wrapper {
    display: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? "block" : "none"};
    height: auto;
    width: 300px;
    position: absolute;
    top: 60px;
    right: 0;
    z-index: 9999;
    background: #232323;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in-out;

    @media (min-width: 768px) {
      width: 300px;
      right: 15px;
    }

    @media (max-width: 768px) {
      top: 0;
      right: 0;
      height: 100vh;
      width: 100%;
      position: fixed;
      border-radius: 0;
    }
    .nav-list {
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      list-style-type: none;
      padding: 1.5rem;
      margin-top: 0;

      .nav-item {
        margin: 0.75rem 0;
        transition: transform 0.2s ease;

        &:hover {
          transform: translateX(5px);
        }

        .nav-link {
          font-size: 20px !important;
          color: #fff !important;
          display: block;
          padding: 0.5rem 0;
          transition: opacity 0.2s ease;

          &:hover {
            opacity: 0.8;
          }
        }
      }

      @media (max-width: 768px) {
        margin-top: 4rem;
        padding: 2rem;

        .nav-item .nav-link {
          font-size: 24px !important;
        }
      }
    }
  }
`;
