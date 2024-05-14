import { styled } from "styled-components";

const ContainerSended = styled.div`
    position: fixed;
    top: 2rem;
    right: 2rem;
    background: #4CBB17;
    color: var(--darker);
    padding: .6rem 1rem;
    display: ${props => props.$enviado.display};
    animation: ${props => props.$enviado.animation};
`;

export default ContainerSended;
