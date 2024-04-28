import { styled } from "styled-components";

const Formacoes = styled.div`
    margin: 3rem auto 2rem;
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
        .curso-nome {
            font-size: 1.4rem;
            font-weight: normal;
            //color: var(--quinta-cor);
            background: linear-gradient(to right, var(--sexta-cor), var(--quinta-cor));
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .instituicao-nome {
            font-size: 1.6rem;
            font-weight: 700;
            margin: 15px 0;
            color: var(--primeira-cor);
        }
        .formacao-descricao {
            font-size: 1.4rem;
            line-height: 1.5;
            a {
                color: var(--fourth-color);
                font-size: 1.22rem;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: .6rem;
                text-transform: uppercase;
                position: relative;
                padding: .4rem .2rem .2rem;
                transition: all .2s ease-in-out;
                z-index: 1;
                width: fit-content;
                margin: 0 auto;
                font-weight: 700;
                overflow: hidden;
                .arrow_more {
                    color: var(--quinta-cor);
                    transition: all .2s ease-in-out;
                }
                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    //margin-right: -7.5%;
                    bottom: 0;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(to left, var(--primeira-cor), var(--sexta-cor));
                    transition: all .3s ease-in-out;
                    z-index: -1;
                }
                &:hover {
                    color: var(--terceira-cor);
                    border-color: var(--terceira-cor);
                    .arrow_more { color: var(--terceira-cor); }
                    &::before {
                        width: 100%;
                        height: 100%;
                        //background: var(--quinta-cor);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        text-align: center;
        max-width: 90%;
        flex-direction: column;
        margin: 0 auto;
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
        padding: 0 1rem;
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
        filter: grayscale(100%);
    }
`;

export { Formacoes, TextoCompetencias, Stacks };
