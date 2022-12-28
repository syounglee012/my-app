import styled from "styled-components";
import { useRouter } from "next/router";
import Contact from "./contact";
export default function SentModal(props) {
  const router = useRouter();
  const { open, close } = props;

  return (
    <Wrap>
      <div className={open ? "openModal modal" : "modal"} >
        {open ? (
          <>
            <div className="dim" onClick={close}>
              <WhiteBackground>
                <h2>Message Sent!</h2>
              </WhiteBackground>
            </div>
          </>
        ) : null}
      </div>
    </Wrap>
  );
}

const WhiteBackground = styled.div`
  width: 250px;
  height: fit-content;
  background-color: black;
  border-radius: 20px;

  & h2 {
    color: white;
    font-family: "Pacifico", cursive;
    text-align: center;
    letter-spacing: 3px;
  }
`;
const Wrap = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 200;
  }

  .modal .dim {
    width: 100%;
    height: 100%;
    background-color: rgba(3, 1, 2, 0.6);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal.openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.2s;
  }

  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes share-modal-show {
    from {
      opacity: 0;
      bottom: -275px;
    }
    to {
      opacity: 1;
      bottom: 0;
    }
  }

  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
