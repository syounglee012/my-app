import styled from "styled-components";
import { useRouter } from "next/router";

export default function Test1() {
  const router = useRouter();
    const card = document.querySelector('.card');
    const cardWidth = card.offsetWidth
    const cardHeight = card.offsetHeight
    const rotationLimit = 7
    const middleX = cardWidth/2
    const middleY = cardHeight/2
    
   function addRotation(){
    this.classList.add('transition')
    this.firstElementChild.classList.add('transition')
    setTimeout(() => { 
      this.classList.remove('transition') 
      this.firstElementChild.classList.remove('transition')
    }, 250)
  }
  
  function animateRotation(event){
    const x = event.offsetX
    const y = event.offsetY
    const rotateX = (x - middleX) * (rotationLimit / middleX)
    const rotateY = (middleY - y) * (rotationLimit / middleY)
    this.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
    this.firstElementChild.style.top = `-${(rotateY * 50)}px`
    this.firstElementChild.style.right = `${(rotateX * 50)}px`
  }
  
  function removeRotation(){
    this.classList.add('transition')
    this.firstElementChild.classList.add('transition')
    setTimeout(() => { 
      this.removeAttribute('style')
      this.firstElementChild.removeAttribute('style')
    }, 250)
    setTimeout(() => { 
      this.classList.remove('transition')
      this.firstElementChild.classList.remove('transition')
    }, 500)
  }
  
  card.addEventListener('mouseenter', addRotation)
  card.addEventListener('mousemove', animateRotation)
  card.addEventListener('mouseleave', removeRotation)
  
  
 
  return (
    <Wrap>
      <div class="card">
        <div class="highlight"></div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  background-image: radial-gradient(circle, white, PaleTurquoise);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  perspective: 1000px;

  .transition {
    transition: all 0.125s;
  }

  .card {
    width: 400px;
    height: 260px;
    background-color: darken(tomato, 15);
    background-image: url("https://images.unsplash.com/photo-1564537499-9ed6029493f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2767&q=80");
    background-size: cover;
    border-radius: 16px;
    position: relative;
    border: 4px solid darken(white, 20);
    overflow: hidden;
    box-sizing: border-box;
    transform: translateZ(20px);
    filter: drop-shadow(0 8px 16px transparentize(black, 0.75));
  }

  .highlight {
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    filter: blur(50px);
    background: white;
    opacity: 0.35;
    z-index: 10;
    pointer-events: none;
  }
`;
