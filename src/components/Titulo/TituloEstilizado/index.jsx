import { styled } from "styled-components";

const TituloEstilizado = styled.h2`
    font-family: var(--fonte-secundaria);
    font-weight: 700;
    font-size: 2rem;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
    padding: 15px 0;
    color: ${props => props.$cordotexto ? props.$cordotexto : '#000'};
    &::before {
        content: '<';
        position: absolute;
        left: -2.5rem;
        top: .3rem;
        color: var(--primeira-cor);
        font-family: var(--fonte-primaria);
        font-weight: normal;
        font-size: 3rem;
    }
    &::after {
        content: '/>';
        position: absolute;
        right: -4rem;
        top: .3rem;
        color: var(--primeira-cor);
        font-family: var(--fonte-primaria);
        font-weight: normal;
        font-size: 3rem;
    }
`;

export default TituloEstilizado;
