import { styled } from "styled-components";
import redesSociais from "./LinksSociais";
import { useState } from "react";

const SocialNetwork = styled.div`
    ul {
        list-style-type: none;
        display: flex;
        gap: 30px;
        li {
            transition: all .3s ease-in-out;
            .social {
                color: var(--fourth-color);
                transition: all .3s ease-in-out;
                &:hover {
                    color: var(--ouro-escuro);
                }
            }
        }
    }
    .lights-out {
        opacity: .4;
    }
`;

const Social = () => {

    const [mySocial, setMySocial] = useState(redesSociais);

    const lightsOut = (id) => {
        const alvo = mySocial.filter(item => item.id !== id);
        alvo.forEach((elemento) => {
            if(elemento.classe === "") {
                elemento.classe = "lights-out";
            } else {
                elemento.classe = "";
            }
        });
        setMySocial([...mySocial]);
    };

    return (
        <SocialNetwork>
            <ul>
                {redesSociais.map(link =>
                    <li key={link.id} className={link.classe}>
                        <a href={link.path} target="_blank" onMouseEnter={() => lightsOut(link.id)} onMouseLeave={() => lightsOut(link.id)}>{link.label}</a>
                    </li>
                )}
            </ul>
        </SocialNetwork>
    );
}

export default Social;
