import React, { useRef } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Modal from "./modal";

export default function Nav({
  HandleHomeScroll,
  HandleSkillsScroll,
  HandleExperiencesScroll,
  HandleProjectsScroll,
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [isHomeClicked, setIsHomneClicked] = React.useState(false);
  const [isSkillClicked, setIsSkillsClicked] = React.useState(false);
  const [isExpClicked, setIsExpClicked] = React.useState(false);
  const [isProjClicked, setIsProjClicked] = React.useState(false);

  const HandleToggle = (num) => {
    setIsMobileOpen(false);
    if (num == 1) {
      HandleHomeScroll();
    } else if (num == 2) {
      HandleSkillsScroll();
    } else if (num == 3) {
      HandleExperiencesScroll();
    } else if (num == 4) {
      HandleProjectsScroll();
    } else {
      setIsOpen(true);
    }
  };

  const HandleClicked = (num) => {
    if (num == 0) {
      setIsHomneClicked(true);
      setIsSkillsClicked(false);
      setIsExpClicked(false);
      setIsProjClicked(false);
    } else if (num == 1) {
      setIsHomneClicked(false);
      setIsSkillsClicked(true);
      setIsExpClicked(false);
      setIsProjClicked(false);
    } else if (num == 2) {
      setIsHomneClicked(false);
      setIsSkillsClicked(false);
      setIsExpClicked(true);
      setIsProjClicked(false);
    } else {
      setIsHomneClicked(false);
      setIsSkillsClicked(false);
      setIsExpClicked(false);
      setIsProjClicked(true);
    }
  };
  return (
    <>
      <HeaderContainer>
        <h1
          className={isMobileOpen ? "h1None" : "glitch"}
          data-glitch="Sam Lee"
          onClick={() => {
            window.location.href = "https://samlee.tech/"
            // HandleHomeScroll(), HandleClicked(0);
          }}
        >
          Sam Lee
        </h1>
        <div className="container">
          <ul>
            <li
              onClick={() => {
                HandleHomeScroll(), HandleClicked(0);
              }}
            >
              <span className={isHomeClicked ? "clicked" : "unClicked"}>
                HOME
              </span>
            </li>
            <li
              onClick={() => {
                HandleSkillsScroll(), HandleClicked(1);
              }}
            >
              <span className={isSkillClicked ? "clicked" : "unClicked"}>
                SKILLS
              </span>
            </li>
            <li
              onClick={() => {
                HandleExperiencesScroll(), HandleClicked(2);
              }}
            >
              <span className={isExpClicked ? "clicked" : "unClicked"}>
                EXPERIENCES
              </span>
            </li>
            <li
              onClick={() => {
                HandleProjectsScroll(), HandleClicked(3);
              }}
            >
              <span className={isProjClicked ? "clicked" : "unClicked"}>
                PROJECTS
              </span>
            </li>
          </ul>
        </div>

        <button
          className="btn"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Contact Me
        </button>
        <MobileContainer>
          <div
            class={isMobileOpen ? "hambergurNone" : "hambergur"}
            onClick={() => setIsMobileOpen(true)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class={isMobileOpen ? "toggleContainer" : "toggleNone"}>
            <ul>
              <li onClick={() => HandleToggle(1)}>HOME</li>
              <li onClick={() => HandleToggle(2)}>SKILLS</li>
              <li onClick={() => HandleToggle(3)}>EXPERIENCES</li>
              <li onClick={() => HandleToggle(4)}>PROJECTS</li>
              <li onClick={() => HandleToggle(5)}>CONTACT</li>
            </ul>
          </div>
        </MobileContainer>
      </HeaderContainer>

      <div className="none">
        <Modal open={isOpen} close={() => setIsOpen(false)} />
      </div>
    </>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  letter-spacing: 0.1rem;
  font-family: "Mukta", sans-serif;
  position: sticky;
  top: 0;
  background-color: rgba(2, 2, 2, 0.7);
  z-index: 99;
  float: left;

  & h1 {
    font-size: large;
    font-family: "Bebas Neue", cursive;
    color: white;
    padding: 0.2rem 0.5rem;
    border: 2px solid white;
    text-decoration: none;
    margin: 0;
    color: #fff;
    letter-spacing: 2px;

    &:before,
    &:after {
      position: absolute;
      top: 35%;
      display: block;
      content: attr(data-glitch);
      opacity: 0.8;
    }
    &:after {
      color: #f0f;
      z-index: -2;
    }
    &:before {
      color: #0ff;
      z-index: -1;
    }
    &:hover {
      cursor: pointer;
      &:before {
        animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both 5;
      }
      &:after {
        animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
          5;
      }
    }

    @media only screen and (max-width: 1200px) {
      font-size: 1rem;
      letter-spacing: 1px;
      border: none;
      display: flex;
      align-items: center;
      width: 100%;

      &:before,
      &:after {
        position: absolute;
        top: 33%;
        display: block;
        content: attr(data-glitch);
        opacity: 0.8;
      }

      .glitch {
        font-size: 3em;
      }
    }
  }
  .h1None {
    display: none;
  }
  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-5px, 5px);
    }
    40% {
      transform: translate(-5px, -5px);
    }
    60% {
      transform: translate(5px, 5px);
    }
    80% {
      transform: translate(5px, -5px);
    }
    to {
      transform: translate(0);
    }
  }

  .container {
    vertical-align: middle;
    text-align: center;
    width: 600px;
  }

  & ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & li {
    display: inline-block;
    padding: 0 20px;
  }
  .clicked {
    color: #edf756;
    transition: 1s ease;

  }
  & span {
    position: relative;
    display: block;
    font-size: large;
    cursor: pointer;
    :hover {
      letter-spacing: 0.3rem;
      transition: 1s ease;
      color: #edf756;
    }
  }

  & span:before,
  span:after {
    content: "";
    position: absolute;
    width: 0%;
    top: 0;
    height: 1px;
    margin-top: -0.5px;
    background: #fff;
  }

  & span:before {
    left: -2.5px;
  }
  & span:after {
    right: 2.5px;
    background: gold;
    transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  & span:hover:before {
    background: #edf756;
    width: 100%;
    transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  & span:hover:after {
    background: transparent;
    width: 100%;
  }

  & button {
    font-size: 20px;
    width: 100%;
    height: 35px;
    max-width: 150px;
    color: #fff;
    border: none;
    letter-spacing: 0.1rem;
    font-family: "Bebas Neue", cursive;
    background-color: transparent;
    transition: 0.7s ease;

    :hover {
      cursor: pointer;
      letter-spacing: 0.3rem;
      color: #edf756;
      transition: 0.7s ease;

      /* opacity: 0.5; */
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 1rem 2rem;
    .container {
      display: none;
    }
    & button {
      display: none;
    }

    .none {
      position: absolute;
    }
  }
`;

const MobileContainer = styled.div`
  display: none;
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: right;
    .hambergur {
      display: grid;
      gap: 0.2rem;
      width: 1.6rem;

      div {
        width: 1.3rem;
        height: 1px;
        border: 1px solid #fff;
        border-radius: 5px;

        &:nth-child(2) {
          width: 1rem;
          background: #fff;
        }
      }
    }
    .hambergurNone {
      display: none;
    }
    .toggleContainer {
      width: 100%;
      height: 102vh;
      display: flex;
      justify-content: center;
      letter-spacing: 0.1rem;
      font-family: "Mukta", sans-serif;
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(2, 2, 2, 1);
      z-index: 99;
      display: grid;
      ul {
        height: 100%;
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        text-align: center;
        justify-items: center;
        gap: 2rem;
        align-content: center;
        li {
          font-size: 22px;
          letter-spacing: 3px;
          font-weight: 900;
          height: fit-content;
        }
      }
    }
    .toggleNone {
      display: none;
    }
  }
`;
