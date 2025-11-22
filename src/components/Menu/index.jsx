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

    const navigate = (e, id) => {
        e.preventDefault();
        const alvo = enfase.filter(item => item.id === id);
        const obj_name = alvo[0].caminho;
        const obj_target = document.getElementById(obj_name);
        obj_target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                            <a href="" onClick={(e) => navigate(e, link.id)}>{link.nome}</a>
                        </li>
                    )}
                </ol>
            </Navegacao>
        </>
    );
};

export default Menu;
