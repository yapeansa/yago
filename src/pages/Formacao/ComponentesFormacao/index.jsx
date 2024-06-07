import { styled } from "styled-components";

const Formacoes = styled.div`
    margin: 3rem auto 2rem;
    color: var(--troisieme);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .minhas-formacoes {
        flex-basis: 50%;
        padding: 2rem 2rem;
        text-align: center;
        &:last-child { border: none; }
        .curso-nome {
            font-size: 1.4rem;
            font-weight: normal;
            color: var(--premiere);
            display: inline-block;
        }
        .instituicao-nome {
            font-size: 1.6rem;
            font-weight: 700;
            margin: 1.3rem 0;
            color: var(--troisieme);
        }
        .formacao-descricao {
            font-size: 1.4rem;
            line-height: 1.5;
            a {
                color: var(--troisieme);
                font-size: 1.2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: .6rem;
                text-transform: uppercase;
                position: relative;
                padding: .4rem .2rem .2rem;
                transition: all .3s ease-in-out;
                z-index: 1;
                width: fit-content;
                margin: 0 auto;
                padding: .5rem 1rem .4rem;
                font-weight: 700;
                overflow: hidden;
                border: 2px solid var(--premiere);
                border-radius: 8px;
                .arrow_more {
                    color: var(--premiere);
                    transition: all .3s ease-in-out;
                }
                &:hover {
                    color: var(--deuxieme);
                    background: var(--premiere);
                    .arrow_more { color: var(--deuxieme); }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        text-align: center;
        max-width: 90%;
        flex-direction: column;
        margin: 0 auto 1.7rem;
        .minhas-formacoes {
            padding: 1.5rem;
        }
    }
`;

const TextoCompetencias = styled.p`
    max-width: 60%;
    font-size: 1.3rem;
    margin: 3rem auto 0;
    color: var(--troisieme);
    line-height: 1.5;

    @media screen and (max-width: 768px) {
        max-width: 90%;
        margin: 1.5rem auto 0;
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
        padding: 0 1rem;
        list-style: none;
        li {
            transition: all .5s ease-in-out;
            a {
                transition: all .5s ease-in-out;
            }
        }
    }
    .opacite {
        opacity: .4;
        filter: grayscale(100%);
    }
`;

export { Formacoes, TextoCompetencias, Stacks };
