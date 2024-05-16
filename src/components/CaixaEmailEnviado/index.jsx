import ContainerSended from "./EstilosEmail";
import { FaCheck } from "react-icons/fa";

const EmailEnviado = ({ enviado }) => {

    const estilizacao = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        margin: "0 auto",
        gap: ".5rem",
        background: "#4CBB17",
        color: "var(--darker)",
        padding: ".6rem 1rem",
    };

    return (
        <ContainerSended $enviado={enviado}>
            <p style={{...estilizacao}}>
                <FaCheck /> E-mail enviado com sucesso!
            </p>
        </ContainerSended>
    );
};

export default EmailEnviado;
