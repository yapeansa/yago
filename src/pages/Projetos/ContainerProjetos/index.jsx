import { styled } from "styled-components";

const ContainerProjetos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3.5rem;
    width: auto;
    padding: 0 .5rem;
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
            .flip-card-front {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                color: black;
                background-color: var(--deuxieme);
                border: .3rem solid var(--noir);
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
                background: var(--troisieme);
                color: var(--deuxieme);
                transform: rotateY(180deg);
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding: 0 1rem;
                border: .3rem solid var(--noir);
                .info-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                    h1 {
                        color: var(--deuxieme);
                        font-weight: 400;
                        font-size: 2.4rem;
                        position: relative;
                        text-transform: uppercase;
                        text-decoration: underline;
                        text-decoration-thickness: .3rem;
                        text-decoration-color: var(--quatrieme);
                        text-decoration-style: wavy;
                    }
                    p {
                        font-size: 1.8rem;
                        margin: 1.5rem 0 1rem;
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
                            font-size: 1.52rem;
                            color: var(--troisieme);
                            padding: 8px 15px;
                            position: relative;
                            border: 3px solid var(--troisieme);
                            background: var(--quatrieme);
                            border-radius: 10px;
                            transition: all .3s ease-in-out;
                            &:hover {
                                border-color: var(--quatrieme);
                                color: var(--deuxieme);
                                background: var(--troisieme);
                            }
                        }
                    }
                }
                .aciona-rotacao {
                    position: absolute;
                    bottom: 1.2rem;
                    right: 1.2rem;
                    border: none;
                    background: transparent;
                    border: 2px solid var(--quatrieme);
                    width: 4rem;
                    height: 4rem;
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
                        color: var(--deuxieme);
                    }
                }
            }
        }
    }

    .rotacionar { transform: rotateY(180deg); }

    .gray { filter: contrast(50%) saturate(0%); }

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
