import styled from "styled-components";
import { useRouter } from "next/router";

export default function Experiences() {
  const router = useRouter();

  return (
    <Container>
      <Title>
        <h1>WORK EXPERIENCES</h1>
      </Title>
      <div className="container">
        <div className="square">
          <div className="imageWrap">
            <img src="images/triump.jpeg" className="mask" />
          </div>
          <div className="bottomWrap">
            <h1 className="h1">Front End Developer</h1>
            <h2>Sep 2022 - Present (Remote)</h2>
            <h4>
              Triumph Group (Seattle, WA) - Contract via BlueRock Marketing
            </h4>
            <h3>Key Qualifications & Responsibilities</h3>
            <ul>
              <li>
                Implemented the company wibsite and landing pages from concept
                through deployment.
              </li>
              <li>
                Standardized all output with a new, reponsive, mobile-first
                approach and strategy.
              </li>
              <li>Assessed UX and UI designs for technical feasibility.</li>
              <li>
                Collaborated with product team members to implement new feature
                developments.
              </li>
              <li>Worked well independently and within a team setting.</li>
              <li>
                Coordinate with the web development team to design user
                interfaces for client websites using HTML, JavaScript, and
                Next.js
              </li>
            </ul>
          </div>
            <div className="buttonDiv">
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
      margin: 1.5rem 0 0;
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

    & h3 {
      margin: 1rem 0 0;
    }


    @media screen and (max-width: 400px) {
      width: 350px;
      height: fit-content;
      .h1 {
        font-size: x-large;
      }
      & h2 {
        font-size: medium;
      }
      & h4 {
        font-size: medium;
        width: 280px;
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
    padding: 0 30px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    color: #777;
    line-height: 1.6rem;
    margin: 0;
    @media screen and (max-width: 400px) {
      line-height: 1.2rem;
      text-align: left;
      padding: 0 20px;

    }
  }

  .buttonDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
  }
  & button {
    background-color: white;
    color: black;
    width: 100px;
    height: 40px;
    border-radius: 3px;
    border: 2px solid black;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 2px;
    transition: 0.7s ease;
    cursor: pointer;
    :hover {
      color: white;
      background-color: #000;
    }
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 1rem;
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
