import { styled } from "styled-components";

const EstilosScrollTop = styled.div`
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    display: ${props => props.$display};
    animation-name: ${props => props.$animacao};
    animation-duration: .3s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    z-index: 1000;
    a {
        display: block;
        background: var(--noir);
        border: .2rem solid var(--premiere);
        padding: 1.8rem 1.3rem .5rem;
    }
`;

export default EstilosScrollTop;
