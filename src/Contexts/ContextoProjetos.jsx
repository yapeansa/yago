import { createContext, useState, useEffect } from "react";

export const ProjetosGaleria = createContext();

const ContextoProjetos = ({ children }) => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/yapeansa/yago/main/src/assets/json/projetos.json')
            .then(resposta => resposta.json())
            .then(dados => setProjects(dados));
    }, []);

    return (
        <ProjetosGaleria.Provider value={[projects, setProjects]}>
            {children}
        </ProjetosGaleria.Provider>
    );
};

export default ContextoProjetos;
