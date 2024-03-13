import Navegacao from "./Navegacao";

const Menu = () => {

    const menu = [
        {
            nome: "Home",
            caminho: "/index.html"
        },
        {
            nome: "Sobre mim",
            caminho: "#sobre"
        },
        {
            nome: "Educação",
            caminho: "#formacao"
        },
        {
            nome: "Projetos",
            caminho: "#projetos"
        },
        {
            nome: "Contato",
            caminho: "#contato"
        }
    ];

    return (
        <>
            <Navegacao>
                <ol role="list">
                    {menu.map(link =>
                        <li key={link.nome}>
                            <a href={link.caminho} target="_parent">{link.nome}</a>
                        </li>
                    )}
                </ol>
            </Navegacao>
        </>
    );
}

export default Menu;
