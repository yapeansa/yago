import ContainerSended from "./EstilosEmail";
import { FaCheck } from "react-icons/fa";

const EmailEnviado = ({ enviado }) => {
    return (
        <ContainerSended $enviado={enviado}>
            <p style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: ".5rem"
            }}>
                <FaCheck /> E-mail enviado com sucesso!
            </p>
        </ContainerSended>
    );
};

export default EmailEnviado;
