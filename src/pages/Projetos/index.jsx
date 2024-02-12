import { styled } from "styled-components";
import Container from "../../components/Container";
import Secao from "../../components/ContainerSecao";
import Titulo from "../../components/Titulo";
import projetos from "./projetos.json";

const Paragrafo = styled.p`
    color: var(--branco);
    font-size: 1.5rem;
    margin: 3.5rem 0;
    line-height: 1.5;
`;

const ContainerProjetos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    .flip-card {
        flex-basis: 30%;
        perspective: 1000px;
        width: 100%;
        height: 300px;
        background-color: transparent;
        &:hover {
            .flip-card-inner {
                transform: rotateY(180deg);
            }
        }
        .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.8s;
            transform-style: preserve-3d;
            .flip-card-front {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                background-color: #bbb;
                color: black;
                img {
                    border: 4px solid #3e3574;
                    width: 100%;
                    height: 300px;
                    object-fit: fit;
                }
            }
            .flip-card-back {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                background-color: #3e3574;
                color: white;
                transform: rotateY(180deg);
                display: flex;
                align-items: center;
                justify-content: center;
                div { display: flex; flex-direction: column; gap: 1rem; }
            }
        }
    }
    .rotacionar {}
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
                                        <div>
                                            <h1>{projeto.nome}</h1>
                                            <p>{projeto.descricao}</p>
                                            <p>{projeto.caminho}</p>
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
