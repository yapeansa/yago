import Navegacao from "./Navegacao";
import menu from "./ItensMenu";

const Menu = () => {
    return (
        <>
            <Navegacao>
                <ol role="list">
                    {menu.map(link =>
                        <li key={link.id}>
                            <a href={link.caminho} target="_parent">{link.nome}</a>
                        </li>
                    )}
                </ol>
            </Navegacao>
        </>
    );
}

export default Menu;
