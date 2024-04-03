import { createContext, useState } from "react";

const initialState = {
    mostrarBotao: false,
    animar: false
};

export const ContextoBotaoCriado = createContext();

const ContextoBotao = ({ children }) => {

    const [acoesBotao, setAcoesBotao] = useState(initialState);

    return (
        <ContextoBotaoCriado.Provider value={[acoesBotao, setAcoesBotao]}>
            {children}
        </ContextoBotaoCriado.Provider>
    );
};

export default ContextoBotao;
