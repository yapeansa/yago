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
        content: '<';
        position: absolute;
        left: -2rem;
        top: .5rem;
        color: var(--primeira-cor);
        font-family: var(--fonte-primaria);
        font-weight: normal;
        font-size: 2.7rem;
    }
    &::after {
        content: '/>';
        position: absolute;
        right: -3.1rem;
        top: .5rem;
        color: var(--primeira-cor);
        font-family: var(--fonte-primaria);
        font-weight: normal;
        font-size: 2.7rem;
    }
`;

export default TituloEstilizado;
