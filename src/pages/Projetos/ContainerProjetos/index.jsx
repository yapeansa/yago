import { styled } from "styled-components";

const ContainerProjetos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    width: auto;
    padding: 0 1rem;
    .flip-card {
        flex-basis: 30%;
        perspective: 1000px;
        width: 100%;
        height: 300px;
        background-color: transparent;
        &:hover {
            .flip-card-inner {
                transform: rotateY(180deg);
            }
        }
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
                background-color: #bbb;
                color: black;
                img {
                    border: 4px solid #3e3574;
                    width: 100%;
                    height: 300px;
                    object-fit: fit;
                }
            }
            .flip-card-back {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                background-color: #3e3574;
                color: white;
                transform: rotateY(180deg);
                display: flex;
                align-items: center;
                justify-content: flex-start;
                text-align: left;
                padding: 0 1.5rem;
                .info-card {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    ul {
                        list-style: none;
                        display: flex;
                        gap: 1rem;
                        a {
                            display: block;
                            color: var(--branco);
                            border: 1px solid var(--branco);
                            padding: 6px 15px;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
        gap: 2rem;
        height: 960px;
    }
`;

export default ContainerProjetos;
