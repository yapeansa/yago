import { createGlobalStyle } from "styled-components";
import bg from "/src/images/bg.png";
import bg_2 from "/src/images/bg.jpg";

const EstilosGlobais = createGlobalStyle`
    :root {
        --preto: #0c0a17;
        --preto-secundario: #121212;
        --cinza-escuro: #121212;
        --branco: #FFFFFF;
        --branco-secundario: #EEEEEE;
        --fonte-primaria: 'Roboto', sans-serif;
        --fonte-secundaria: 'Montserrat', sans-serif;

        --first-color: #6A5ACD;
        --second-color: #D3D3D3;
        --third-color: #7FFFD4;
        --fourth-color: #FFF5E1;
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
