import styled from "styled-components";

export default function Skills() {
  return (
    <Container>
      <Title>
        <h1>SKILLS</h1>
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
  & h1 {
    font-size: 2.5rem;
    font-family: "Mukta", sans-serif;
    letter-spacing: 0.3rem;
    margin: 4rem 0 0;
    transition: 1s ease;
    :hover {
      letter-spacing: 0.6rem;
      color: #edf756;
    }
  }
  @media screen and (max-width: 900px) {
    margin-top: 4rem;

    & h1 {
      font-size: x-large;
    }
  } ;
`;
