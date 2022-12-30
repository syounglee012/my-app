import styled from "styled-components";
import { useRouter } from "next/router";

export default function Experiences() {
  const router = useRouter();

  return (
    <Container>
      <Title>
        <a>
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          WORK EXPERIENCES
        </a>
      </Title>
        <figure className="img_wrapper">
          <div className="img">
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
                    Implemented the company wibsite and landing pages from
                    concept through deployment.
                  </li>
                  <li>
                    Standardized all output with a new, reponsive, mobile-first
                    approach and strategy.
                  </li>
                  <li>Assessed UX and UI designs for technical feasibility.</li>
                  <li>
                    Collaborated with product team members to implement new
                    feature developments.
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

          <figcaption></figcaption>
          <ul className="social_media">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-pinterest"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </figure>
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
  width: 100%;
  .img {
        max-width: 100%;
      }

      .img_wrapper {
        width: fit-content;
        height: fit-content;
        position: relative;
        overflow: hidden;
        box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.3);
      }

      .img {
        position: relative;
        height: 100%;
      }

      figure:hover figcaption {
        transform: rotate(20deg) translateX(0);
      }

      figure:hover .social_media {
        transform: translateX(0);
      }

      figcaption {
        position: absolute;
        background: rgba(0, 0, 0, 0.7);
        top: 0px;
        left: 70%;
        width: 50%;
        height: 150%;
        transform: rotate(20deg) translateX(100%);
        transition: all 0.35s;
      }

      .social_media {
        position: absolute;
        bottom: 5%;
        right: 0;
        list-style: none;
        transform: translateX(100%);
        transition: all 0.35s;
      }

      .social_media li {
        border-bottom: 1px solid transparent;
        width: 45px;
        height: 45px;
        position: relative;
      }

      .social_media li:nth-child(1) a {
        background: #3b5998;
      }

      .social_media li:nth-child(2) a {
        background: #1da1f2;
      }

      .social_media li:nth-child(3) a {
        background: #dd4b39;
      }

      .social_media li:nth-child(4) a {
        background: #e1306c;
      }

      .social_media li:nth-child(5) a {
        background: #bd081c;
      }

      .social_media li:nth-child(6) a {
        background: #075e54;
      }

      .social_media a {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        right: 0;
        line-height: 45px;
        font-size: 20px;
        text-align: center;
        /* background: inherit; */
        color: #fff;
        transition: all 0.35s;
      }

      .social_media a:hover {
        width: 65px;
      }
  .container {
    display: flex;
    justify-content: center;
    width: fit-content;
    height: 100%;
  }
  .bottomWrap {
    padding-left: 30px;
    border-top: 1rem double #000;
  }
  @media screen and (max-width: 900px) {
    height: 100%;
    width: 100%;
    .container {
      
    }
    .bottomWrap {
      padding-left: 20px;
      }
      figcaption {
        top: 10%;
        left: 70%;
        width: 70%;
        height: 100%;
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
     

    @media screen and (max-width: 900px) {
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
  margin: 6rem 0 3rem;
  a {
    position: relative;
    padding: 10px 40px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 3px;
    font: 600 30px consolas;
    overflow: hidden;
    transition: 1s ease;
  }

  a span:nth-child(1) {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #171618, #faa0a0);
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
    background: linear-gradient(to bottom, #171618, #faa0a0);
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
    background: linear-gradient(to left, #171618, #faa0a0);
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
    background: linear-gradient(to top, #171618, #faa0a0);
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
    margin: 4rem 0 0;

    a {
      padding: 10px 20px;
      font: 400 22px consolas;
      margin: 0 0 2rem;
    }
  } ;
`;
