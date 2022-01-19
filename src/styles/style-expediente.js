import styled from "styled-components";

export const Div = styled.div`
  width: 100%;

  > div.title-container {
    width: 100%;

    > div {
      max-width: 1100px;
      margin: 0 auto;
      padding: 40px;

      > h1 {
        font-family: 'Mochiy Pop P One', sans-serif;
        font-size: 30px;
        text-transform: uppercase;
        font-style: italic;
        letter-spacing: 3px;
        color: #03E338;
        text-shadow: 1px 1px 2px #03E338;

      }
      > h1::first-letter {
        font-size: 42px;
      }
      @media only screen and (max-width: 650px) {
          > h1 {
            font-size: 20px;
          }

          > h1::first-letter {
            font-size: 32px;
          }
      }
      > p {
        padding: 30px 0;
        font-size: 18px;
        font-weight: 100;
      }
    }
  }

  > div.galery-pessoas {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 50px;
    padding: 20px;

    > div.box-one {
      width: 50%;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      > h4 {
        font-size: 20px;
        padding: 10px;
        font-family: 'Mochiy Pop P One', sans-serif;
        font-style: italic;
      }

      > div.box-img-infos {
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;
        gap: 10px;
        width: 100%;

        > img {
          background-color: #ffffff;
          width: 200px;
          height: 200px;
          border-radius: 50%;

          @media only screen and (max-width: 650px) {
            width: 150px;
            height: 150px;
          }
        }
        > div.redes-sociais {
          display: flex;
          gap: 20px;
          padding: 20px;
          > a.links-icons {
            font-size: 20px;

          }
        }
        > strong {
          font-size: 14px;
          font-family: 'Mochiy Pop P One', sans-serif;
          font-style: italic;
          padding: 5px;
          letter-spacing: 1px;
        }
        > span {
          font-weight: 300;
        }

      }

    }
    @media only screen and (max-width: 650px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > div.box-one {
        width: 100%;
      }
    }
  }
`;
