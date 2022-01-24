import styled from "styled-components";

export const DivContato = styled.div`
  width: 100%;
  padding: 40px;

  > div.container-contato {
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .2);

    > h1 {
      font-family: 'Mochiy Pop P One', sans-serif;
      letter-spacing: 4px;
      color: #03E338;
      font-style: italic;
    }
    > div.box-contato {
      display: flex;
      text-align: center;
      gap: 30px;
      width: 100%;
      justify-content: center;
      padding: 60px;

      > div {
        display: flex;
        flex-direction: column;
        padding: 10px;
        gap: 5px;
        box-shadow: 0px 5px 0px #03E338;


        > h2 {
          font-family: 'Mochiy Pop P One', sans-serif;
          font-size: 18px;
          font-style: italic;
        }

        > span {
          font-size: 15px;
          letter-spacing: 2px;
          font-style: italic;
        }

        > div {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;

          > a.link-target-sociais {
            padding: 10px 5px;

            &:nth-of-type(1) {
              color: #1778F2;
            }
            &:nth-of-type(2) {
              color: #f00d75;
            }
            &:nth-of-type(3) {
              color: #25D366;
            }
          }

        }
      }

    }

    @media only screen and (max-width: 768px) {
      h1 {
        font-size: 4.4vw;
      }

      > div.box-contato {
        width: 100%;
        flex-direction: column;
        padding: 10px;
        word-wrap: break-word;

      }

    }

  }

`;
