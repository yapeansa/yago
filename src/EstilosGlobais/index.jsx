import { createGlobalStyle } from "styled-components";
import bg from "@/assets/images/bg.jpg";
import bg_2 from "@/assets/images/bg_2.jpg";

const EstilosGlobais = createGlobalStyle`
    :root {
        --fonte-primaria: 'Roboto', sans-serif;
        --fonte-secundaria: 'Montserrat', sans-serif;
        --primeira-cor: #7e22ce;
        --segunda-cor: #1F2833;
        --terceira-cor: #0B0C10;
        --quarta-cor: #4C495D;
        --quinta-cor: #FFC719;
        --sexta-cor: #ff6738;
        --setima-cor: #c084fc;
        --branco: #FFF;
        --cinza: #222;
        --cinza-medio: #333;
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

    @keyframes backgroundSlide {
        0% { background-position: 0% -50%; }
        50% { background-position: 100% -50%; }
        100% { background-position: 0% -50%; }
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
            background: var(--terceira-cor) url(${bg}) center / cover no-repeat fixed;
            &::-webkit-scrollbar {
                width: .6rem;
            }
            &::-webkit-scrollbar-thumb {
                background: var(--cinza);
            }
            &::-webkit-scrollbar-track {
                background: var(--terceira-cor);
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
                background: var(--terceira-cor) url(${bg_2}) center / cover no-repeat fixed;
            }
        }
    }
`;

export default EstilosGlobais;
