import styled from "styled-components";

export const ContainerNotFound = styled.div`
  width: 100%;


  > a >  div {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
    padding: 100px 20px;

    > span {
      display: inline-block;
      color: #25D366;
      font-family: 'Lobster', cursive;
      font-size: 300px;
      text-shadow: 4px 20px 10px #000000;
      letter-spacing: 30px;

      &:nth-of-type(1) {
        transform: rotate(-30deg);

      }
      &:nth-of-type(2) {
        transform: rotate(-20deg);

      }
      &:nth-of-type(3) {
        transform: rotate(30deg);

      }
    }
    > div.container-text-notfound {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;


      > h1 {
        font-family: 'Lobster', cursive;
        letter-spacing: 2px;
        color: #cc0000;
      }

      > .icon {
        font-size: 30px;
        color: #25D366;

      }

    }

    @media only screen and (max-width: 668px) {
      > span {
        font-size: 30vw;

      }
      > div.container-text-notfound {
        > h1 {
          font-size: 4vw;
        }
        > .icon {
          font-size: 3.5vw;
        }
      }
    }
  }

`;
