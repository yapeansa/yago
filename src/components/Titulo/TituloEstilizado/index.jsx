import { styled } from "styled-components";

const TituloEstilizado = styled.h2`
    font-family: var(--fonte-secundaria);
    font-weight: 700;
    font-size: 3.2rem;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
    padding: 1rem 0;
    color: ${props => props.$cordotexto ? props.$cordotexto : '#000'};
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        margin-left: calc(-60% / 2);
        bottom: 0;
        width: 60%;
        height: .2rem;
        background: ${props => props.$cordaborda ? props.$cordaborda : '#000'};
    }
`;

export default TituloEstilizado;
