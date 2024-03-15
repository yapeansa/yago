import { styled } from "styled-components";

const Cabecalho = styled.header`
    display: flex;
    width: 100%;
    min-height: 100vh;
    padding: 0;
    aside {
        flex-basis: 50%;
        display: flex;
        gap: 3rem;
        flex-direction: column;
        justify-content: center;
        padding: 2rem 0;
        .close-menu { display: none; }
    }
    .introducao {
        flex-basis: 50%;
        color: var(--branco);
        display: flex;
        align-items: center;
        padding: 2rem 0;
    }

    @media screen and (min-width: 961px) and (max-width: 1440px) {
        padding: 0 3rem;
    }

    @media screen and (max-width: 960px) {
        flex-direction: column;
        min-height: 100vh;
        padding: 0;
        position: relative;
        aside {
            height: 100vh;
            min-height: 100vh;
            gap: 4.5rem;
            align-items: center;
            background-color: var(--preto);
            position: absolute;
            width: 100%;
            left: -100%;
            transition: all .2s ease-in-out;
            z-index: 1;
            .close-menu {
                display: block;
                cursor: pointer;
                padding: .5rem;
                border: 2px solid var(--branco);
            }
        }
        .introducao {
            position: relative;
            background: rgba(0, 0, 0, .7);
            height: 100%;
            padding: 0;
        }
        .slide-menu {
            left: 0;
        }
    }
`;

export default Cabecalho;
