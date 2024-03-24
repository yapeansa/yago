import { styled } from "styled-components";

const Formacoes = styled.div`
    margin: 3rem auto .3rem;
    color: var(--branco);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .minhas-formacoes {
        flex-basis: 50%;
        padding: 2rem 2rem;
        text-align: center;
        border-right: 1px solid var(--cinza-medio);
        &:last-child { border: none; }
        //width: fit-content;
        .curso-nome {
            font-size: 1.4rem;
            font-weight: 700;
            color: var(--quinta-cor);
        }
        .instituicao-nome {
            font-size: 1.6rem;
            font-weight: 700;
            margin: 15px 0;
        }
        .formacao-descricao {
            font-size: 1.4rem;
            line-height: 1.5;
            a {
                text-decoration: underline;
                text-decoration-color: var(--quinta-cor);
                text-decoration-thickness: 2px;
                color: var(--fourth-color);
                transition: all .3s ease-in;
                padding: 0;
                display: inline-block;
                &:hover {
                    text-decoration-color: var(--primeira-cor);
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        text-align: center;
        max-width: 90%;
        flex-direction: column;
        .minhas-formacoes {
            padding: 1.5rem;
            border: none;
        }
    }
`;

const TextoCompetencias = styled.p`
    max-width: 60%;
    font-size: 1.3rem;
    margin: 3rem auto 0;
    color: var(--branco);
    line-height: 1.5;

    @media screen and (max-width: 768px) {
        max-width: 90%;
    }
`;

const Stacks = styled.div`
    .icon-skill {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 2.2rem;
        margin-top: 3.5rem;
        padding: 0 .5rem;
        list-style: none;
        li {
            transition: all .3s ease;
            a {
                transition: all .3s ease;
            }
        }
    }
    .opacite {
        opacity: .4;
        
    }
`;

export { Formacoes, TextoCompetencias, Stacks };
