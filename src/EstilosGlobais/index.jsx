import { createGlobalStyle } from "styled-components";
import bg from "@/assets/images/bg.jpg";
import bg_2 from "@/assets/images/bg_2.jpg";

const EstilosGlobais = createGlobalStyle`
    :root {
        --fonte-primaria: 'Roboto', sans-serif;
        --fonte-secundaria: 'Montserrat', sans-serif;
        --cor-primaria: #FFC107;
        --cor-secundaria: #F44336;
        --cor-terciaria: #00BCD4;
        --cor-quaternaria: #1F2833;
        --cor-quinaria: #8A2BE2;
        --darker: #0B0C10;
        --lavender: #E6E6FA;
        --branco: #FFFFFF;

        /* Lavender: #E6E6FA
        Lilac: #C8A2C8
        Violet: #8A2BE2
        Mauve: #BA55D3
        Plum: #8E4585
        Amethyst: #9966CC
        Orchid: #DA70D6
        Magenta: #FF00FF */

        --cinza: #222;
        --cinza-medio: #333;
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
            font-size: 1.2rem;
            background: var(--darker) url(${bg}) center / cover no-repeat fixed;
            &::-webkit-scrollbar {
                width: .6rem;
            }
            &::-webkit-scrollbar-thumb {
                background: var(--cinza);
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
