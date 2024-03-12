import { createGlobalStyle } from "styled-components";
import bg from "/src/assets/images/al_1.png";
import bg_2 from "/src/assets/images/al_t.png";

const EstilosGlobais = createGlobalStyle`
    :root {
        --preto: #121212;
        --cinza: #222;
        --cinza-medio: #333;
        --quinaria: #000000;
        --cinza-claro: #CCCCCC;
        --ouro-medio: #FFB90F;
        --ouro-escuro: #FFA500;
        --terciaria: #6A5ACD;
        --third-color: #7FFFD4;
        --branco: #FFFFFF;

        --rosa: #3d4dff;

        --branco-secundario: #EEEEEE;
        --fonte-primaria: 'Roboto', sans-serif;
        --fonte-secundaria: 'Montserrat', sans-serif;

        --second-color: #D3D3D3;
        --fourth-color: #FFF5E1;

        --primeiro: #9C27B0  #FFEB3B;
        --segundo: #90CAF9  #CDDC39;
        --terceiro: #757575  #424242;
        --quarto: #F48FB1  #1976D2;
        
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
