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
        height: 320px;
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
            transition: transform 0.8s;
            transform-style: preserve-3d;
            .flip-card-front {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                color: black;
                background: #453c83;
                padding: 4px;
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
                border: 4px solid #362f66;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                background-color: #453c83;
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
                            color: var(--branco);
                            border: 2px solid var(--ouro-escuro);
                            padding: 6px 15px;
                            transition: all .3s ease-in-out;
                            border-radius: 16px;
                            &:hover {
                                background: var(--ouro-escuro);
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

    @media screen and (max-width: 500px) {
        flex-direction: column;
        gap: 2rem;
        flex-wrap: nowrap;
        height: ${props => props.$tamanho};
    }
`;

export default ContainerProjetos;
