import Navegacao from "./Navegacao"

function Menu() {

    const menu = [
        {
            nome: "HOME",
            caminho: "/index.html"
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
