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
                    onClick={() => close && router.push("/")}
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

  .modal .upperbox {
    height: 97px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: #fff 2px solid;
  }

  .modal .lowerbox {
    display: flex;
    font-size: 24px;
    font-family: "Mukta", sans-serif;
  }
  .modal .left {
    width: 173px;
    height: 97px;
    border-right: #fff 2px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .modal .right {
    width: 173px;
    height: 97px;
    color: #1fb57e;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .modal .cancel {
    font-size: 24px;
    font-family: "Mukta", sans-serif;
  }
  & section {
    width: 100%;
    max-width: 335px;
    height: 190px;
    margin: 0 auto;
    border-radius: 20px;
    background-color: black;
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
`;
