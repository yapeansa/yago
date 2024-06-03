import { styled } from "styled-components";

const TituloEstilizado = styled.h2`
    font-family: var(--fonte-secundaria);
    font-weight: 700;
    font-size: 1.9rem;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
    padding: 15px 0;
    color: ${props => props.$cordotexto ? props.$cordotexto : '#000'};
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        margin-left: calc(-40% / 2);
        bottom: 0;
        width: 40%;
        height: 4px;
        background: ${props => props.$cordaborda ? props.$cordaborda : '#000'};
    }
`;

export default TituloEstilizado;
