import React, { useRef } from "react";
import styled from "styled-components";

export default function Main() {
  return (
    <BlackContainer>
      <div class="cater3-movingBG">
        <div class="flyinTxtCont">
          <div class="flyIn lineOne">Hello!</div>
          <div class="flyIn lineTwo">I&#39;m Young Lee</div>
          <div class="flyIn lineThree">Front-End Developer</div>
          <div class="flyIn lineFour">
            Based In Seattle
          </div>
        </div>
      </div>
    </BlackContainer>
  );
}

const BlackContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 12rem 0;
  .cater3-movingBG {
    height: 100%;
    background-image: url(http://salsaritas.johngroupinteractive.com/wp-content/uploads/2017/06/enchilada-bg.jpg);
    background-size: 125%;
    background-repeat: repeat-x;
    animation: animatedBackground 15s linear alternate infinite;
  }

  @keyframes animatedBackground {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 50% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

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
    font-family: "Gloria Hallelujah", cursive;
    transition-delay: 1s;
    transition: 1s ease in;
    animation: txtFlyIn 1s linear;
  }
  .lineTwo {
    font-family: "Abril Fatface", cursive;
    transition-delay: 2s;
    transition: 2s ease in;
    animation: txtFlyIn 2s linear;
  }
  .lineThree {
    font-family: "Mukta", sans-serif;
    transition-delay: 3s;
    transition: 3s ease in;
    animation: txtFlyIn 3s linear;
  }
  .lineOne,
  .lineTwo {
    font-size: 5rem;
    letter-spacing: 3px;
  }
  .lineThree {
    font-size: 2rem;
    letter-spacing: 1rem;
    margin-top: 1em;
  }
  .lineFour {
    transition-delay: 4s;
    transition: 4s ease in;
    animation: fadeIn 5s linear;
    width: 100%;
    display: inline-block;
    color: white;
    box-size: border-box;
    font-size: 1.3rem;
    font-family: "Mukta", sans-serif;
    letter-spacing: 1rem;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes txtFlyIn {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;
