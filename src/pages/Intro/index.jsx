import { styled } from "styled-components";

const SecaoIntro = styled.section`
    font-family: var(--fonte-primaria);
    font-weight: 100;
    font-size: 3.4rem;
    p {
        max-width: 90%;
        margin: 0 0 0 auto;
        line-height: 1.8;
        text-decoration: underline;
        text-decoration-thickness: 3px;
        text-decoration-color: var(--branco);
        text-align: right;
        .destaque {
            color: var(--third-color);
            font-weight: 700;
            text-shadow: 0 0 5px var(--preto);
        }
    }

    @media screen and (max-width: 960px) {
        font-size: 2.5rem;
        p {
            text-align: left;
            margin: 0 auto;
            max-width: 80%;
        }
    }
`;

function Intro() {
    return (
        <SecaoIntro>
            <p>Olá, mundo! Eu sou um <span className="destaque">desenvolvedor</span> web Front-end especializado no framework <span className="destaque">React</span>.</p>
        </SecaoIntro>
    );
}

export default Intro;
