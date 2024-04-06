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
        //width: fit-content;
        .curso-nome {
            font-size: 1.4rem;
            font-weight: normal;
            color: var(--branco);
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
                transition: all .3s ease-in;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: .6rem;
                text-transform: uppercase;
                position: relative;
                padding: .2rem 0 .2rem;
                transition: all .3s ease-in-out;
                z-index: 1;
                width: fit-content;
                margin: 0 auto;
                font-weight: 700;
                &::before {
                    content: '';
                    position: absolute;
                    right: 50%;
                    //margin-right: -7.5%;
                    bottom: 0;
                    width: 15%;
                    height: 2px;
                    background: var(--quinta-cor);
                    transition: all .3s ease-in-out;
                    z-index: -1;
                }
                &:hover {
                    &::before {
                        width: 100%;
                        right: 0;
                        margin-right: 0;
                        margin-left: 0;
                        background: var(--quinta-cor);
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
        
    }
`;

export { Formacoes, TextoCompetencias, Stacks };
