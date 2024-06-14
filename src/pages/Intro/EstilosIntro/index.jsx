import { styled } from "styled-components";

const SecaoIntro = styled.section`
    font-family: var(--fonte-primaria);
    font-weight: 100;
    p {
        max-width: 80%;
        font-size: 5.3rem;
        margin: 0 0 0 auto;
        color: var(--troisieme);
        line-height: 1.8;
        text-align: right;
        text-shadow: 0 0 5px var(--darker);
        .corpo-t {
            text-decoration: underline;
            text-decoration-thickness: 2px;
            text-decoration-color: var(--troisieme);
        }
        .destaque {
            color: var(--quatrieme);
            background-color: rgba(0, 0, 0, .5);
            font-weight: 700;
            text-shadow: none;
            padding: 0 .3rem;
            display: inline-block;
            line-height: 1;
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
            max-width: 90%;
            font-size: 3.7rem;
            text-decoration-thickness: 2px;
        }
        .aparecer-social {
            display: flex;
        }
        .drop-menu {
            position: absolute;
            top: 2rem;
            right: 2rem;
            cursor: pointer;
            display: block;
            padding: .5rem;
            border: .2rem solid var(--quatrieme);
            color: var(--troisieme);
        }
    }
`;

export default SecaoIntro;
