import styled from 'styled-components';

export const PracticeItemStyle = styled.div`
  display: grid;
  grid-gap: 100px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  .item {
    height: 100px;
    background-color: salmon;
    .lang {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 20px;
      text-transform: uppercase;
      border: 1px solid black;
    }
    .title {
      font-size: 1.3rem;
    }
  }
`;
