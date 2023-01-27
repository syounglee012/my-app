import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Modal from "./modal";

export default function Experiences() {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Container>
        <Title>
          <p id="test">EXPERIENCES</p>
          <div id="underline"></div>
        </Title>
        <figure className="img_wrapper">
          <div className="img">
            <div className="square">
              <div className="imageWrap">
                <img src="images/triump.jpeg" className="mask" />
              </div>
              <div className="bottomWrap">
                <h1 className="h1">Front End Developer</h1>
                <h4>TRIUMPH (Redmond, WA) - Contract via BlueRock Marketing</h4>
                <h4>September 2022 - Present (Remote)</h4>
                <h3>Key Qualifications & Responsibilities</h3>
                <ul>
                  <li>
                    Develop a reusable advanced search component built with
                    Algolia that allows customers to search for either
                    products/services or the locations that are associated.
                    Built to be extended to other search tools as requested.
                  </li>
                  <li>
                    Applying the dynamic and federated search used by more than
                    5000 employees and other consumers, significantly reduced
                    the number of required searches and costs allocated with
                    each query.
                  </li>
                  <li>
                    Using the Google API implemented a robust locations finder
                    of all 28 locations of Triumph in 8 different countries,
                    enabling users to scroll in the globe to locate, and see a
                    more detailed view associated with each different location.
                  </li>
                  <li>
                    Architectured back end data model for all of the data that
                    is consumed by the company website and features using
                    Strapi.
                  </li>
                  <li>Worked well independently and within a team setting.</li>
                  <li>
                    Collaborate with UX designers to implement more user
                    friendly UI and enable responsive design to support the web
                    app on all different platforms.
                  </li>
                </ul>
              </div>
              <div className="buttonDiv">
                <button
                  type="button"
                  onClick={() => window.open("files/resume.pdf")}
                >
                  RESUME
                </button>
              </div>
            </div>
          </div>

          <figcaption></figcaption>
          <ul className="social_media">
            <li>
              <a onClick={() => window.open("https://www.triumphgroup.com")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  class="bi bi-window"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                  <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z" />
                </svg>
              </a>
            </li>
            <li>
              <a onClick={() => window.open("https://github.com/syounglee012")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                onClick={() =>
                  window.open("https://www.linkedin.com/in/swe-samlee/")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </li>
            <li>
              <a onClick={() => setIsOpen(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  class="bi bi-envelope-at"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                </svg>
              </a>
            </li>
          </ul>
        </figure>
      </Container>
      <div className="none">
        <Modal open={isOpen} close={() => setIsOpen(false)} />
      </div>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Mukta", sans-serif;
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 100%;
  .img {
    max-width: 100%;
  }

  .none {
    position: absolute;
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
    left: 80%;
    width: 50%;
    height: 150%;
    transform: rotate(20deg) translateX(100%);
    transition: all 0.35s;
  }

  .social_media {
    position: absolute;
    bottom: 5%;
    right: 0%;
    list-style: none;
    transform: translateX(100%);
    transition: all 0.35s;
  }

  .social_media li {
    border-bottom: 1px solid transparent;
    width: 45px;
    height: 45px;
    position: relative;
    cursor: pointer;
  }
  .social_media li:nth-child(1) a {
    background: #fff;
  }
  .social_media li:nth-child(2) a {
    background: #171515;
  }

  .social_media li:nth-child(3) a {
    background: #0077b5;
  }

  .social_media li:nth-child(4) a {
    background: #dd4b39;
  }

  .social_media a {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    line-height: 45px;
    font-size: 20px;
    justify-content: center;
    align-items: center;
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
    padding-left: 40px;
    border-top: 1rem double #000;
  }

  .square {
    width: 700px;
    height: 750px;
    background: white;
    color: #000;
    border-radius: 20px;

    .h1 {
      text-align: left;
      font-family: "Merriweather", serif;
      color: #000;
      letter-spacing: 2px;
      margin: 1rem 0 0;
    }

    & h4 {
      font-size: 18px;
      margin: 0;
    }

    & h3 {
      margin: 1rem 0 0;
    }
  }

  .imageWrap {
    display: flex;
    background: url("images/building.jpeg") no-repeat center center/cover;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  .mask {
    clip: rect(0px, 460px, 220px, 0px);
    border-radius: 4px;
    object-fit: contain;
    width: 220px;
    height: 220px;
  }

  & ul {
    max-width: 630px;
    text-align: justify;
    padding: 0 50px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    color: #777;
    line-height: 1.2rem;
    margin: 0;
  }

  .buttonDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
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
    transition: 0.7s ease;
    cursor: pointer;
    :hover {
      color: aqua;
      background-color: black;
      border: 8px solid black;
      font-weight: 700;
    }
  }
  @media screen and (max-width: 650px) {
    height: 100%;
    width: 100%;
    .container {
    }
    .bottomWrap {
      padding-left: 20px;
    }
    figcaption {
      top: 10%;
      left: 80%;
      width: 60%;
      height: 110%;
    }
    .square {
      width: 350px;
      line-height: 1rem;
      height: fit-content;
      .h1 {
        font-size: large;
      }
      & h3 {
        font-size: medium;
      }
      & h4 {
        font-size: small;
        width: 350px;
      }
      & h5 {
        font-size: small;
      }
    }
    .imageWrap {
      width: 352px;
      height: 70px;
      & img {
        width: 150px;
      }
    }
    & ul {
      line-height: 1.1rem;
      text-align: left;
      padding: 0 20px;
      font-size: 10px;
    }
  }
  @media screen and (max-width: 1250px) and (min-width: 651px){
    height: 100%;
    width: 100%;
    .container {
    }
    .bottomWrap {
      padding-left: 20px;
    }
    figcaption {
      top: 10%;
      left: 80%;
      width: 60%;
      height: 110%;
    }
    .square {
      width: 500px;
      line-height: 1.5rem;
      height: fit-content;
      .h1 {
        font-size: 24px;
      }
      & h3 {
        font-size: 18px;
      }
      & h4 {
        font-size: 16px;
        width: 500px;
      }
      & h5 {
        font-size: small;
      }
    }
    .imageWrap {
      width: 100%;
      height: 120px;
      & img {
        width: 150px;
      }
    }
    & ul {
      line-height: 1.1rem;
      text-align: left;
      padding: 0 20px;
      font-size: 12px;
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
    margin: 4rem 0 0;
  }
  #underline {
    width: 290px;
    height: 8px;
    background-color: white;
    margin-bottom: 2rem;
  }


  @media screen and (max-width: 850px) {
    p {
      height: 30px;
      font-size: 30px;
      letter-spacing: -3px;
    }
    #underline {
      width: 170px;
      height: 4px;
      background-color: white;
      margin-bottom: 2rem;
    }
  }
  @media screen and (max-width: 1250px) and (min-width: 851px) {
    p {
      height: 39px;
      font-size: 40px;
      letter-spacing: -3px;
      margin: 5rem 0 0;
    }
    #underline {
      width: 233px;
      height: 4px;
      background-color: white;
      margin-bottom: 2rem;
    }
  }
`;
