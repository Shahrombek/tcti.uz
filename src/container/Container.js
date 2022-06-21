import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 11.5vw;

  @media (max-width:1367px){
    padding: 0 8.5vw;
  }

  @media (max-width:1200px){
    padding: 0 5.2vw;
  }
`;
