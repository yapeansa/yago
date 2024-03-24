import { createGlobalStyle } from "styled-components";
import bg from "/src/assets/images/al_1.png";
import bg_2 from "/src/assets/images/al_t.png";

const EstilosGlobais = createGlobalStyle`
    :root {
        --fonte-primaria: 'Roboto', sans-serif;
        --fonte-secundaria: 'Montserrat', sans-serif;

        --primeira-cor: #FAED26;
        --segunda-cor: #46344E;
        --terceira-cor: #564F6F;
        --quarta-cor: #4C495D;
        --quinta-cor: #D1D7E0;

        --preto: #121212;
        --branco: #FFF;

        --cinza: #222;
        --cinza-medio: #333;
        --quinaria: #000000;
        


        --branco-secundario: #EEEEEE;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }

    @keyframes oscillating {
        0% { top: .5rem; }
        50% { top: -.5rem; }
        100% { top: .5rem; }
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
        background: var(--quinaria) url(${bg}) center / cover no-repeat fixed;
        &::-webkit-scrollbar {
            width: .6rem;
        }
        &::-webkit-scrollbar-thumb {
            background: var(--cinza);
        }
        &::-webkit-scrollbar-track {
            background: var(--quinaria);
        }
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
