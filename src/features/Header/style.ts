import styled from 'styled-components';

export const HeaderStyle = styled.div`
  .nav {
    background-color: beige;
    width: 100%;
    height: 100px;
    padding: 0 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }

  .left {
    width: 30%;
    height: 100%;
    line-height: 100px;
    font-size: 2rem;
    cursor: pointer;
    text-align: center;
  }

  .right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    line-height: 100px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .right li {
    cursor: pointer;
  }

  .right li:hover {
    transform: scale(1.1);
    transition: ease-in-out 0.3s;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    .left {
      width: 40%;
      font-size: 1.5rem;
    }

    .right {
      width: 60%;
      font-size: 0.9rem;
      flex-direction: row;
      align-items: flex-start;
      height: auto;
    }

    .right li {
      margin: 5px 0;
    }
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    .left {
      width: 50%;
      font-size: 1.2rem;
    }

    .right {
      width: 100%;
      font-size: 0.8rem;
    }

    .right li {
      margin: 5px 0;
      text-align: center;
    }
  }
`;
