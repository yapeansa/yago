import { styled } from "styled-components";

const SecaoIntro = styled.section`
    font-family: var(--fonte-primaria);
    font-weight: 100;
    p {
        max-width: 80%;
        font-size: 3.4rem;
        margin: 0 0 0 auto;
        line-height: 1.8;
        text-decoration: underline;
        text-decoration-thickness: 3px;
        text-decoration-color: var(--branco);
        text-align: right;
        .destaque {
            color: var(--cor-quinaria);
            font-weight: 700;
            font-style: italic;
        }
    }
    .drop-menu { display: none; }
    .aparecer-logo, .aparecer-social { display: none; }

    @media screen and (min-width: 961px) and (max-width: 1440px) {
        p {
            max-width: 90%;
        }
    }

    @media screen and (max-width: 960px) {
        font-size: 2.5rem;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 3rem;
        .aparecer-logo { display: inline-block; }
        p {
            text-align: center;
            margin: 0 auto;
            max-width: 80%;
            font-size: 2rem;
            text-decoration-thickness: 2px;
        }
        .aparecer-social {
            display: flex;
        }
        .drop-menu {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            cursor: pointer;
            display: block;
            padding: .5rem;
            border: 2px solid var(--branco);
            color: var(--quinta-cor);
        }
    }
`;

export default SecaoIntro;
