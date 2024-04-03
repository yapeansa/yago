import { styled } from "styled-components";

const EstilosScrollTop = styled.div`
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    display: ${props => props.$display};
    animation-name: ${props => props.$animacao};
    animation-duration: .3s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    a {
        display: block;
        background: var(--primeira-cor);
        padding: 1.4rem 1.2rem .4rem;
    }
`;

export default EstilosScrollTop;
