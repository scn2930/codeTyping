import styled from 'styled-components';

export const MainStyle = styled.div`
  max-width: 1200px;
  height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  /* background-color: beige; */
  .textWrap {
    height: 100vh;
    display: grid;
    place-items: center;
    position: relative;
  }

  .text {
    width: 22ch;
    /* animation: typing 2s steps(15), blink 0.5s step-end infinite alternate; */
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-size: 3em;
    opacity: 0; /* Initially hidden */
    position: absolute; /* Positioned absolutely for layering */
  }

  .text-enter {
    animation: typing 1s steps(15) forwards; /* Typing effect */
  }

  .text-exit {
    animation: fadeOut 0.5s forwards; /* Fade out effect */
  }

  @keyframes typing {
    from {
      width: 0;
      opacity: 1; /* Visible when typing starts */
    }
    to {
      width: 22ch;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const ButtonStyle = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // 부모의 높이를 기준으로 중앙 정렬을 위해 추가
  width: 100%; // 부모의 너비를 기준으로 중앙 정렬을 위해 추가

  .buttonWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .button {
    display: flex;
    flex-direction: column;
    gap: 30px;
    Button {
      width: 300px;
      height: 40px;
      background-color: black;
      color: white;
      font-size: 18px;
    }
    Button:hover {
      width: 600px;
      background-color: white !important;
      color: black !important;
      font-size: 25px;
      font-weight: bold;
      span::after {
        content: ' ->';
      }
    }
  }
  .btnTop {
    display: flex;
    justify-content: space-between;
    gap: 50px;
  }
  .btnBottom {
    display: flex;
    justify-content: center;
  }
`;
