import styled from "styled-components";
import { useRouter } from "next/router";

export default function Experiences() {
  const router = useRouter();

  return (
    <Container>
      <Title>
        <h1>Experiences</h1>
      </Title>
      <div class="testimonial">
        <div
          class="card"
          onClick={() => router.push("https://www.triumphgroup.com/")}
        >
          <div class="layer"></div>
          <div class="content">
            <h2>Front-End Developer</h2>
            <h4>Triumph Group - Contract via BlueRock Marketing, LLC</h4>
            <p>Sep 2022 - Present</p>
            <ul>
              <li>
                Developed web applications using JavaScript frameworks Next.Js
              </li>
              <li>
                Created the user experience that fetched, parsed, and formatted
                analytic data, and relayed it into React components
              </li>
              <li>
                Created accessible, responsive, and functional user interfaces
                to allow visitors on any device to have the same perfect user
                experience by using Styled-Components
              </li>
            </ul>
            <div class="details">
              <h4>Frameworks & Libraries</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Webpack</li>
                <li>Babel</li>
                <li>Strapi</li>
                <li>Algolia</li>
                <li>Bootstrap</li>
                <li>Adobe XD</li>
                <li>Github</li>
                <li>Pastel</li>
                <li>Styled-Components</li>
              </ul>
              <span>CHECK OUT MY WORK</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Bodoni Moda", serif;
  height: 100vh;
  background: url("images/background.jpg") no-repeat center center/cover;
  padding-top: 5rem;

  .testimonial {
    margin: 100px auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 5rem;
    font-family: "Mukta", sans-serif;
  }
  .testimonial .card {
    position: relative;
    margin: 0 auto;
    max-width: 800px;
    background: #333;
    padding-bottom: 20px;
    box-sizing: border-box;
    text-align: center;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    overflow: hidden;

    :hover {
      cursor: pointer;
    }
  }
  .testimonial .card .layer {
    position: absolute;
    top: calc(100% - 2px);
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(#03a9f4, #e91ee3);
    z-index: 1;
    transition: 0.5s;
  }
  .testimonial .card:hover .layer {
    top: 0;
  }
  .testimonial .card .content {
    position: relative;
    z-index: 2;
  }
  .testimonial .card .content h2 {
    font-size: 46px;
  }
  .testimonial .card .content h4 {
    font-size: 26px;
    line-height: 24px;
    margin: 0;
  }
  .testimonial .card .content p {
    font-size: 22px;
    line-height: 24px;
  }
  .testimonial .card .content ul {
    text-align: left;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 2rem;
  }
  .testimonial .card .details h4 {
    font-size: 20px;
    line-height: 24px;
  }
  .testimonial .card .details ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    list-style-type: none;
    font-size: 14px;
    line-height: 24px;
  }

  .testimonial .card .content .details span {
    color: yellow;
    font-size: 14px;
    transition: 0.5s;
  }
  .testimonial .card:hover .content .details span {
    color: #fff;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  & h1 {
    font-size: 4rem;
    font-family: "Abril Fatface", cursive;
    letter-spacing: 0.4rem;
  }
`;
