import { createContext, useState } from "react";

const initialState = {
    nome: "Digite o seu nome aqui...",
    email: "Digite o seu e-mail aqui...",
    mensagem: "Digite a sua mensagem aqui..."
};

export const ContextoContatoCriado = createContext();

const ContextoContato = ({ children }) => {

    const [placeHolders, setPlaceHolders] = useState(initialState);

    return (
        <ContextoContatoCriado.Provider value={[placeHolders, setPlaceHolders]}>
            {children}
        </ContextoContatoCriado.Provider>
    );
}

export default ContextoContato;
