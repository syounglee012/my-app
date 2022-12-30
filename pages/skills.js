import styled from "styled-components";

export default function Skills() {
  return (
    <Container>
      <Title>
        <a>
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          Skills
        </a>
      </Title>
      <ul className="icons">
        <li>
          <img src="https://img.icons8.com/color/96/null/html-5--v1.png" />
          <p>HTML</p>
        </li>
        <li>
          <img src="https://img.icons8.com/color/96/null/css3.png" />
          <p>CSS</p>
        </li>

        <li>
          <img src="https://img.icons8.com/color/96/null/javascript--v1.png" />
          <p>JavaScript</p>
        </li>
        <li>
          <img src="https://img.icons8.com/color/96/null/react-native.png" />
          <p>React.js</p>
        </li>

        <li>
          <img src="/images/next.svg" />
          <p>Next.js</p>
        </li>
        <li>
          <img src="/images/node.png" />
          <p>Node.js</p>
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
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  /* background-color: black; */
  color: white;
  letter-spacing: 1px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  /* padding: 5rem 2rem 5rem; */

  & img {
    width: 86px;
    height: 86px;
    transition: transform 250ms;
    /* object-fit: contain; */
    :hover {
      transform: translateY(-5px);
    }
  }

  & ul {
    width: 1000px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 3.5rem;
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
  }

  @media screen and (max-width: 900px) {
    height: 100%;
    font-size: 10px;
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
      width: 32px;
      height: 32px;
    }
  }

  @keyframes float {
    0% {
      /* box-shadow: -10px 5px 10px 0px rgba(22, 43, 88, 0.8); */
      transform: translatey(5px);
    }
    50% {
      /* box-shadow: 10px 10px 20px 0px rgba(81, 124, 146, 0.8); */
      transform: translatey(-25px);
    }
    100% {
      /* box-shadow: -10px 5px 10px 0px rgba(22, 43, 88, 0.8); */
      transform: translatey(5px);
    }
  }
  @media screen and (max-width: 900px) {
    @keyframes float {
      0% {
        /* box-shadow: -10px 5px 10px 0px rgba(22, 43, 88, 0.8); */
        transform: translatey(5px);
      }
      50% {
        /* box-shadow: 10px 10px 20px 0px rgba(81, 124, 146, 0.8); */
        transform: translatey(-10px);
      }
      100% {
        /* box-shadow: -10px 5px 10px 0px rgba(22, 43, 88, 0.8); */
        transform: translatey(5px);
      }
    }
  } ;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  a {
    position: relative;
    padding: 10px 40px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 3px;
    font: 700 30px consolas;
    overflow: hidden;
    transition: 1s ease;
    margin-top: 4rem;
  }

  a span:nth-child(1) {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #171618,#DAF7A6);
    animation: animate1 3s linear infinite;
  }

  @keyframes animate1 {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  a span:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(to bottom, #171618,#DAF7A6);
    animation: animate2 3s linear infinite;
    animation-delay: 1.5s;
  }
  @keyframes animate2 {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  a span:nth-child(3) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to left, #171618, #DAF7A6);
    animation: animate3 3s linear infinite;
  }

  @keyframes animate3 {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  a span:nth-child(4) {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(to top, #171618,#DAF7A6);
    animation: animate4 3s linear infinite;
    animation-delay: 1.5s;
  }

  @keyframes animate4 {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  @media screen and (max-width: 900px) {
    margin-top: 4rem;
    a {
    padding: 10px 20px;
    font: 400 22px consolas;
  }
  } ;
`;
