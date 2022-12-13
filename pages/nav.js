import styled from "styled-components";
import { useRouter } from "next/router";

export default function Nav({
  HandleSkillsScroll,
  HandleExperiencesScroll,
  HandleProjectsScroll,
}) {
  const router = useRouter();
  return (
    <HeaderContainer>
      <h1
        className="glitch"
        data-glitch="Young Lee"
        onClick={() => router.push("/home")}
      >
        Young Lee
      </h1>
      <div className="container">
        <ul>
          <li onClick={() => router.push("/home")}>
            <span>HOME</span>
          </li>
          <li onClick={() => HandleSkillsScroll()}>
            <span>SKILLS</span>
          </li>
          <li onClick={() => HandleExperiencesScroll()}>
            <span>EXPERIENCES</span>
          </li>
          <li onClick={() => HandleProjectsScroll()}>
            <span>PROJECTS</span>
          </li>
        </ul>
      </div>

      <button className="btn" onClick={() => router.push("/contact")}>
        Contact
      </button>
    </HeaderContainer>
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
  z-index: 99999999;
  float: left;
  
  & h1 {
    font-size: x-large;
    font-family: "Bebas Neue", cursive;
    color: white;
    padding: 0.5rem;
    border: 2px solid white;
    text-decoration: none;
    margin: 0;
    color: #fff;
    letter-spacing: 2px;

    &:before,
    &:after {
      position: absolute;
      top: 31.5%;
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

    @media only screen and (max-width: 900px) {
      font-size: 0.8rem;
      letter-spacing: 1px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 80px;
      &:before,
      &:after {
        position: absolute;
        top: 37%;
        display: block;
        content: attr(data-glitch);
        opacity: 0.8;
      }
      .glitch {
        font-size: 3em;
      }
    }
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
    display: table-cell;
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

  & span {
    position: relative;
    display: block;
    font-size: x-large;
    cursor: pointer;
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
    transition: 0s;
  }

  & button {
    font-size: 24px;
    width: 100%;
    height: 35px;
    max-width: 120px;
    color: #fff;
    border: none;
    letter-spacing: 0.1rem;
    font-family: "Bebas Neue", cursive;
    background-color: transparent;
    :hover {
      cursor: pointer;
      letter-spacing: 0.2rem;

      /* opacity: 0.5; */
    }
  }

  @media screen and (max-width: 900px) {
    padding: 1rem;
    & ul {
      font-size: 12px;
      justify-content: space-evenly;
    }
    & li {
      padding: 0;
    }

    & button {
      font-size: 12px;
      height: 20px;
      max-width: 74px;
      outline: none;
      color: yellow;
      background-color: transparent;
      outline-offset: 0.2rem;
      letter-spacing: 0.1rem;
    }
  }
`;
