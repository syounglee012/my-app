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
          <img src="/images/styled.png" />
          <p>Styled components</p>
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
      </ul>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  letter-spacing: 1px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  /* padding: 5rem 2rem 5rem; */

  & img {
    width: 98px;
    height: 98px;
  }

  & ul {
    width: 800px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    padding: 0;
  }
  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    color: #f5f5f5;
    transition: transform 250ms;


    & p {
      text-align: center;
    }
    :hover {
      transform: translateY(-5px);
    }
  }

  @media screen and (max-width: 900px) {
    font-size: 10px;
    font-weight: 400;
    padding: 3rem 0;
    & ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 0;
      padding: 0.6rem;
    }
    & img {
      width: 32px;
      height: 32px;
    }
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  & h1 {
    font-size: 3rem;
    font-family: "Mukta", sans-serif;
    letter-spacing: 0.4rem;
    margin: 5rem 0 0;
  }
  @media screen and (max-width: 900px) {
    & h1 {
      font-size: xx-large;
    }
  } ;
`;