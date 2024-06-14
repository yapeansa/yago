import { styled } from "styled-components";

const ContainerSecao = styled.section`
    text-align: center;
    padding: 6.2rem 0;
    background: ${props => props.$cordefundo};

    @media screen and (max-width: 768px) {
        padding: 4rem 0;
    }
`;

const Secao = ({ corDeFundo, children, id }) => {
    return (
        <ContainerSecao $cordefundo={corDeFundo} id={id}>
            {children}
        </ContainerSecao>
    );
};

export default Secao;
