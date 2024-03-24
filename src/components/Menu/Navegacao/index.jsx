import { styled } from "styled-components";

const Navegacao = styled.nav`
    padding-left: 1rem;
    ol {
        list-style-type: none;
        counter-reset: list;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        li {
            font-family: var(--fonte-secundaria);
            font-weight: normal;
            font-size: 1.3rem;
            counter-increment: list;
            display: flex;
            gap: 2rem;
            color: var(--branco);
            align-items: center;
            transition: all .3s ease-in-out;
            &::before {
                content: counter(list);
                width: 18px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: var(--segunda-cor);
                font-size: 3.75rem;
                transition: all .3s ease-in-out;
            }
            &:hover {
                &::before {
                    color: var(--quinta-cor);
                }
            }
            a {
                text-decoration: none;
                color: var(--branco);
                position: relative;
                padding: .3rem 0;
                overflow: hidden;
                z-index: 1;
                transition: all .3s ease-out;
                text-transform: uppercase;
                &::before {
                    content: '';
                    z-index: -1;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 100%;
                    height: 2px;
                    background: var(--primeira-cor);
                    transition: all .3s ease-in-out;
                }
                &:hover {
                    color: var(--terceira-cor);
                    text-decoration-color: transparent;
                    padding: .3rem .4rem .3rem 1.5rem;
                    &::before {
                        height: 100%;
                    }
                }
            }
        }
    }
    .enfase { opacity: .4; }

    @media screen and (max-width: 960px) {
        padding: 0;
        ol {
            gap: 1rem;
            align-items: center;
            li {
                font-size: 1.5rem;
                &::before {
                    content: '';
                    width: 0;
                    display: none;
                }
                a {
                    text-decoration-color: var(--terciaria);
                }
            }
        }
    }
`;

export default Navegacao;
