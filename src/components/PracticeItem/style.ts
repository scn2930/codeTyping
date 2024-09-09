import styled from 'styled-components';

export const PracticeItemStyle = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 20px;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    .lang {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 10px;
      text-transform: uppercase;
      color: #333;
      border-bottom: 2px solid #007bff;
      padding-bottom: 5px;
    }

    .title {
      font-size: 1rem;
      color: #555;
    }
  }
`;
