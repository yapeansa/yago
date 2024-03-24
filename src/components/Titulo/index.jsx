import styled from "styled-components";

const TituloEstilizado = styled.h2`
    font-family: var(--fonte-secundaria);
    font-weight: 700;
    font-size: 2rem;
    text-transform: uppercase;
    position: relative;
    display: block;
    padding: 15px 0;
    color: ${props => props.$cordotexto ? props.$cordotexto : '#000'};
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        margin-left: -42px;
        bottom: 0;
        width: 84px;
        height: 4px;
        background-color: ${props => props.$cordaborda};
    }
`;

const Titulo = ({ corDaBorda, corDoTexto, children }) => {
    return (
        <TituloEstilizado $cordaborda={corDaBorda} $cordotexto={corDoTexto}>
            {children}
        </TituloEstilizado>
    );
};

export default Titulo;
