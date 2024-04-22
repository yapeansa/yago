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
            font-size: 1.2rem;
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
                transition: all .2s ease-in-out;
            }
            &:hover {
                &::before {
                    color: var(--primeira-cor);
                }
            }
            a {
                text-decoration: none;
                color: var(--branco);
                position: relative;
                padding: .3rem 0;
                overflow: hidden;
                z-index: 1;
                transition: all .25s ease-out;
                text-transform: uppercase;
                border-bottom: 2px solid var(--primeira-cor);
                &::before {
                    content: '';
                    z-index: -1;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 100%;
                    background: var(--quinta-cor);
                    transition: all .25s ease-in-out;
                }
                &:hover {
                    color: var(--terceira-cor);
                    padding: .3rem .4rem .3rem 1.5rem;
                    border-color: transparent;
                    &::before {
                        width: 100%;
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
                    text-decoration-color: var(--primeira-cor);
                }
            }
        }
    }
`;

export default Navegacao;
