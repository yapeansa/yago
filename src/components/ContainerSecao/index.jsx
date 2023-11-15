import { styled } from "styled-components"

const ContainerSecao = styled.section`
    text-align: center;
    padding: 112px 0 124px;
    background: ${props => props.$cordefundo};
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
