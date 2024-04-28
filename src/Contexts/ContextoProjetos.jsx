import { createContext, useState, useEffect } from "react";

export const ProjetosGaleria = createContext();

const ContextoProjetos = ({ children }) => {

    const [projects, setProjects] = useState([]);

    async function pegarDados() {
        const dados = await fetch('https://raw.githubusercontent.com/yapeansa/yago/main/src/assets/json/projetos.json');
        const resposta = await dados.json();
        setProjects(resposta);
    }

    useEffect(() => {
        pegarDados();
    }, []);

    return (
        <ProjetosGaleria.Provider value={[projects, setProjects]}>
            {children}
        </ProjetosGaleria.Provider>
    );
};

export default ContextoProjetos;
