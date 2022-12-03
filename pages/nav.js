import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  return (
    <HeaderContainer>
      <h1>Young Lee</h1>
        <ul>
            <li>Skills</li>
          <Link href={"/experiences"}>
            <li>Experiences</li>
          </Link>
          <Link href={"/projects"}>
            <li>Projects</li>
          </Link>
        </ul>
        <button onClick={() => router.push("/contact")}>Contact Me</button>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  letter-spacing: 0.1rem;
  font-family: "Bodoni Moda", serif;
  position: absolute;
  top: 0;

  & ul {
    font-size: x-large;
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    list-style-type: none;


    & li {
      :hover {
        cursor: pointer;
      }
    }
  }

  & button {
    font-size: 18px;
    width: 100%;
    height: 50px;
    max-width: 150px;
    color: black;
    background-color: yellow;
    border: none;
    outline: none;
    letter-spacing: 0.1rem;
    font-family: "Bodoni Moda", serif;
    transition: opacity 1s ease-in;
    :hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }

  @media screen and (max-width: 900px) {
   
  }
`;
