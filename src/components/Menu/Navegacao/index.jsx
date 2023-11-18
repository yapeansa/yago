import { styled } from "styled-components"

const Navegacao = styled.nav`
    ol {
        list-style-type: none;
        counter-reset: list;
        display: grid;
        li {
            font-family: var(--fonte-secundaria);
            font-weight: normal;
            font-size: 1.75rem;
            counter-increment: list;
            display: flex;
            gap: 45px;
            color: var(--branco);
            align-items: center;
            &::before {
                content: counter(list) '.';
                width: 18px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: var(--cor-primaria);
                font-size: 3.75rem;
            }
            a {
                text-decoration: none;
                color: var(--branco);
                position: relative;
                padding: 0 5px;
                overflow: hidden;
                z-index: 1;
                transition: all .3s ease-in;
                &::before {
                    content: '';
                    z-index: -1;
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: var(--cor-secundaria);
                    transition: all .3s ease-in;
                }
                &:hover {
                    color: var(--preto);
                    &::before {
                        left: 0;
                    }
                }
            }
        }
    }
`

export default Navegacao
