import Navegacao from "./Navegacao";
import menu from "./ItensMenu";
import { useState } from "react";

const Menu = () => {

    const [enfase, setEnfase] = useState(menu);

    const menuOut = (id) => {
        const alvo = enfase.filter(item => item.id !== id);
        alvo.forEach(elem => {
            elem.classe = elem.classe === '' ? "enfase" : "";
        });
        setEnfase([...enfase]);
    };

    return (
        <>
            <Navegacao>
                <ol role="list">
                    {enfase.map(link =>
                        <li
                            key={link.id}
                            className={link.classe}
                            onMouseEnter={() => menuOut(link.id)}
                            onMouseLeave={() => menuOut(link.id)}
                        >
                            <a href={link.caminho} target="_parent">{link.nome}</a>
                        </li>
                    )}
                </ol>
            </Navegacao>
        </>
    );
};

export default Menu;
