import styled from "styled-components";

export default function Projects() {
  return (
    <Container>
      <Title>
        <h1>PROJECTS</h1>
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
          </div>
        </div>
        <div className="tl-item" >
          <div className="tl-bg" id="lgb"></div>

          <div className="tl-year">
            <p className="f2 heading--sanSerif">Looking Good Blog</p>
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
  overflow: hidden;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  margin-top: 3rem;
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

  #timeline {
    display: flex;
    /* background-color: #031625; */

    &:hover {
      .tl-item {
        width: 33.3333%;
        @media screen and (max-width: 900px) {
          width: 100%;
        }
      }
    }
  }

  .tl-item {
    transform: translate3d(0, 0, 0);
    position: relative;
    width: 33.3333%;
    height: 80vh;
    /* min-height: 500px; */
    color: #fff;
    overflow: hidden;
    transition: width 0.5s ease;

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

      &:after {
        opacity: 0;
      }

      &:before {
        opacity: 1;
        transform: translate3d(0, 0, 0) translateY(0);
        transition: opacity 1s ease, transform 1s ease 0.25s;
      }

      .tl-year {
        border-top: 1px solid #edf756;
        border-bottom: 1px solid #edf756;
        color: #edf756;
        letter-spacing: 0.1rem;
        text-shadow: 0 0 3px #edf756, 0 0 3px #edf756;
        transition: 0.9s ease;
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
    @media screen and (max-width: 900px) {
      width: 100%;
      height: 60vh;
      
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
    top: 55%;
    opacity: 0;

    h1 {
      font-family: "Pathway Gothic One", Helvetica Neue, Helvetica, Arial,
        sans-serif;
      text-transform: uppercase;
      color: #1779cf;
      font-size: 1.44rem;
      font-weight: normal;
    }

    ul {
      text-align: left;
    }
    @media screen and (max-width: 900px) {
      top: 10.5%;
      overflow: auto;
     h1 {
      font-size: 0.9rem;
      font-weight: 600;
      text-shadow: #031625;
     }
     ul {
       font-size: .7rem;
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
        color: #edf756;
      }
    }
    @media screen and (max-width: 900px) {
      top: 7%;
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

  @media screen and (max-width: 900px) {
    #timeline {
      display: grid;
      grid-template-columns: 1fr;
    }
    
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  & h1 {
    font-size: 2.5rem;
    font-family: "Mukta", sans-serif;
    letter-spacing: 0.3rem;
    transition: 1s ease;
    :hover {
      letter-spacing: 0.6rem;
    }
  }
  @media screen and (max-width: 900px) {
    & h1 {
      font-size: xx-large;
    }
  } ;
`;
