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
          <li onClick={() => HandleSkillsScroll()}>
            <span>Skills</span>
          </li>
          <li onClick={() => HandleExperiencesScroll()}>
            <span>Experiences</span>
          </li>
          <li onClick={() => HandleProjectsScroll()}>
            <span>Projects</span>
          </li>
        </ul>
      </div>

      <button className="btn" onClick={() => router.push("/contact")}>
        Contact Me
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
    border: 3px solid white;
    text-decoration: none;
    margin: 0;
    color: #fff;
    letter-spacing: 5px;

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

    @media only screen and (max-width: 400px) {
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
    font-size: x-large;
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
    background: yellow;
    width: 100%;
    transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  & span:hover:after {
    background: transparent;
    width: 100%;
    transition: 0s;
  }

  & button {
    font-size: 22px;
    width: 100%;
    height: 35px;
    max-width: 120px;
    color: black;
    background-color: yellow;
    border: none;
    outline: thick double yellow;
    outline-offset: 0.4rem;
    letter-spacing: 0.1rem;
    /* transition: opacity 1s ease-in; */
    font-family: "Bebas Neue", cursive;
    :hover {
      cursor: pointer;
      /* opacity: 0.5; */
      animation: shake-btn 0.1s infinite alternate;
    }
    @keyframes shake-btn {
      0% {
        transform: translate(0px, -4px);
      }
      33% {
        transform: translate(-2px, -4px);
      }
      66% {
        transform: translate(-2px, -6px);
      }
      100% {
        transform: translate(0px, -6px);
      }
    }
  }


  @media screen and (max-width: 900px) {
    & ul {
      display: none;
    }
    & button {
      display: none;
    }
    }
`;
