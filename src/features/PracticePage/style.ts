import styled from 'styled-components';

export const PracticePageStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 40px;
  height: 100vh;
  background-color: #f5f5f5;

  .categorys {
    margin: 0 auto;
    margin-bottom: 40px;
    padding: 10px;
    width: 90%;
    max-width: 1000px;
  }

  .items {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
  }

  /* Tablet styles */
  @media (max-width: 768px) {
    .categorys {
      width: 95%;
      margin-bottom: 30px;
    }

    .items {
      width: 95%;
    }
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    padding-top: 40px;
    padding-bottom: 20px;

    .categorys {
      width: 100%;
      margin-bottom: 20px;
      padding: 5px;
    }

    .items {
      width: 100%;
    }
  }
`;
