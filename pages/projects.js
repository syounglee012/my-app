import styled from "styled-components";

export default function Projects() {
  return (
    <Container>
      <Title>
        <p id="test">PROJECTS</p>
        <div id="underline"></div>
      </Title>
      <section id="timeline">
        <div className="tl-item">
          <div className="tl-bg" id="sc"></div>

          <div className="tl-year">
            <p className="f2 heading--sanSerif">Soldier Challengers</p>
          </div>

          <div className="tl-content">
            <h1 className="f3 text--accent ttu">
              Helps veterans who want to accomplish a set-goal after being
              discharged from the military
            </h1>
            <ul>
              <li>
                Worked with professional designers using an agile methodology
                and process
              </li>
              <li>
                Built a production-ready web application to help veterans to
                accomplish a set goal in life
              </li>
              <li>
                Worked in many roles such as PM, Front-End dev, and Quality
                Engineer
              </li>
              <li>Came up with requirements and helped to define MVP</li>
              <li>
                Implemented a chatting module using Socket.io to enable a
                real-time communication between users
              </li>
              <li>Built a robust social login feature to reduce friction</li>
            </ul>

            <div id="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="white"
                class="bi bi-file-earmark-play"
                viewBox="0 0 16 16"
                onClick={() => window.open("https://youtu.be/t1LJ9YDRG0s")}
              >
                <path d="M6 6.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 6.454a.5.5 0 0 0-.757.43z" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="white"
                class="bi bi-github"
                viewBox="0 0 16 16"
                onClick={() =>
                  window.open(
                    "https://github.com/syounglee012/Soldier-Challengers"
                  )
                }
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="tl-item">
          <div className="tl-bg" id="lgb"></div>

          <div className="tl-year">
            <p className="f2 heading--sanSerif">Looking-Good Blog</p>
          </div>

          <div className="tl-content">
            <h1 className="f3 text--accent ttu">
              Provides an easy-to-use interface for users to freely share their
              lives and interact with one another
            </h1>
            <ul>
              <li>
                Facilitated and led overall CSS effort as a lead front-end dev
              </li>
              <li>
                Implemented an easy-to-use comment feature to drive usage where
                users can freely communicate with each other
              </li>
              <li>
                Used CSS Masonry layout to dynamically populate randomly curated
                photos with different dimensions
              </li>
            </ul>

            <div id="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="white"
                class="bi bi-file-earmark-play"
                viewBox="0 0 16 16"
                onClick={() =>
                  window.open("https://www.youtube.com/watch?v=_XbL2yDDNwc")
                }
              >
                <path d="M6 6.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 6.454a.5.5 0 0 0-.757.43z" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="white"
                class="bi bi-github"
                viewBox="0 0 16 16"
                onClick={() =>
                  window.open("https://github.com/syounglee012/Looking-Good")
                }
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="tl-item">
          <div className="tl-bg" id="sr"></div>

          <div className="tl-year">
            <p className="f2 heading--sanSerif">Seoul Restrooms</p>
          </div>

          <div className="tl-content">
            <h1 className="f3 text--accent ttu">
              provides locations of public restrooms in Seoul, Korea&rsquo;s the
              most hectic and biggest city
            </h1>
            <ul>
              <li>
                Came up with the project idea ”Seoul Restroom” and delegated
                tasks to each team member
              </li>
              <li>
                Managed and led a team of 4 from designing front-end UI
                components to configuring back-end APIs
              </li>
              <li>
                Implemented review feature that enhances information sharing
                among the users
              </li>
              <li>
                Used MongoDB to quickly adapt to alterations in data structure
                during the project
              </li>
              <li>
                Implemented a map feature by using Google-map API that allows
                users to quickly locate nearby restrooms
              </li>
            </ul>

            <div id="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="white"
                class="bi bi-file-earmark-play"
                viewBox="0 0 16 16"
                onClick={() =>
                  window.open("https://www.youtube.com/watch?v=-qfgqgFdOCw")
                }
              >
                <path d="M6 6.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 6.454a.5.5 0 0 0-.757.43z" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="white"
                class="bi bi-github"
                viewBox="0 0 16 16"
                onClick={() =>
                  window.open("https://github.com/syounglee012/Seoul-Restroom")
                }
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="tl-item">
          <div className="tl-bg" id="dd"></div>

          <div className="tl-year">
            <p className="f2 heading--sanSerif">Daily Devotion</p>
          </div>

          <div className="tl-content">
            <h1 className="f3 text--accent ttu">
              Offers daily devotions based on the Book of Proverbs and a search
              function that covers all books of the Bible
            </h1>
            <ul>
              <li>
                Constructed the web application to enable the automatic update
                of the Proverbs chapter based on the current date
              </li>
              <li>
                Implemented a dynamic and responsive user interface that works
                seamlessly on any screen size
              </li>
              <li>
                Incorporated a rapid and reactive search function that includes
                all books of the Bible
              </li>
            </ul>

            <div id="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="white"
                class="bi bi-window"
                viewBox="0 0 16 16"
                onClick={() =>
                  window.open("https://proverbs-daily-devotion.click")
                }
              >
                <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="white"
                class="bi bi-github"
                viewBox="0 0 16 16"
                onClick={() =>
                  window.open("https://github.com/syounglee012/daily_devotion")
                }
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  justify-content: center;
  font-family: "Bodoni Moda", serif;
  height: 100%;
  overflow: auto;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.75;

  #sc {
    background: url("images/sc.png") no-repeat center center/contain;
  }
  #lgb {
    background: url("images/lgb.png") no-repeat center center/contain;
  }
  #sr {
    background: url("images/sr.png") no-repeat center center/contain;
  }
  #dd {
    background: url("images/dd.png") no-repeat center center/contain;
  }

  #timeline {
    display: flex;

    &:hover {
      .tl-item {
        width: 33.3333%;
        @media screen and (max-width: 1265px) {
          width: 100%;
        }
      }
    }
  }

  .tl-item {
    transform: translate3d(0, 0, 0);
    position: relative;
    width: 33.3333%;
    height: 90vh;
    color: #fff;
    overflow: hidden;
    transition: width 0.5s ease;
    #icons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin: 4rem 0 0;
      transition: 0.7s ease;

      svg {
        cursor: pointer;
        :hover {
          transition: 0.3s ease;
          transform: translateY(-5px);
          width: 50px;
          height: 50px;
        }
      }
    }
    &:before,
    &:after {
      transform: translate3d(0, 0, 0);
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    &:after {
      background: transparentize(#031625, 0.15);
      opacity: 1;
      transition: opacity 0.5s ease;
    }

    &:before {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 75%
      );
      z-index: 1;
      opacity: 0;
      transform: translate3d(0, 0, 0) translateY(50%);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    &:hover {
      width: 44% !important;
      #icons {
        display: flex;
      }
      &:after {
        opacity: 0;
      }

      &:before {
        opacity: 1;
        transform: translate3d(0, 0, 0) translateY(0);
        transition: opacity 1s ease, transform 1s ease 0.25s;
      }

      .tl-year {
        border-top: 1px solid aqua;
        border-bottom: 1px solid aqua;
        color: aqua;
        letter-spacing: 0.1rem;
        text-shadow: 0 0 3px aqua, 0 0 3px aqua;
        transition: 0.9s ease;
        top: 22%;
        @media screen and (max-width: 1265px) {
          top: 7%;
        }
      }

      .tl-content {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.75s ease 0.5s;
      }

      .tl-bg {
        filter: grayscale(0);
      }
    }
    @media screen and (max-width: 1265px) {
      width: 100%;
      height: 60vh;
      margin-bottom: 5rem;
      #icons {
        margin: 2rem 0 0;
      }
      svg {
        width: 25px;
        height: 25px;
      }

      &:hover {
        width: 100% !important;
      }
    }
  }

  .tl-content {
    transform: translate3d(0, 0, 0) translateY(25px);
    position: relative;
    z-index: 1;
    text-align: center;
    margin: 0 1.618em;
    top: 30%;
    opacity: 0;
    h1 {
      font-family: "Pathway Gothic One", Helvetica Neue, Helvetica, Arial,
        sans-serif;
      text-transform: uppercase;
      color: #edf756;
      font-size: 1.2rem;
      font-weight: normal;
    }

    ul {
      text-align: left;
    }
    @media screen and (max-width: 900px) {
      top: 10.5%;
      overflow: auto;
      h1 {
        font-size: 1rem;
        font-weight: 600;
        text-shadow: #031625;
      }
      ul {
        font-size: 1rem;
        padding: 0 0 0 1rem;
      }
    }
  }

  .tl-year {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;

    p {
      font-family: "Pathway Gothic One", Helvetica Neue, Helvetica, Arial,
        sans-serif;
      font-size: 1.7rem;
      line-height: 0;
      :hover {
        color: aqua;
      }
    }
    @media screen and (max-width: 900px) {
      top: 7%;
      p {
        font-size: 1.2rem;
      }
    }
    @media screen and (max-width: 1800px) and (min-width: 1265px) {
      p {
        font-size: 1.2rem;
      }
    }
  }

  .tl-bg {
    transform: translate3d(0, 0, 0);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center center;
    transition: filter 0.7s ease;
    filter: grayscale(100%) brightness(40%);
  }

  @media screen and (max-width: 1265px) {
    #timeline {
      display: grid;
      grid-template-columns: 1fr;
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
    height: 64px;
    font-family: "Segoe UI";
    font-weight: 500;
    font-size: 50px;
    color: aqua;
    letter-spacing: -5px;
    margin: 4rem 0 0;
  }
  #underline {
    width: 200px;
    height: 8px;
    background-color: white;
  }
  @media screen and (max-width: 850px) {
    p {
      height: 38px;
      font-size: 30px;
      letter-spacing: -3px;
    }
    #underline {
      width: 120px;
      height: 4px;
      background-color: white;
      margin-bottom: 2rem;
    }
  }
  @media screen and (max-width: 1250px) and (min-width: 851px) {
    p {
      height: 51px;
      font-size: 40px;
      letter-spacing: -3px;
    }
    #underline {
      width: 170px;
      height: 4px;
      background-color: white;
      margin-bottom: 2rem;
    }
  } ;
`;
