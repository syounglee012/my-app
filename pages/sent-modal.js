import styled from "styled-components";
import { useRouter } from "next/router";

export default function SentModal(props) {
  const router = useRouter();
  const { open, close, exitOpen, exitClose } = props;
  return (
    <Wrap>
      <div className={open || exitOpen ? "openModal modal" : "modal"}>
        {open ? (
          <>
            <div className="dim" onClick={close}>
              <WhiteBackground>
                <h2>Message Sent!</h2>
              </WhiteBackground>
            </div>
          </>
        ) : exitOpen ? (
          <>
            <div className="dim" onClick={exitClose}>
              <section>
                <div className="upperbox">
                  <div className="cancel">Are you sure you want to exit?</div>
                </div>
                <div className="lowerbox">
                  <div
                    className="left"
                    onClick={() => (window.location.href = "/")}
                  >
                    YES
                  </div>
                  <div className="right" onClick={exitClose}>
                    NO
                  </div>
                </div>
              </section>
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
  background-color: white;
  border-radius: 20px;

  & h2 {
    color: black;
    font-family: "Bebas Neue", cursive;
    text-align: center;
    letter-spacing: 3px;
  }
  @media screen and (max-width: 900px) {
    width: 180px;
    & h2 {
      font-size: 18px;
    }
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

  .modal .upperbox {
    height: 97px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: black 2px solid;
  }

  .modal .lowerbox {
    display: flex;
    font-size: 24px;
    font-family: "Bebas Neue", cursive;
    letter-spacing: 3px;
  }
  .modal .left {
    color: black;
    width: 173px;
    height: 73px;
    border-right: black 2px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
      color: #fff;
      background-color: black;
    }
  }
  .modal .right {
    width: 177px;
    height: 73px;
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
      color: #fff;
      background-color: red;
    }
  }

  .modal .cancel {
    font-size: 24px;
    letter-spacing: 1px;
    font-family: "Bebas Neue", cursive;
  }
  & section {
    width: 100%;
    max-width: 350px;
    height: 170px;
    margin: 0 auto;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(3, 1, 2, 0.08);
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.3s;
    overflow: hidden;
    z-index: 105;
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

  @media screen and (max-width: 900px) {
    & section {
      max-width: 250px;
      height: 100px;
    }

    .modal .upperbox {
      height: 60px;
    }

    .modal .lowerbox {
      font-size: 18px;
    }
    .modal .left {
      height: 40px;
    }
    .modal .right {
      height: 40px;
    }

    .modal .cancel {
      font-size: 18px;
    }
  }
`;
