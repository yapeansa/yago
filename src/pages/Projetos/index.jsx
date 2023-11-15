import { styled } from "styled-components"
import Container from "../../components/Container"
import Secao from "../../components/ContainerSecao"
import Titulo from "../../components/Titulo"

const Paragrafo = styled.p`
    color: var(--branco);
    font-size: 1.5rem;
    margin: 84px 0 0;
`

function Projetos() {
    return (
        <div id="projetos">
            <Secao corDeFundo="var(--cor-primaria)">
                <Container>
                    <Titulo corDaBorda="var(--roxo-secundario)" corDoTexto="var(--branco)">Projetos</Titulo>
                    <Paragrafo>Aqui estão alguns dos meus projetos.</Paragrafo>
                </Container>
            </Secao>
        </div>
    )
}

export default Projetos
