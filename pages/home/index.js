import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Header from "../header";
import Nav from "../nav";
import Main from "../main";
import Footer from "../footer";
import Skills from "../skills";
import Experiences from "../experiences";
import Projects from "../projects";

export default function Home() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);

  const HandleHomeScroll = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" }, 1000);
  };

  const HandleSkillsScroll = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" }, 1000);
  };
  const HandleExperiencesScroll = () => {
    experiencesRef.current.scrollIntoView({ behavior: "smooth" }, 1000);
  };
  const HandleProjectsScroll = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" }, 1000);
  };

  useEffect(() => {
    homeRef.current.scrollIntoView({ behavior: "smooth" }, 1000);
  }, []);

  
  return (
    <BlackContainer ref={homeRef}>
      <Header />
      <Nav
      HandleHomeScroll={HandleHomeScroll}
        HandleSkillsScroll={HandleSkillsScroll}
        HandleExperiencesScroll={HandleExperiencesScroll}
        HandleProjectsScroll={HandleProjectsScroll}
      />
      <Container>
        <main>
          <div className="container">
            <div className="item">
              <img src="images/profile1.png" alt="profile picture" />
            </div>
          </div>
          <Main />
        </main>
        <div ref={skillsRef} />
      </Container>
      <Skills />
      <div ref={experiencesRef} />
      <Experiences />
      <div ref={projectsRef} />
      <Projects />
      <Footer />
    </BlackContainer>
  );
}

const BlackContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url("images/background7.jpeg") no-repeat center center/cover;
  @media screen and (max-width: 900px) {
    background: url("images/background7.jpeg") no-repeat center center/cover;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 969px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.2rem;
  animation: txtFlyIn 1s linear;

  & main {
    width: 100%;
    max-width: 1360px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .container {
      width: 100%;
      margin-top: 8rem;
      animation: fadeIn 2s linear;
    }
    .item {
      align-items: center;
      display: flex;
      height: 600px;
      justify-content: center;
      position: relative;
      width: 600px;
      z-index: 10;
      img {
        object-fit: cover;
      }
      &::before,
      &::after {
        content: "";
        height: 100%;
        position: absolute;
        transition: all 0.2s;
        transition-delay: 0.2s;
        transform: translateY(0px) translateX(0px);
        width: 100%;
        z-index: -1;
      }
      &::after {
        background-image: linear-gradient(0deg, #e5eaf5 20%, #edf756 100%);
        border-radius: 50%;
        animation: slick-hover 3s 1s linear infinite reverse;
          transform: translateY(20px) translateX(20px);
      }
      &::before {
        background-image: linear-gradient(
          0deg,
          #edf7f6 40%,
          #9df9ef 90%,
          #51e2f5 100%
          
        );
        animation: slick-hover-2 3s 1s linear infinite;
          transform: translateY(-20px) translateX(-20px);
        border-radius: 50%;
      }
      &:hover {
        animation-name: hoverPop;
        animation-duration: 0.4s;
        animation-fill-direction: forward;
/* 
        &::before {
          animation: slick-hover-2 3s 0.4s linear infinite;
          transform: translateY(-20px) translateX(-20px);
        }
        &::after {
          animation: slick-hover 3s 0.4s linear infinite reverse;
          transform: translateY(20px) translateX(20px);
        } */
      }
      @media screen and (max-width: 900px) {
      }
    }

    @keyframes hoverPop {
      0%,
      100% {
        transform: scale(1);
      }
      33% {
        transform: scale(1.05);
      }
      66% {
        transform: scale(0.9);
      }
    }

    @keyframes slick-hover {
      0.00% {
        transform: translateY(20px) translateX(20px);
      }
      16.67% {
        transform: translateY(-13px) translateX(-9px);
      }
      33.33% {
        transform: translateY(4px) translateX(12px);
      }
      50.00% {
        transform: translateY(20px) translateX(-20px);
      }
      66.67% {
        transform: translateY(-3px) translateX(8px);
      }
      83.33% {
        transform: translateY(-15px) translateX(-11px);
      }
      100.00% {
        transform: translateY(20px) translateX(20px);
      }
    }

    @keyframes slick-hover-2 {
      0.00% {
        transform: translateY(-20px) translateX(-20px);
      }
      16.67% {
        transform: translateY(3px) translateX(-5px);
      }
      33.33% {
        transform: translateY(18px) translateX(-10px);
      }
      50.00% {
        transform: translateY(-20px) translateX(20px);
      }
      66.67% {
        transform: translateY(15px) translateX(-4px);
      }
      83.33% {
        transform: translateY(-1px) translateX(15px);
      }
      100.00% {
        transform: translateY(-20px) translateX(-20px);
      }
    }
    @media screen and (max-width: 900px) {
      display: grid;
      .container {
        margin-top: 12rem;
        margin-bottom: 2rem;
      }
      .item {
        height: 250px;
        width: 250px;
      }
    }
  }
  & img {
    width: 100%;
    height: 100%;
    max-width: 520px;
    max-height: 669px;
    margin-top: 4em;
  }
  @media screen and (max-width: 900px) {
    display: grid;
    height: 100%;
  }

  @keyframes txtFlyIn {
    0% {
      transform: translateY(15%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;
