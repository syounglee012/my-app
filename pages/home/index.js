import React, { useRef } from "react";
import styled from "styled-components";
import Header from "../header";
import Nav from "../nav";
import Main from "../main";
import Footer from "../footer";
import Skills from "../skills";
import Experiences from "../experiences";
import Projects from "../projects";
import Background from "../background";

export default function Home() {
  const skillsRef = useRef(null);
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);

  const HandleSkillsScroll = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" }, 1000);
  };
  const HandleExperiencesScroll = () => {
    experiencesRef.current.scrollIntoView({ behavior: "smooth" },1000);
  };
  const HandleProjectsScroll = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" },1000);
  };
  return (
    <BlackContainer>
      <Header />
        <Nav
          HandleSkillsScroll={HandleSkillsScroll}
          HandleExperiencesScroll={HandleExperiencesScroll}
          HandleProjectsScroll={HandleProjectsScroll}
        />
      <Container>
        <main>
          <div class="container">
            <div class="item">
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
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 969px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.2rem;
  background: url("images/background2.jpeg") no-repeat center center/cover;
  /* position: absolute; */
  & main {
    width: 100%;
    max-width: 1160px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .container {
      width: 100%;
      margin-top: 10rem;
      
    }
    .item {
      align-items: center;
      display: flex;
      height: 400px;
      justify-content: center;
      position: relative;
      width: 400px;
      z-index: 1000;
      img {
        object-fit: cover;
      }
      &::before,
      &::after {
        background-image: linear-gradient(-180deg, #a1deff 0%, #5ea3db 97%);
        border-radius: 50%;
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
        background-image: linear-gradient(0deg, #ffcf70 0%, #ffae3d 97%);
        border-radius: 50%;
      }
      &:hover {
        animation-name: hoverPop;
        animation-duration: 0.4s;
        animation-fill-direction: forward;
        &::before {
          animation: slick-hover-2 3s 0.4s linear infinite;
          transform: translateY(-20px) translateX(-20px);
        }
        &::after {
          animation: slick-hover 3s 0.4s linear infinite reverse;
          transform: translateY(20px) translateX(20px);
        }
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
  }
  & img {
    width: 100%;
    height: 100%;
    max-width: 520px;
    max-height: 669px;
    margin-top: 4em;
  }

  @media screen and (max-width: 900px) {
  
  }
`;
