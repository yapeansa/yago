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
                border: 2px solid var(--segunda-cor);
                cursor: pointer;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: fit;
                    //filter: blur(5px);
                    transition: all .3s ease-in-out;
                    &:hover {
                        filter: blur(0);
                        
                    }
                }
            }
            .flip-card-back {
                position: absolute;
                width: 100%;
                height: 100%;
                border: 2px solid #000;
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
                            border: 2px solid var(--primeira-cor);
                            background: var(--branco);
                            padding: 6px 15px;
                            transition: all .3s ease-in-out;
                            //border-radius: 16px;
                            &:hover {
                                background: var(--primeira-cor);
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
                    color: var(--segunda-cor);
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
        .flip-card {
            flex: 1 1 auto;
        }
    }
`;

export default ContainerProjetos;
