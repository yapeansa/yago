import { styled } from "styled-components"

const AboutInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    padding: 2rem 2.5rem 0;
    color: var(--cinza-escuro);
    .text-intro {
        flex: 0 1 55%;
        z-index: 1;
        p {
            text-align: left;
            padding: 3rem 3rem 0;
            font-size: 1.9rem;
            border: .15rem solid #ccc;
            border-top: none;
            border-bottom: none;
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
        p:first-child {
            border: .15rem solid #ccc;
            border-bottom: none;
        }
        p:last-child {
            border: .15rem solid #ccc;
            border-top: none;
            padding-bottom: 3rem;
        }
    }
    .minha-foto {
        flex: 0 1 25%;
        img {
            max-width: 100%;
            border: 1px solid #ccc;
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
`

export default AboutInfo
