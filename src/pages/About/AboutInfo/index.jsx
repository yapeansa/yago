import { styled } from "styled-components";

const AboutInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    padding: 0 2.5rem;
    color: var(--cinza-escuro);
    .text-intro {
        flex: 0 1 55%;
        z-index: 1;
        p {
            text-align: center;
            font-size: 1.9rem;
            border-left: .2rem solid var(--terceira);
            border-right: .2rem solid var(--segunda);
            /* border: .2rem solid #ccc; */
            padding: 3.6rem;
            line-height: 1.5;
            position: relative;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: .2rem;
                background: linear-gradient(to right, var(--terceira), var(--segunda));
            }
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: .2rem;
                background: linear-gradient(to right, var(--terceira), var(--segunda));
            }
            /* border-radius: 1.2rem; */
            a {
                border-bottom: 2px solid var(--primeira-cor);
                color: var(--preto);
                transition: all .3s ease-in;
            }
            .estilizado {
                font-weight: 700;
                color: var(--deuxieme);
                padding: 0 .3rem;
                position: relative;
                overflow: hidden;
                &::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 35%;
                    background: var(--quatrieme-demie);
                    z-index: -1;
                    transition: all .3s ease-in-out;
                }
                &:hover {
                    &::before {
                        height: 100%;
                    }
                }
            }
        }
    }
    .minha-foto {
        flex: 0 1 25%;
        img {
            max-width: 100%;
            border: 1px solid var(--cinza-medio);
            border-radius: 100%;
            padding: 1rem;
        }
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        gap: 3rem;
        margin-top: 3rem;
        .text-intro {
            order: 2;
            flex: 1 1 auto;
            p {
                border-radius: 0;
                border: none;
                padding: 0;
                box-shadow: none;
                text-align: center;
            }
        }
        .minha-foto {
            order: 1;
            flex: 1 1 auto;
            img {
                max-width: 70%;
            }
        }
    }
`;

export default AboutInfo;
