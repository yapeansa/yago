import { createGlobalStyle } from "styled-components"

const EstilosGlobais = createGlobalStyle`
    :root {
        --preto: #000000;
        --preto-secundario: #121212;
        --branco: #FFFFFF;
        --branco-secundario: #EEEEEE;
        --cor-primaria: #9400D3;
        --roxo-secundario: #bb60e2;
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
    }
`

export default EstilosGlobais
