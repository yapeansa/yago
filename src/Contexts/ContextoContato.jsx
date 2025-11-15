import { createContext, useState } from "react";

const initialState = {
    nome: "Type your name here...",
    email: "Type your e-mail here...",
    mensagem: "Type your message here..."
};

export const ContextoContatoCriado = createContext();

const ContextoContato = ({ children }) => {

    const [placeHolders, setPlaceHolders] = useState(initialState);

    return (
        <ContextoContatoCriado.Provider value={[placeHolders, setPlaceHolders]}>
            {children}
        </ContextoContatoCriado.Provider>
    );
};

export default ContextoContato;
