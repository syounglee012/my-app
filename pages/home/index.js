import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Young Lee</title>
        <meta name="author" content="Young Lee" />
        <link rel="icon" href="images/profile copy.png" type="image/gif" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz@6..96&family=DM+Serif+Display&family=DM+Serif+Text&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container>
        <HeaderContainer>
          <h1>Young Lee</h1>
          <button>Contact Me</button>
        </HeaderContainer>

        <main>
          <img src="images/profile.jpeg" alt="profile picture" />

          <div>
            <h1>
              Hello! <br />
              I&apos;m Young Lee
            </h1>
            <p>Front-End Developer</p>
            <p>based in Seattle</p>
          </div>
        </main>
      </Container>
      <FooterContainer>
        <footer>Created by Young Lee</footer>
      </FooterContainer>
    </>
  );
}
const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  letter-spacing: 0.1rem;
  font-family: "Bodoni Moda", serif;
  /* color: black; */

  & button {
    font-size: 18px;
    width: 100%;
    height: 50px;
    max-width: 150px;
    color: black;
    background-color: yellow;
    border: none;
    outline: none;
    letter-spacing: 0.1rem;
    font-family: "Bodoni Moda", serif;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Bodoni Moda", serif;

  & img {
    color: white;
    width: 480px;
    height: 569px;
    border-radius: 50%;
    /* border: 5px solid white; */
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: xx-large;
    & p {
      font-size: x-large;
    }
  }

  & main {
    width: 100%;
    max-width: 1060px;
    display: flex;
    /* justify-content: space-between; */
    margin-top: 3rem;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  bottom: 0;
  font-family: "Bodoni Moda", serif;
`;
