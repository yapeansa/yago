import { styled } from "styled-components";

const ContainerSended = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: ${props => props.$enviado.display};
    animation: ${props => props.$enviado.animation};
`;

export default ContainerSended;
