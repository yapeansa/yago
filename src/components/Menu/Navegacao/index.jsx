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
            font-size: 1.4rem;
            counter-increment: list;
            display: flex;
            gap: 2rem;
            color: var(--branco);
            align-items: center;
            &::before {
                content: counter(list) '.';
                width: 18px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: var(--terciaria);
                font-size: 3.75rem;
                transition: all .3s ease-in-out;
            }
            /* &:hover {
                &::before {
                    color: var(--terciaria);
                }
            } */
            a {
                text-decoration: underline;
                text-decoration-thickness: 2px;
                text-decoration-color: var(--fourth-color);
                color: var(--branco);
                position: relative;
                padding: 0 5px;
                overflow: hidden;
                z-index: 1;
                transition: color .3s ease-out;
                &::before {
                    content: '';
                    z-index: -1;
                    position: absolute;
                    top: 0;
                    right: -100%;
                    width: 100%;
                    height: 100%;
                    background: var(--ouro-escuro);
                    transition: all .3s ease-in-out;
                }
                &:hover {
                    color: var(--preto);
                    text-decoration-color: transparent;
                    &::before {
                        right: 0;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 960px) {
        padding: 0;
        ol {
            align-items: center;
            gap: 2rem;
            li {
                &::before {
                    content: '';
                    width: 0;
                    display: none;
                }
            }
        }
    }
`;

export default Navegacao;
