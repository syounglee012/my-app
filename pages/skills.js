import styled from "styled-components";

export default function Skills() {
  return (
    <Container>
      <Title>
        <p id="test">SKILLS</p>
        <div id="underline"></div>
      </Title>
      <ul className="icons">
        <li>
        <img src="https://img.icons8.com/color/48/null/c-programming.png"/>
        <p>C</p>
        </li>
        <li>
        <img src="https://img.icons8.com/color/48/null/python--v1.png"/>
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
          <img src="https://img.icons8.com/external-bearicons-blue-bearicons/64/null/external-SQL-file-extension-bearicons-blue-bearicons.png"/>
          <p>SQL</p>
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
    width: 70px;
    height: 70px;
    transition: transform 250ms;
    /* object-fit: contain; */
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
  @media screen and (max-width: 1250px) and (min-width: 851px) {
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
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    height: 50px;
    font-family: "Segoe UI";
    font-weight: 500;
    font-size: 50px;
    color: aqua;
    letter-spacing: -4px;
    margin:4rem 0 0;
  }
  #underline {
    width: 145px;
    height: 8px;
    background-color: white;
  }

  @media screen and (max-width: 850px) {
    p {
      height: 30px;
      font-size: 30px;
      letter-spacing: -3px;
      margin: 7rem 0 0;
    }
    #underline {
      width: 85px;
      height: 4px;
      background-color: white;
      margin-bottom: 2rem;
    }
  }
  @media screen and (max-width: 1250px) and (min-width: 851px) {
    p {
      height: 38px;
      font-size: 40px;
      letter-spacing: -3px;
      margin: 3rem 0 0;
    }
    #underline {
      width: 115px;
      height: 4px;
      background-color: white;
      margin-bottom: 2rem;
    }
  }
`;
