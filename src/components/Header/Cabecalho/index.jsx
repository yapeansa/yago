import { styled } from "styled-components"

const Cabecalho = styled.header`
    display: flex;
    width: 100%;
    min-height: 100vh;
    padding: 0 3rem;
    aside {
        flex-basis: 50%;
        display: flex;
        gap: 4.5rem;
        flex-direction: column;
        justify-content: center;
        padding: 2rem 0;
    }
    .introducao {
        flex-basis: 50%;
        color: var(--branco);
        display: flex;
        align-items: center;
        padding: 2rem 0;
    }

    @media screen and (max-width: 960px) {
        flex-direction: column;
        min-height: auto;
        padding: 0;
        aside {
            height: 100vh;
            min-height: 100vh;
            gap: 2.4rem;
            align-items: center;
            background-color: rgba(0, 0, 0, .7);
        }
        .introducao {
            padding: 4rem 0;
            height: auto;
        }
    }
`

export default Cabecalho
