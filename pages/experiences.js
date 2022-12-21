import styled from "styled-components";
import { useRouter } from "next/router";

export default function Experiences() {
  const router = useRouter();

  return (
    <Container>
      <Title>
        <h1>&lsaquo; WORK EXPERIENCES &rsaquo;</h1>
      </Title>
      <div className="container">
        <div className="square">
          <div className="imageWrap">
            <img src="images/triump.jpeg" className="mask" />
          </div>
          <div className="bottomWrap">
            <h1 className="h1">Front-End Developer</h1>
            <h2>Sep 2022 - Present</h2>
            <h4>Triumph Group (Seattle, WA) - Contract via BlueRock</h4>
            <ul>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>

            <button>RESUME</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Mukta", sans-serif;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  width: 100%;

  .container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .bottomWrap {
    padding-left: 30px;
    border-top: 1rem double #000;
  }
  @media screen and (max-width: 900px) {
    height: 100%;
    .bottomWrap {
      padding-left: 20px;
    }
  }

  .square {
    width: 700px;
    height: 730px;
    background: white;
    color: #000;
    border-radius: 20px;

    .h1 {
      text-align: left;
      font-family: "Merriweather", serif;
      color: #000;
      margin: 1rem 0 0;
      letter-spacing: 2px;
    }
    & h2 {
      margin: 0;
      letter-spacing: 1px;
    }

    & h4 {
      font-size: 18px;
      margin: 0;
    }
   
    @media screen and (max-width: 400px) {
      width: 350px;
      height: 600px;
      .h1 {
        font-size: x-large;
      }
      & h2 {
        font-size: medium;
      }
      & h4 {
        font-size: medium;
      }
      & h5 {
        font-size: 14px;
      }
    }
  }
  .imageWrap {
    display: flex;
    background: url("images/building.jpeg") no-repeat center center/cover;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    @media screen and (max-width: 400px) {
      width: 350px;
      height: 150px;
    }
  }
  .mask {
    clip: rect(0px, 460px, 220px, 0px);
    border-radius: 4px;
    object-fit: contain;
    width: 220px;
    height: 250px;
  }

  & ul {
    text-align: justify;
    padding-right: 30px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    color: #777;
    line-height: 18px;
  }

  & button {
    background-color: #3edd84;
    color: white;
    width: 100px;
    height: 40px;
    border-radius: 3px;
    border: none;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 2px;
    cursor: pointer;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  & h1 {
    font-size: 2.5rem;
    font-family: "Mukta", sans-serif;
    letter-spacing: 0.3rem;
    transition: 1s ease;
    :hover {
      letter-spacing: 0.6rem;
      color: #edf756;
    }
  }
  @media screen and (max-width: 900px) {
    margin-top: 1rem;
    & h1 {
      font-size: x-large;
    }
  } ;
`;
