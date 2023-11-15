import { styled } from "styled-components"

const Formacoes = styled.div`
    max-width: 60%;
    margin: 120px auto 0;
    color: var(--branco);
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 84px;
    div {
        h3 {
            font-size: 1.5rem;
            font-weight: 700;
        }
        h2 {
            font-size: 1.875rem;
            font-weight: 700;
            margin: 15px 0;
        }
        p {
            font-size: 1.5rem;
            a {
                text-decoration: underline;
                text-decoration-color: var(--cor-primaria);
                text-decoration-thickness: 2px;
                color: var(--branco);
                transition: all .3s ease-in;
                &:hover {
                    text-decoration-color: var(--cor-secundaria);
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        text-align: center;
        max-width: 80%;
    }
`

const Subtitulo = styled.h3`
    margin: 84px 0;
    font-size: 2rem;
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-style: wavy;
    text-decoration-thickness: 3px;
    text-decoration-color: var(--cor-secundaria);
    color: var(--branco);
`

const TextoCompetencias = styled.p`
    max-width: 60%;
    font-size: 1.5rem;
    margin: 0 auto;
    color: var(--branco);

    @media screen and (max-width: 768px) {
        max-width: 90%;
    }
`

const Stacks = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 84px;
`

export { Formacoes, Subtitulo, TextoCompetencias, Stacks }
