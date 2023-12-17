import { createGlobalStyle } from "styled-components";
import bg from "/src/images/bg.png";
import bg_2 from "/src/images/bg.jpg";

const EstilosGlobais = createGlobalStyle`
    :root {
        --preto: #000000;
        --preto-secundario: #121212;
        --cinza-escuro: #121212;
        --branco: #FFFFFF;
        --branco-secundario: #EEEEEE;
        --cor-primaria: #845ef7;
        --roxo-secundario: #b197fc;
        --cor-secundaria: #FFC719;
        --fonte-primaria: 'Roboto', sans-serif;
        --fonte-secundaria: 'Montserrat', sans-serif;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.2rem;
        background: var(--preto) url(${bg}) center / cover no-repeat fixed;
    }

    a {
        text-decoration: none;
        outline: none;
    }

    @media screen and (max-width: 960px) {
        body {
            background: var(--preto) url(${bg_2}) center / cover no-repeat fixed;
        }
    }
`;

export default EstilosGlobais;
