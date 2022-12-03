import styled from "styled-components";
import Header from "../header";
import Nav from "../nav";
import Footer from "../footer";
import Skills from '../skills';

export default function Home() {
  return (
    <BlackContainer>
      <Header />
      <Container>
        <Nav />

        <main>
          <img src="images/profile1.png" alt="profile picture" />

          <div>
            <h1>
              Hello! <br />
              I&apos;m Young Lee
            </h1>
            <p>
              Front-End Developer
              <br /> based in Seattle
            </p>
          </div>
        </main>
      </Container>
        <Skills />
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
  height: 944px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Bodoni Moda", serif;
  background: url("images/background2.jpeg") no-repeat center center/cover;
  /* position: absolute; */
  & main {
    width: 100%;
    max-width: 1260px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
  }
  & img {
    color: white;
    width: 100%;
    height: 100%;
    max-width: 620px;
    max-height: 769px;
    border-radius: 50%;
  }

  & div {
    display: flex;
    flex-direction: column;
    font-size: 2.5rem;
    margin-top: 5rem;
    & p {
      font-size: x-large;
    }
  }

  @media screen and (max-width: 900px) {
    & main {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    & img {
      color: white;
      width: 100%;
      height: 100%;
      max-width: 320px;
      max-height: 469px;
      border-radius: 50%;
      /* border: 5px solid white; */
    }

    & div {
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      & p {
        font-size: large;
      }
    }
  }
`;
