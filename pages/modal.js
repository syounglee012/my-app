import styled from "styled-components";
import { useRouter } from "next/router";
import Contact from "./contact";
export default function Modal(props) {
  const router = useRouter();
  const { open, close} = props;

  return (
    <Wrap>
      <div className={open ? "openModal modal" : "modal"} >
        {open ? (
          <>
            <div className="dim" >
              <Contact close={close}/>
            </div>
          </>
        ) : null}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 105;
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
