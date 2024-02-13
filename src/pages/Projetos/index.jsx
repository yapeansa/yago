import { styled } from "styled-components";
import Container from "../../components/Container";
import Secao from "../../components/ContainerSecao";
import Titulo from "../../components/Titulo";
import ContainerProjetos from "./ContainerProjetos";
import projetos from "./projetos.json";

const Paragrafo = styled.p`
    color: var(--branco);
    font-size: 1.5rem;
    margin: 3.5rem 0;
    line-height: 1.5;
`;

const Projetos = () => {

    return (
        <div id="projetos">
            <Secao corDeFundo="var(--first-color)">
                <Container>
                    <Titulo corDaBorda="var(--preto)" corDoTexto="var(--branco)">Projetos</Titulo>
                    <Paragrafo>Aqui estão alguns dos meus projetos.</Paragrafo>
                    <ContainerProjetos>
                        {projetos.map(projeto =>
                            <div className="flip-card" key={projeto.id}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={projeto.imagem} alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="info-card">
                                            <h1>{projeto.nome}</h1>
                                            <p>{projeto.descricao}</p>
                                            <ul>
                                                <li>
                                                    <a href={projeto.repositorio} target="_blank">Repositório</a>
                                                </li>
                                                <li>
                                                    <a href={projeto.caminho} target="_blank">Visitar</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </ContainerProjetos>
                </Container>
            </Secao>
        </div>
    );
};

export default Projetos;
