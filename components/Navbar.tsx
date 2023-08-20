import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

export default function Navbar(): JSX.Element {
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
      ::before {
        content: "";
        position: absolute;
        background: #fff;
        top: 50%;
        left: 0;
        width: 100%;
        height: 2px;
        transition: margin 0.2s linear 0.3s, transform 0.2s linear 0s;
        transform: ${({ isOpen }: { isOpen: boolean }) =>
          isOpen ? "rotate(45deg)" : "rotate(0)"};
      }
      ::after {
        content: "";
        position: absolute;
        background: #fff;
        left: 0;
        width: ${({ isOpen }: { isOpen: boolean }) =>
          isOpen ? "100%" : "70%"};
        top: 50%;
        height: 2px;
        margin-top: ${({ isOpen }: { isOpen: boolean }) =>
          isOpen ? "0" : "8px"};
        transition: margin 0.2s linear 0.3s, transform 0.2s linear 0s;
        transform: ${({ isOpen }: { isOpen: boolean }) =>
          isOpen ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  }
  .nav-list-wrapper {
    display: ${({ isOpen }: { isOpen: boolean }) =>
      isOpen ? "block" : "none"};
    height: 500px;
    width: 350px;
    position: absolute;
    top: 15px;
    right: 100px;
    z-index: 9999;
    background: #232323;
    @media (min-width: 768px) {
      right: 15px;
    }
    @media (min-width: 1100px) {
      right: 80px;
    }
    @media (min-width: 1300px) {
      right: 90px;
    }
    @media (min-width: 1500px) {
      right: 100px;
    }
    @media (max-width: 768px) {
      top: 0;
      right: 0;
      height: 100vh;
      width: 100%;
      position: fixed;
    }
    .nav-list {
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      list-style-type: none;

      margin-top: 4rem;

      .nav-item {
        .nav-link {
          font-size: 24px !important;
          color: #fff !important;
        }
      }
    }
  }
`;
