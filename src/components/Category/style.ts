import styled from 'styled-components';

export const CategoryStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;

  p {
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #007bff;
    border-radius: 20px;
    background-color: #e3f2fd;
    color: #007bff;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

    &:hover {
      background-color: #007bff;
      color: #fff;
      border-color: #007bff;
    }

    &:active {
      background-color: #0056b3;
      color: #fff;
    }
  }
`;
