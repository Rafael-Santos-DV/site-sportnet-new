import styled, { createGlobalStyle, css} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: 'Alegreya Sans', sans-serif;
  }

  html, body {
    background-color: #f2f5f3;

  }
`;

export const Header = styled.header`
  width: 100%;
  background-color: #000000;

  > div.container-header {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 100px;

    > img {
      width: 180px;
    }

    div.button-icon-mobile {
      display: none;
    }

    > nav.navigation-links {
      transition: display 200ms;

      > ul {
        display: flex;
        gap: 20px;
        font-weight: 700;
        font-size: 18px;
        transition: flex-direction 200ms;
        align-items: center;

        > li > .links-menu {
          color: #03E338;
          transition: 500ms;

          > .icons {
            font-size: 20px;

          }

          > .instagram {
            font-size: 22px;
          }

          &:hover {
            border-bottom: 1px solid black;
          }
        }
      }
    }
    @media only screen and (max-width: 768px) {
      justify-content: center;
      flex-direction: column;

      > nav.navigation-links {
        padding-top: 10px;
      }
    }
    @media only screen and (max-width: 368px) {
      div.button-icon-mobile {
        display: block;
      }
      > img {
        width: 40vw;
      }

      > nav.navigation-links {

        > ul {
          flex-direction: column;
        }
      }
    }
  }

`;

export const ContainerMaster = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const MainGrid = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  padding: 20px;

  > article.article-container {
    grid-column: 1 / span 2;
    box-shadow: 1px 1px 5px #eee,
      -1px -1px 5px #eee;
    overflow: hidden;
    background-color: #fff;

    > .router-notic {
      color: #000000;

      > img {
        width: 100%;
        transition: transform 200ms linear;
        background-color: #fff;

        &:hover {
         transform: scale(1.02);
        }
      }

      > div.box-info-img {
        padding: 20px;

        > span {
          font-size: 12px;
          font-weight: 300;
        }

        > h1 {
          font-size: 20px;
          padding-bottom: 10px;
          transition: color 500ms;
        }
      }

      &:hover h1 {
        color: #03E338;
      }
    }
    @media only screen and (max-width: 768px) {
      grid-column: 1 / span 3;
    }
  }

  > aside.container-anunc {
    background-color: #fff;
    padding: 50px;
    border: 1px solid rgba(0, 0, 0, .1);

    @media only screen and (max-width: 768px) {
      grid-column: 1 / span 3;
    }
  }

  > section.noticias-recentes {
    display: flex;
    grid-column: 1 / span 3;
    justify-content: space-between;

    > article.box-noticia {
      width: 33%;
      max-width: 325px;
      box-shadow: 1px 1px 5px #eee,
      -1px -1px 5px #eee;
      overflow: hidden;
      background-color: #fff;

      > .router-notic {
        color: #000000;
        display: flex;
        flex-direction: column;

        > img {
          width: 100%;
          background-color: #fff;
          transition: transform 200ms linear;

          &:hover {
          transform: scale(1.02);
          }
        }
        > div.box-info-img {
          padding: 10px;

          > span {
            font-size: 12px;
            font-weight: 300;
          }

          > h1 {
            font-size: 16px;
            transition: color 500ms;
          }
          @media only screen and (max-width: 368px) {
            > h1 {
              font-size: 4vw;
            }
          }
        }

        &:hover h1 {
          color: #03E338;
        }
      }

    }
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      > article.box-noticia {
        width: 100%;
        max-width: 500px;

        > .router-notic {
          flex-direction: row;

          > img {
            width: 35%;
          }
        }
      }
    }
  }
`;

export const MenuMobile = styled.div`
    width: 100vw;
    color: #03E338;
    font-size: 10vw;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    padding: 14px 10px;

    @media only screen and (max-width: 368px) {
      ${
        props => props.permi ?
        css`
          > .buttons-mobile:first-of-type {
            display: none;
          }
          > .buttons-mobile:last-of-type {
            display: initial;
          }
        ` :
        css`
          > .buttons-mobile:first-of-type {
              display: initial;
            }
            > .buttons-mobile:last-of-type {
              display: none;
            }
          `
      }

      ~ nav {
        ${props => props.permi ?
          css`
            display: block;
          ` :
          css`
            display: none;
          `
        };
      }

    }

`;


export const SectionGrid = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  max-width: 1110px;
  margin: 0 auto;
  padding-bottom: 20px;

  > main.content-main {
    display: flex;
    flex-direction: column;
    width: 100%;

    > div.heading-lv2 {
      > h2 {
        font-size: clamp(3vw, 30px, 35px);
        text-transform: uppercase;
        font-weight: 700;
        color: #03E338;
        padding: 10px 0 30px 20px;
        font-style: italic;
        text-shadow: -1px -1px 1px #03E338;
      }
    }

    > article.container-noticias {
      width: 100%;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;


      > aside.box-anuncio {
        width: 50%;
        max-width: 325px;
        height: 300px;
        border: 1px solid blue;

      }

      > div.box-noticia {
        width: 50%;
        max-width: 325px;
        box-shadow: 1px 1px 5px #eee,
        -1px -1px 5px #eee;
        overflow: hidden;
        background-color: #fff;

        > .router-notic {
          color: #000000;
          display: flex;
          flex-direction: column;

          > img {
            width: 100%;
            background-color: #fff;
            transition: transform 200ms linear;

            &:hover {
              transform: scale(1.02);
            }
          }
          > div.box-info-img {
            padding: 10px;

            > span {
              font-size: 12px;
              font-weight: 300;
            }

            > h1 {
              font-size: 16px;
              transition: color 500ms;
            }
            @media only screen and (max-width: 368px) {
              > h1 {
                font-size: 4vw;
              }
            }
          }

          &:hover h1 {
            color: #03E338;

          }
        }

      }
    }

    @media only screen and (max-width: 1000px) {
      grid-column: 1 / span 2;
      padding: 20px;

      > article.container-noticias {
        flex-direction: column;

        > div.box-noticia {
          width: 100%;
          max-width: 600px;

          > .router-notic {
              flex-direction: row;

              > img {
                width: 35%;
              }

              > div.box-info-img {
                width: 65%;
              }
          }
        }
      }
    }

  }

  > aside.column-side {
    display: flex;
    flex-direction: column;

    > div.box-anunc-redes-sociais {
      position: sticky;
      top: 0;
      width: 80%;
      height: 500px;
      margin: 0 auto;

      > h3 {
        font-size: 20px;
        font-style: italic;
        font-weight: 700;
        padding: 15px;
        color: #03E338;
      }

        > div.container-redes-anunc {
          width: 100%;
          border: 1px solid red;
          height: 300px;

        }
        > div.container-redes-sociais {
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          gap: 10px;


          > .link-target-sociais{
            width: 32%;
            max-width: 100px;
            font-size: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            border-radius: 10px;
            color: #fff;
            transition: 200ms;
            position: relative;

            &:nth-of-type(1) {
              background-color: #3b5998;
            }
            &:nth-of-type(2) {
              background-color: #833AB4;
            }
            &:nth-of-type(3) {
              background-color: #075e54;
            }
            &:hover::after {
              content: "";
              width: 100%;
              height: 100%;
              position: absolute;
              background-color: rgba(0, 0, 0,.3);
              border-radius: 10px;
            }
          }

        }

    }
    @media only screen and (max-width: 1000px) {
        grid-column: 1 / span 2;
        justify-content: center;
        align-items: center;

        > div.box-anunc-redes-socias {
          position: static;
          margin: 0 auto;
        }
      }
  }

`;


export const Footer = styled.footer`
  width: 100%;
  background-color: #000000;
  color:white;

  > div.container-footer {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;


    & .links {
      color: #fff;
    }

    > div.box-img {
      max-width: 230px;

      > p {
        padding: 10px 0;
      }
      > img {
        width: 100%;
      }
    }

    > div.container-sportnet {
      display: flex;
      flex-direction: column;
      gap: 10px;

      > h4 {
        font-size: 20px;
      }

    }
    @media only screen and (max-width: 468px) {
      flex-direction: column;
      text-align: center;
    }
  }
`;
