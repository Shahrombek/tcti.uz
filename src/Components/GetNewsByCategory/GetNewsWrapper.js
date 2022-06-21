import styled from "styled-components";

export const GetNewsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap:25px;
  padding:50px 4vw;

  .left__content{
    flex:2;

    .select__category{
        img{
            width: 100%;
        }
        .title{
            font-size: 36px;
            color: #354558;
            line-height:115%;
            margin-top: 10px;
        }
        .body{
            p{
                font-size:16px;
            }
        }
    }
  } 
  .right__content{
    flex:1;

    h4{
        text-align: center;
        font-size: 25px;
        margin-bottom:20px;
    }
    .img__content{
        img{
            width: 100%;
            margin-bottom: 25px;
            cursor: pointer;
        }
    }
  }

  @media (max-width:1024px){
    flex-direction: column;
  }
  @media (max-width:768px){
    .left__content{
        .select__category{
            .title{
                font-size: 24px;
            }
            .body{
            p{
                font-size:15px;
            }
        }
    }
  }
  @media (max-width:415px){
    .left__content{
        .select__category{
            .title{
                font-size: 18px;
            }
        }
    }
  }}
`;
