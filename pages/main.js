import React, { useRef } from "react";
import styled from "styled-components";

export default function Main() {
  return (
    <BlackContainer>
      <div className="flyinTxtCont">
        <div className="flyIn lineOne">Hello!</div>
        <div className="flyIn lineTwo">I&#39;m Sam Lee</div>
        <div className="flyIn lineThree">Front-End Developer</div>
        <div className="flyIn lineFour">Based In Seattle</div>
      </div>
      <h1>
        <span>always be</span>
        <div class="message">
          <div class="word1">humble</div>
          <div class="word2">creative</div>
          <div class="word3">hardworking</div>
        </div>
      </h1>
    </BlackContainer>
  );
}

const BlackContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 410px;
  margin: 12rem 0 0;

  .flyinTxtCont {
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
  }
  .flyIn {
    color: #fff;
    line-height: 1.4em;
    position: relative;
    text-shadow: 2px 2px 40px rgba(0, 0, 0, 0.7);
  }
  .lineOne {
    font-family: "Abril Fatface", cursive;
    transition-delay: 1s;
    transition: 1s ease in;
    animation: fadeIn 2s linear;
  }
  .lineTwo {
    font-family: "Abril Fatface", cursive;
    transition-delay: 1s;
    transition: 1s ease in;
    animation: fadeIn 2s linear;
  }
  .lineThree {
    font-family: "Mukta", sans-serif;
    transition-delay: 1s;
    transition: 1s ease in;
    animation: fadeIn 2s linear;
  }
  .lineOne,
  .lineTwo {
    font-size: 6rem;
    letter-spacing: 3px;
  }
  .lineThree {
    font-size: 2.5rem;
    letter-spacing: 0.6rem;
    margin-top: 1em;
  }
  .lineFour {
    transition-delay: 4s;
    transition: 4s ease in;
    animation: fadeIn 2s linear;
    display: inline-block;
    color: white;
    box-size: border-box;
    font-size: 1.3rem;
    font-family: "Mukta", sans-serif;
    letter-spacing: 0.5rem;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h1 {
    color: #FFFAA0;
    font-family: tahoma;
    font-size: 2.5rem;
    font-weight: 1;
    line-height: 1.5;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    width: 100%;
    animation: fadeIn 2s linear;
    @media screen and (max-width: 900px) {
      font-size: 18px;
      margin: 7rem 0 0 -2rem;
      width: 350px;
    }
  }

  h1 span {
    font-size: 40px;
    margin-right: 1rem;
    @media screen and (max-width: 900px) {
      font-size: 18px;
      margin-right: 0;
    }
  }

  .message {
    background-color: #FFFAA0;
    color: #111;
    display: block;
    font-weight: 900;
    overflow: hidden;
    position: absolute;
    padding-left: 0.3rem;
    top: 0.2rem;
    left: 250px;
    animation: openclose 7s ease-in-out infinite;
    @media screen and (max-width: 900px) {
      left: 130px;
    }
  }

  .word1,
  .word2,
  .word3 {
    font-family: tahoma;
  }

  @keyframes openclose {
    0% {
      top: -0.1rem;
      width: 0;
    }
    5% {
      top: -0.1rem;
      width: 0;
    }
    15% {
      top: -0.1rem;
      width: 200px;
    }
    30% {
      top: -0.1rem;
      width: 200px;
    }
    33% {
      top: -0.1rem;
      width: 0;
    }
    35% {
      top: -0.1rem;
      width: 0;
    }
    38% {
      top: -3.9rem;
    }
    48% {
      top: -3.9rem;
      width: 237px;
    }
    62% {
      top: -3.9rem;
      width: 237px;
    }
    66% {
      top: -3.9rem;
      width: 0;
      text-indent: 0;
    }
    71% {
      top: -7.6rem;
      width: 0;
      text-indent: 5px;
    }
    86% {
      top: -7.6rem;
      width: 375px;
    }
    95% {
      top: -7.6rem;
      width: 375px;
    }
    98% {
      top: -7.6rem;
      width: 0;
      text-indent: 5px;
    }
    100% {
      top: 0;
      width: 0;
      text-indent: 0;
    }
  }
  @media screen and (max-width: 900px) {
    @keyframes openclose {
      0% {
        top: 0rem;
        width: 0;
      }
      5% {
        top: 0rem;
        width: 0;
      }
      15% {
        top: 0rem;
        width: 105px;
      }
      30% {
        top: 0rem;
        width: 105px;
      }
      33% {
        top: 0rem;
        width: 0;
      }
      35% {
        top: 0rem;
        width: 0;
      }
      38% {
        top: -1.7rem;
      }
      48% {
        top: -1.7rem;
        width: 125px;
      }
      62% {
        top: -1.7rem;
        width: 125px;
      }
      66% {
        top: -1.7rem;
        width: 0;
        text-indent: 0;
      }
      71% {
        top: -3.4rem;
        width: 0;
        text-indent: 0;
      }
      86% {
        top: -3.4rem;
        width: 190px;
      }
      95% {
        top: -3.4rem;
        width: 190px;
      }
      98% {
        top: -3.4rem;
        width: 0;
        text-indent: 0;
      }
      100% {
        top: 0;
        width: 0;
        text-indent: 0;
      }
    }
  }

  @media screen and (max-width: 900px) {
    width: 270px;
    position: absolute;
    margin: 0 0 0;

    .lineOne,
    .lineTwo {
      font-size: 2rem;
    }
    .lineThree {
      font-size: 1rem;
      margin-top: 1em;
      text-align: center;
      letter-spacing: 0.3rem;
    }
    .lineFour {
      font-size: 0.8rem;
      letter-spacing: 0.3rem;
    }
  }
`;
