import styled from "styled-components";

export default function Skills() {
  return (
      <Container>
          <ul>
            <li>
              <img src="https://img.icons8.com/color/96/null/javascript--v1.png" />
              <p>JavaScript</p>
            </li>
            <li>
              <img src="https://img.icons8.com/color/96/null/css3.png" />
              <p>CSS</p>
            </li>
            <li>
              <img src="https://img.icons8.com/color/96/null/html-5--v1.png" />
              <p>HTML</p>
            </li>

            <li>
              <img src="https://img.icons8.com/color/96/null/react-native.png" />
              <p>React.js</p>
            </li>

            <li>
              <img
                src="/images/next.svg"
                style={{ width: "98px", height: "98px" }}
              />
              <p>Next.js</p>
            </li>

            <li>
              <img src="https://img.icons8.com/color/96/null/redux.png" />
              <p>Redux</p>
            </li>

            <li>
              <img
                src="/images/strapi.svg"
                style={{ width: "98px", height: "98px" }}
              />
              <p>Strapi</p>
            </li>

            <li>
              <img
                src="/images/jest.svg"
                style={{ width: "98px", height: "98px" }}
              />
              <p>Jest</p>
            </li>
            <li>
              <img
                src="/images/testing.png"
                style={{ width: "98px", height: "98px" }}
              />
              <p>Testing Library</p>
            </li>
            <li>
              <img src="https://img.icons8.com/color/96/null/webpack.png" />
              <p>Webpack</p>
            </li>
            <li>
              <img
                src="/images/babel.svg"
                style={{ width: "98px", height: "98px" }}
              />
              <p>Babel</p>
            </li>

            <li>
              <img
                src="/images/styled.png"
                style={{ width: "98px", height: "98px" }}
              />
              <p>Styled components</p>
            </li>
            <li>
              <img
                src="/images/algolia.svg"
                style={{ width: "98px", height: "98px" }}
              />
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
              <img
                src="/images/adobeXD.png"
                style={{ width: "98px", height: "98px" }}
              />
              <p>Adobe XD</p>
            </li>
          </ul>
      </Container>
  );
}


const Container = styled.div`
  display: flex;
    width: 100%;
    height: 400px;
    background-color: black;
    color: white;
    letter-spacing: 1px;
    font-weight: 600;
  & ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr) ;
    gap: 4rem;
    padding: 0;
    align-items: center;
  }
  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 1300px) {
    & ul {
    display: grid;
    grid-template-columns: 1fr 1fr ;
    gap: 2rem;
    padding: 0 1rem;

  }
  }
`;
