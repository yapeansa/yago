import { styled } from "styled-components"

const SecaoIntro = styled.section`
    font-family: var(--fonte-primaria);
    font-weight: 100;
    font-size: 62px;
    p {
        max-width: 70%;
        margin: 0 auto;
        line-height: 1.5;
        text-decoration: underline;
        text-decoration-thickness: 3px;
        text-decoration-color: var(--branco);
        text-align: right;
        .destaque {
            color: var(--cor-secundaria);
            font-weight: 700;
        }
    }

    @media screen and (max-width: 768px) {
        p {
            text-align: left;
        }
    }
`

function Intro() {
    return (
        <SecaoIntro>
            <p>Olá, mundo! Eu sou um <span className="destaque">desenvolvedor</span> web Front-end especializado no framework <span className="destaque">React</span>.</p>
        </SecaoIntro>
    )
}

export default Intro
