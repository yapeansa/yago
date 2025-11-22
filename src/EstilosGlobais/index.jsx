import { createGlobalStyle } from "styled-components";
import bg from "@/assets/images/bg.jpg";
import bg_2 from "@/assets/images/bg_2.jpg";

const EstilosGlobais = createGlobalStyle`
    :root {
        font-size: 62.5%;
        --fonte-primaria: 'Roboto', sans-serif;
        --fonte-secundaria: 'Montserrat', sans-serif;

        --primeira: #FFBF00;
        --segunda: #8A2BE2;
        --terceira: #462be2;
        --quarta: ;
        --preto: #000;
        --branco: #FFF;

        --premiere: #FFBF00;
        --deuxieme: #141414;
        --troisieme: #f4f2f2;
        --quatrieme: #8A2BE2;
        --quatrieme-demie: #8A2BE2;
        --noir: #000000;

        --cor-quaternaria: #1F2833;
        --darker: #0B0C10;
        --cinza-medio: #222;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }

    @keyframes spin {
        from { transform: rotateZ(0deg); }
        to { transform: rotateZ(360deg); }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        body {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 1.6rem;
            background: var(--darker) url(${bg}) center / cover no-repeat fixed;
            &::-webkit-scrollbar {
                width: .6rem;
            }
            &::-webkit-scrollbar-thumb {
                background: var(--cinza-medio);
            }
            &::-webkit-scrollbar-track {
                background: var(--darker);
            }
            a {
                text-decoration: none;
                outline: none;
            }
        }
    }

    @media screen and (max-width: 960px) {
        html {
            body {
                background: var(--darker) url(${bg_2}) center / cover no-repeat fixed;
            }
        }
    }
`;

export default EstilosGlobais;
