import { styled } from "styled-components";

const Formacoes = styled.div`
    //max-width: 750px;
    margin: 4rem auto 0;
    color: var(--branco);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    div {
        padding: 2rem 4.5rem;
        border-radius: 16px;
        text-align: center;
        border: 2px solid var(--cinza-medio);
        width: fit-content;
        h3 {
            font-size: 1.4rem;
            font-weight: 700;
        }
        h2 {
            font-size: 1.6rem;
            font-weight: 700;
            margin: 15px 0;
        }
        p {
            font-size: 1.4rem;
            line-height: 1.5;
            a {
                text-decoration: underline;
                text-decoration-color: var(--ouro-escuro);
                text-decoration-thickness: 2px;
                color: var(--fourth-color);
                transition: all .3s ease-in;
                padding: 0;
                display: inline-block;
                &:hover {
                    text-decoration-color: var(--terciaria);
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        text-align: center;
        max-width: 90%;
        div {
            padding: 1.5rem;
        }
    }
`;

const Subtitulo = styled.h3`
    margin: 4rem 0 0;
    font-size: 2rem;
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-style: wavy;
    text-decoration-thickness: 3px;
    text-decoration-color: var(--terciaria);
    color: var(--branco);
`;

const TextoCompetencias = styled.p`
    max-width: 60%;
    font-size: 1.5rem;
    margin: 3rem auto 0;
    color: var(--branco);
    line-height: 1.5;

    @media screen and (max-width: 768px) {
        max-width: 90%;
    }
`;

const Stacks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2.2rem;
    margin-top: 3.5rem;
    padding: 0 .5rem;
`;

export { Formacoes, Subtitulo, TextoCompetencias, Stacks };
