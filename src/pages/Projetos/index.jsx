import { styled } from "styled-components";
import Container from "../../components/Container";
import Secao from "../../components/ContainerSecao";
import Titulo from "../../components/Titulo";

const Paragrafo = styled.p`
    color: var(--branco);
    font-size: 1.5rem;
    margin: 3.5rem 0 0;
    line-height: 1.5;
`;

function Projetos() {
    return (
        <div id="projetos">
            <Secao corDeFundo="var(--first-color)">
                <Container>
                    <Titulo corDaBorda="var(--preto)" corDoTexto="var(--branco)">Projetos</Titulo>
                    <Paragrafo>Aqui estão alguns dos meus projetos.</Paragrafo>
                </Container>
            </Secao>
        </div>
    );
}

export default Projetos;
