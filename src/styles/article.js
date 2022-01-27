import styled from "styled-components";

export const Div = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  > section.container-artigo {
    display: flex;
    flex-direction: column;

    > article {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 15px;

      h1 {
        width: 95%;
        font-size: clamp(15px, 35px, 55px);
        line-height: 1.4;
        padding: 20px 0;

      }

      > div.escritor-artigo {
        max-width: 300px;
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 10px 0 30px 0;

        > img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: #fff;
          border-radius: 50%;
          object-fit: cover;
          object-position: 0% 20%;

        }
      }

      > div.box-thumb {
        width: 94%;
        justify-content: center;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        border-bottom: 1px solid #000000;

        > strong {
          padding: 20px;
        }
        > img {
          width: 100%;

        }
      }
    }
  }

  > section.container-principal {
    display: grid;
    grid-template-columns: 1fr 5fr 2fr;
    position: relative;
    padding: 40px 0;


    > div.box-redes-sociais {

      > div {
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3px;

        > a.links-redes {
          font-size: 30px;
          color: #03E338;

        }
      }
    }

    > main.content-principal {
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      > article.article-texto {
        display: flex;
        gap: 20px;
        flex-direction: column;
        font-size: 20px;
        font-weight: 100;
        text-align: justify !important;

      }
      > article.article-img-post {
        width: 100%;
        justify-content: center;
        display: flex;

        > div.container-imagem {
          width: 100%;
          padding-bottom: 10px;

          > img {
            width: 100%;
            background-color: #fff;
            /* @media only screen and (max-width: 868px) {
              max-height: 450px;
            } */
          }
          > span {
            text-transform: uppercase;
            padding: 20px;

          }
        }

      }

    > section.artigos-relacionados {
      > h3 {
        padding: 25px 0;
      }

      > div.box-noticias {
        display: flex;
        flex-direction: column;
        gap: 15px;

        > .link-noticia {
          width: 100%;
          max-width: 450px;
          display: flex;
          flex-direction: row;
          align-items: center;
          box-shadow: 1px 1px 5px #eee,
          -1px -1px 5px #eee;
          overflow: hidden;
          background-color: #fff;
          color: #000000;
          transition: color 200ms;

          > img {
            width: 35%;
          }
          > h4 {
            padding: 10px;
          }
          &:hover {
            color: #03E338;
          }
        }
      }
    }

    }
    > aside.box-anuncio {
      > div.container-anuncio {
        width: 100%;
        height: 200px;
        background-color: #fff;
        opacity: .1;
        position: sticky;
        top: 0;
      }
    }

    @media only screen and (max-width: 868px) {
      grid-template-columns: 1fr;
      padding: 10px 0;
      > div.box-redes-sociais {
        grid-column: 1 / span 3;

        > div {
          flex-direction: row;
          gap: 10px;
        }

      }
      > main.content-principal {
        grid-column: 1 / span 3;


        > article.article-texto {
          padding: 10px 10px;
          font-size: clamp(16px, 20px, 2.2vw);

        }

      }
    }
  }
`;


