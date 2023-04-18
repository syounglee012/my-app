import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";

export default function Skills() {
  const [active, setActive] = useState(false);
  const activeRef = useRef(null);

  return (
    <Container>
      <div className={active ? "active" : "transition"} ref={activeRef}>
        <Title>
          <p id="test">SKILLS</p>
        </Title>
        <ul className="icons">
          <li>
            <img src="https://img.icons8.com/color/48/null/c-programming.png" />
            <p>C</p>
          </li>
          <li>
            <img src="https://img.icons8.com/color/48/null/python--v1.png" />
            <p>Python</p>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/null/javascript--v1.png" />
            <p>JavaScript</p>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/null/html-5--v1.png" />
            <p>HTML</p>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/null/css3.png" />
            <p>CSS</p>
          </li>
          <li>
            <img src="https://img.icons8.com/external-bearicons-blue-bearicons/64/null/external-SQL-file-extension-bearicons-blue-bearicons.png" />
            <p>SQL</p>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/null/react-native.png" />
            <p>React.js</p>
          </li>

          <li>
            <img src="/images/nextjs.png" className="nextLogo" />
            <p>Next.js</p>
          </li>
          <li>
            <img src="/images/node.png" />
            <p>Node.js</p>
          </li>
          <li>
            <img src="/images/axios.png" />
            <p>Axios</p>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/null/redux.png" />
            <p>Redux</p>
          </li>

          <li>
            <img src="/images/jest.svg" />
            <p>Jest</p>
          </li>
          <li>
            <img src="/images/testing.png" />
            <p>Testing Library</p>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/null/webpack.png" />
            <p>Webpack</p>
          </li>
          <li>
            <img src="/images/babel.svg" />
            <p>Babel</p>
          </li>
          <li>
            <img src="/images/jquery.png" />
            <p>jQuery</p>
          </li>

          <li>
            <img src="/images/styled.png" />
            <p>Styled components</p>
          </li>
          <li>
            <img src="/images/mongodb.png" />
            <p>MongoDB</p>
          </li>
          <li>
            <img src="/images/strapi.svg" />
            <p>Strapi</p>
          </li>
          <li>
            <img src="/images/algolia.svg" />
            <p>Algolia</p>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/null/bootstrap.png" />
            <p>Bootstrap</p>
          </li>
          <li>
            <img src="https://img.icons8.com/color/96/null/figma--v1.png" />
            <p>Figma</p>
          </li>
          <li>
            <img src="/images/adobeXD.png" />
            <p>Adobe XD</p>
          </li>
          <li>
            <img src="/images/github.png" />
            <p>GitHub</p>
          </li>
        </ul>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  color: white;
  letter-spacing: 1px;
  font-weight: 600;
  align-items: center;
  justify-content: center;

  /* .transition {
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: transform 4s ease-in;
  }

  .active {
    opacity: 1;
    animation: fadeIn 3s linear;
    animation: left-to-right 2s ease-in;
  } */
  & img {
    width: 60px;
    height: 60px;
    transition: transform 250ms;
    :hover {
      transform: translateY(-5px);
    }
  }

  & ul {
    width: 1000px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 3rem;
    padding: 0;
    margin: 0;
  }
  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    color: #f5f5f5;
    background-color: transparent;
    border-radius: 100%;
    animation: float 5s ease-in-out infinite;

    & p {
      text-align: center;
    }

    .nextLogo {
      color: white;
    }
  }
  @keyframes left-to-right {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes float {
    0% {
      transform: translatey(5px);
    }
    50% {
      transform: translatey(-25px);
    }
    100% {
      transform: translatey(5px);
    }
  }
  @media screen and (max-width: 900px) {
    @keyframes float {
      0% {
        transform: translatey(5px);
      }
      50% {
        transform: translatey(-10px);
      }
      100% {
        transform: translatey(5px);
      }
    }
  }

  @media screen and (max-width: 850px) {
    height: 100%;
    font-size: 12px;
    font-weight: 400;
    padding: 0;
    gap: 1rem;

    & ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 0;
      padding: 0.6rem;
      width: auto;
    }
    & img {
      width: 40px;
      height: 40px;
    }
  }
  @media screen and (max-width: 1350px) and (min-width: 851px) {
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    padding: 0;
    gap: 1rem;

    & ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 0;
      padding: 0.6rem;
      width: auto;
    }
    & img {
      width: 60px;
      height: 60px;
    }
  }
`;

const Title = styled.div`
  margin: 0 auto;
  padding: 0;
  display: block;
  margin-bottom: 4rem;
  width: fit-content;
  border-bottom: 8px solid white;
  p {
    height: 50px;
    font-family: "Segoe UI";
    font-weight: 500;
    font-size: 50px;
    color: aqua;
    letter-spacing: -4px;
    margin: 0;
  }

  @media screen and (max-width: 850px) {
    p {
      height: 30px;
      font-size: 30px;
      letter-spacing: -3px;
      margin: 7rem 0 0;
    }
  }
  @media screen and (max-width: 1350px) and (min-width: 851px) {
    p {
      height: 38px;
      font-size: 40px;
      letter-spacing: -3px;
      margin: 3rem 0 0;
    }
  }
`;
