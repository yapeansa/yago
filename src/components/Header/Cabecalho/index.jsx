import { styled } from "styled-components"
import bg from "/src/images/bg.jpg"

const Cabecalho = styled.header`
    display: flex;
    width: 100%;
    min-height: 100vh;
    background: url(${bg}) center / cover no-repeat fixed;
    aside {
        flex: 50%;
        background: rgba(0, 0, 0, .8);
        display: flex;
        gap: 4.5rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
    }
    .introducao {
        flex: 50%;
        color: var(--branco);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        min-height: auto;
        aside {
            height: 100vh;
            min-height: 100vh;
            gap: 2.4rem;
        }
        .introducao {
            padding: 4rem 0;
            height: auto;
        }
    }
`

export default Cabecalho
