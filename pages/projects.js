import styled from "styled-components";

export default function Projects() {
  return (
    <Container>
      <Title>
        <h1>&lsaquo; PROJECTS &rsaquo;</h1>
      </Title>
      <section id="timeline">
        <div className="tl-item">
          <div className="tl-bg"></div>

          <div className="tl-year">
            <p className="f2 heading--sanSerif">Triumph Group</p>
          </div>

          <div className="tl-content">
            <h1>Lorem ipsum dolor sit</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit.
            </p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg"></div>

          <div className="tl-year">
            <p className="f2 heading--sanSerif">Daily Devotion</p>
          </div>

          <div className="tl-content">
            <h1 className="f3 text--accent ttu">Vestibulum laoreet lorem</h1>
            <p>
              Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan
              risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas.
              Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed
              felis. Morbi sed nisl et arcu.
            </p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg"></div>

          <div className="tl-year">
            <p className="f2 heading--sanSerif">Soldier Challengers</p>
          </div>

          <div className="tl-content">
            <h1 className="f3 text--accent ttu">Phasellus mauris elit</h1>
            <p>
              Mauris cursus magna at libero lobortis tempor. Suspendisse
              potenti. Aliquam interdum vulputate neque sit amet varius.
              Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique
              dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh.
              Pellentesque non porta leo. Nulla eros odio, egestas quis
              efficitur vel, pretium sed.
            </p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg"></div>

          <div className="tl-year">
            <p className="f2 heading--sanSerif">Seoul Restrooms</p>
          </div>

          <div className="tl-content">
            <h1 className="f3 text--accent ttu">Mauris vitae nunc elem</h1>
            <p>
              Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare
              purus non euismod. Donec vestibulum efficitur tortor, eget
              efficitur enim facilisis consequat. Vivamus laoreet laoreet elit.
              Ut ut varius metus, bibendum imperdiet ex. Curabitur diam quam,
              blandit at risus nec, pulvinar porttitor lorem. Pellentesque dolor
              elit.
            </p>
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

  #timeline {
    display: flex;
    /* background-color: #031625; */

    &:hover {
      .tl-item {
        width: 23.3333%;
      }
    }
  }

  .tl-item {
    transform: translate3d(0, 0, 0);
    position: relative;
    width: 25%;
    height: 100vh;
    min-height: 600px;
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
      width: 30% !important;

      &:after {
        opacity: 0;
      }

      &:before {
        opacity: 1;
        transform: translate3d(0, 0, 0) translateY(0);
        transition: opacity 1s ease, transform 1s ease 0.25s;
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
      font-size: 1.728rem;
      line-height: 0;
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
    transition: filter 0.5s ease;
    filter: grayscale(100%);
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
    letter-spacing: 0.4rem;
  }
  @media screen and (max-width: 900px) {
    & h1 {
      font-size: xx-large;
    }
  } ;
`;
