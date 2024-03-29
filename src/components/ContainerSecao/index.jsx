import { styled } from "styled-components";

const ContainerSecao = styled.section`
    text-align: center;
    padding: 5rem 0 5rem;
    background: ${props => props.$cordefundo};

    @media screen and (max-width: 768px) {
        padding: 4rem 0;
    }
`;

function Secao({ corDeFundo, children }) {
    return (
        <>
            <ContainerSecao $cordefundo={corDeFundo}>
                {children}
            </ContainerSecao>
        </>
    );
}

export default Secao;
