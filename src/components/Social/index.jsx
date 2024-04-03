import redesSociais from "./LinksSociais";
import { useState } from "react";
import SocialNetwork from "./SocialNetwork";

const Social = () => {

    const [mySocial, setMySocial] = useState(redesSociais);

    const lightsOut = (id) => {
        const alvo = mySocial.filter(item => item.id !== id);
        alvo.forEach((elemento) => {
            elemento.classe = elemento.classe === '' ? "lights-out" : "";
        });
        setMySocial([...mySocial]);
    };

    return (
        <SocialNetwork className="aparecer-social">
            <ul>
                {redesSociais.map(link =>
                    <li key={link.id} className={link.classe}>
                        <a
                            href={link.path}
                            target="_blank"
                            onMouseEnter={() => lightsOut(link.id)}
                            onMouseLeave={() => lightsOut(link.id)}
                        >
                            {link.label}
                        </a>
                    </li>
                )}
            </ul>
        </SocialNetwork>
    );
}

export default Social;
