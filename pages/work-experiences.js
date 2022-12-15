import styled from "styled-components";
import { useRouter } from "next/router";

export default function Experiences() {
  const router = useRouter();

  return (
    <Container>
      <Title>
        <h1>EXPERIENCES</h1>
      </Title>
      <Wrap>
        <div className="timeline">
          <ul>
            <li>
              <h1>Front End Developer</h1>
              <div className="content">
                <div className="wrap">
                  <h4>Triumph Group</h4>&ensp;
                  <h5>(Contract via BlueRock Marketing)</h5>
                </div>
                <p>Sep 2022 - Present</p>
              </div>
            </li>
            <li>
              <h1>Coding Bootcamp Participant</h1>
              <div className="content">
                <div className="wrap">
                  <h4>HangHae99</h4>&ensp;
                  <h5>(Software Development Coding Bootcamp)</h5>
                </div>
                <p>Mar 2022 - Jun 2022</p>
              </div>
            </li>
            <li>
              <div className="content">
                <div className="wrap">
                  <button onClick={()=> router.push('')}>Check Out My Resume</button>
                </div>
              </div>
            </li>
         
          </ul>
        </div>
      </Wrap>
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
  .timeline {
    width: 600px;
    color: #fff;
  }
  .timeline ul {
    list-style-type: none;
    border-left: 1px solid #fff;
    padding: 150px 5px 50px;
    display: grid;
    gap: 4rem;

    & button{
      background: transparent;
      border: none;
      margin: .8rem 0 0;
      padding: 0;
      font-size: 20px;
      cursor: pointer;
      :hover{
        color: gold;
      }
    }
  }
  .timeline ul li {
    padding: 10px 20px;
    position: relative;
    transition: 0.5s;
  }
  .wrap {
    display: flex;
    & h4 {
      font-size: 24px;
      margin: 0;
    }
    & h5 {
      font-size: 20px;
      margin: 5px 0 0;
    }
  }
  .timeline ul li h1 {
    display: inline-block;
    padding: 1px 0;
    font-size: 28px;
    text-align: center;
    color: gold;
    margin: 0;
  }
  .timeline ul li .content p {
    color: #fff;
    font-size: 18px;
    margin: 0;
  }

  .timeline ul li:before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    left: -11px;
    top: 28px;
    transition: 0.5s;
  }
  .timeline ul li:hover {
    /* color: black; */
  }
  .timeline ul li:hover:before {
    background-color: gold;
    box-shadow: 0px 0px 10px 2px orange;
  }
  @media (max-width: 300px) {
    .timeline {
      width: 100%;
      padding: 30px 5px 30px 10px;
    }
    .timeline ul li .content h3 {
      color: #34ace0;
      font-size: 15px;
    }
  }
`;

const Wrap = styled.div`
  display: flex;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  & h1 {
    font-size: 3rem;
    font-family: "Mukta", sans-serif;
    letter-spacing: 0.4rem;
  }
  @media screen and (max-width: 900px) {
    & h1 {
      font-size: xx-large;
    }
  } ;
`;
