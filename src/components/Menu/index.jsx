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
                width: 20px;
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

function Menu() {

    const menu = [
        {
            nome: "HOME",
            caminho: "#"
        },
        {
            nome: "SOBRE MIM",
            caminho: "#sobre"
        },
        {
            nome: "FORMAÇÃO",
            caminho: "#formacao"
        },
        {
            nome: "PROJETOS",
            caminho: "#projetos"
        },
        {
            nome: "CONTATO",
            caminho: "#contato"
        }
    ]

    return (
        <>
            <Navegacao>
                <ol role="list">
                    {menu.map(link => <li key={link.nome}><a href={link.caminho} target="_parent">{link.nome}</a></li>)}
                </ol>
            </Navegacao>
        </>
    )
}

export default Menu
