import { styled } from "styled-components";

const ContainerProjetos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.5rem;
    width: auto;
    padding: 0 1rem;
    .flip-card {
        flex-basis: 30%;
        perspective: 1000px;
        width: 100%;
        height: 315px;
        background-color: transparent;
        /* &:hover {
            .flip-card-inner {
                transform: rotateY(180deg);
            }
        } */
        .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform .8s ease-in-out;
            transform-style: preserve-3d;
            box-shadow: 0 0 10px 1px #000;
            .flip-card-front {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                color: black;
                background: #000;
                padding: 3px;
                cursor: pointer;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: fit;
                }
            }
            .flip-card-back {
                position: absolute;
                width: 100%;
                height: 100%;
                border: 3px solid #000;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                background: linear-gradient(to top, #000, #1e1e1e);
                color: white;
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
                    h1 { color: var(--terciaria); }
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
                            border: 2px solid var(--ouro-escuro);
                            background: linear-gradient(to right, #FFA500, #ffc04c);
                            padding: 6px 15px;
                            transition: all .3s ease-in-out;
                            border-radius: 16px;
                            &:hover {
                                background: linear-gradient(to top, #FFA500, #ffc04c);
                                color: var(--quinaria)
                            }
                        }
                    }
                }
                .voltar {
                    position: absolute;
                    bottom: .5rem;
                    right: .5rem;
                    cursor: pointer;
                    color: var(--branco);
                }
            }
        }
    }

    .animacao { transform: rotateY(180deg); }

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
    }
`;

export default ContainerProjetos;
