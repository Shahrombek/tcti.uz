import styled from "styled-components";

export const StatisticsWrapper = styled.div`
  width: 100%;
  min-height: 400px;
  box-shadow: 0px 0px 15px -1px rgba(34, 60, 80, 0.2);
  padding: 40px;
  background: #4084d9;
  color: white;

  .title {
    font-weight: 500;
    color: white;

    font-size: 28px;
    text-align: center;
  }
  .statistics__content {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-evenly;
    padding:30px 0px;

    .statistics__card {
      display: flex;
      align-items: center;
      justify-content: center;
      gap:10px;
      flex-direction: column;
      button {
        border: none;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        font-size: 45px;
        padding-top: 10px;
        text-align: center;
        background: white;
        color: #00c6d4;
      }
      .number__students{
        font-size: 30px;
        font-weight: 600;
      }
      p{
        text-align: center;
        font-size: 18px;
        width: 250px;
      }
    }
  }
  @media (max-width: 800px) {
    .statistics__content{
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
