import styled from "styled-components";
export default function Footer() {
  return (
    <FooterContainer>
      <footer>
        Created with&ensp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="red"
          className="bi bi-suit-heart-fill"
          viewBox="0 0 16 13"
        >
          <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
        </svg>
        &ensp;by Sam Lee
      </footer>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  bottom: 0;
  font-family: "Bodoni Moda", serif;
  background-color: black;
`;
