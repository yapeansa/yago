import { styled } from "styled-components"

const ContainerSecao = styled.section`
    text-align: center;
    padding: 112px 0 124px;
    background: ${props => props.$cordefundo};

    @media screen and (max-width: 768px) {
        padding: 4rem;
    }
`

function Secao({ corDeFundo, children }) {
    return (
        <>
            <ContainerSecao $cordefundo={corDeFundo}>
                {children}
            </ContainerSecao>
        </>
    )
}

export default Secao
