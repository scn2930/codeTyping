import styled from 'styled-components';

export const StaticStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 20px auto;
  padding: 10px 50px;
  background-color: #999;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  p {
    font-size: 1.5rem;
    color: #333;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    padding: 15px;
    p {
      font-size: 1rem;
    }
  }
`;

export const TyingPageStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
  height: 80vh;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.2em;
    color: #333;

    p {
      margin: 5px 0;
      font-weight: bold;
    }
  }

  .codeWrap {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
