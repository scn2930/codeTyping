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
  }
  .left {
    width: 30%;
    height: 100%;
    line-height: 100px;
    font-size: 2rem;
    cursor: pointer;
  }

  .right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 100px;
    cursor: pointer;
  }
  .right li:hover {
    transform: scale(1.5);
    transition: ease-in-out 0.3s;
  }
`;
