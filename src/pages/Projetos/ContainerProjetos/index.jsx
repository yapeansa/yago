import { styled } from "styled-components";

const ContainerProjetos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    width: auto;
    padding: 0 1rem;
    .flip-card {
        flex: 0 0 30%;
        perspective: 1000px;
        width: 100%;
        height: 315px;
        background-color: transparent;
        .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform .5s ease-in-out;
            transform-style: preserve-3d;
            box-shadow: 0 3px 10px 2px #999;
            .flip-card-front {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                color: black;
                background-color: var(--segunda-cor);
                border: 2px solid var(--darker);
                cursor: pointer;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: all .5s ease-in-out;
                    pointer-events: none;
                }
            }
            .flip-card-back {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                background: var(--branco);
                color: var(--segunda-cor);
                transform: rotateY(180deg);
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding: 0 1rem;
                .info-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                    h1 {
                        color: var(--terceira-cor);
                        font-weight: 400;
                        font-size: 1.4rem;
                        padding-bottom: 4px;
                        position: relative;
                        text-transform: uppercase;
                        &::before {
                            content: '';
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            width: 100%;
                            height: 2px;
                            background: var(--cor-quinaria);
                        }
                    }
                    ul {
                        list-style: none;
                        display: flex;
                        gap: 1rem;
                        a {
                            display: flex;
                            align-items: center;
                            gap: .6rem;
                            text-transform: uppercase;
                            font-size: 1rem;
                            color: var(--preto);
                            padding: 8px 15px;
                            position: relative;
                            border-left: 3px solid var(--cor-secundaria);
                            border-right: 3px solid var(--cor-primaria);
                            &::before {
                                content: '';
                                position: absolute;
                                left: 0;
                                top: 0;
                                width: 100%;
                                height: 3px;
                                background: linear-gradient(to right, var(--cor-secundaria), var(--cor-primaria));
                                transition: .3s ease-in-out;
                                z-index: -1;
                            }
                            &::after {
                                content: '';
                                position: absolute;
                                left: 0;
                                bottom: 0;
                                width: 100%;
                                height: 3px;
                                background: linear-gradient(to right, var(--cor-secundaria), var(--cor-primaria));
                            }
                            &:hover {
                                &::before {
                                    height: 100%;
                                }
                            }
                        }
                    }
                }
                .aciona-rotacao {
                    position: absolute;
                    bottom: .5rem;
                    right: .5rem;
                    border: none;
                    background: linear-gradient(to bottom, var(--darker), var(--cinza-medio));
                    width: 3rem;
                    height: 3rem;
                    border-radius: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &:hover {
                        .voltar {
                            animation: spin .5s ease-in-out;
                        }
                    }
                    cursor: pointer;
                    .voltar {
                        color: var(--branco);
                    }
                }
            }
        }
    }

    .rotacionar { transform: rotateY(180deg); }

    .gray { filter: grayscale(100%) brightness(70%) saturate(180%); }

    @media screen and (min-width: 501px) and (max-width: 1000px) {
        .flip-card {
            flex-basis: 40%;
        }
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
        gap: 2rem;
        flex-wrap: nowrap;
        height: ${props => props.$tamanho};
        .flip-card {
            flex: 1 1 auto;
        }
    }
`;

export default ContainerProjetos;
