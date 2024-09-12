import styled from 'styled-components';

export const MainStyle = styled.div`
  max-width: 1200px;
  height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  .textWrap {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text {
    font-size: 2.5em;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    color: #333;
    opacity: 0;
    position: absolute;
    text-align: center;
    transform: translateY(-50%);
  }

  .text-enter {
    animation: typing 2s steps(30) forwards;
  }

  .text-exit {
    animation: fadeOut 0.5s forwards;
  }

  @keyframes typing {
    from {
      width: 0;
      opacity: 1;
    }
    to {
      width: 100%;
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

  @media (max-width: 768px) {
    .text {
      font-size: 1.8em;
    }
  }

  @media (max-width: 480px) {
    .text {
      font-size: 1.2em;
    }
  }
`;

export const ButtonStyle = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

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
      height: 50px;
      background-color: #007bff;
      color: #ffffff;
      border: 2px solid #007bff;
      border-radius: 8px;
      font-size: 18px;
      font-weight: bold;
      transition: all 0.3s ease;
      text-transform: uppercase;
    }

    Button:hover {
      font-size: 23px;
      background-color: #0056b3;
      color: #ffffff;
      border-color: #0056b3;
      transform: scale(1.05);
      cursor: pointer;
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

  @media (max-width: 768px) {
    .button {
      Button {
        width: 250px;
        height: 45px;
        font-size: 16px;
      }
    }
  }

  @media (max-width: 480px) {
    .button {
      Button {
        width: 200px;
        height: 40px;
        font-size: 14px;
      }
    }

    .btnTop {
      flex-direction: column;
      gap: 20px;
    }
  }
`;
