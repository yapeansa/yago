import { styled } from "styled-components";
import Container from "../../components/Container";
import Secao from "../../components/ContainerSecao";
import Titulo from "../../components/Titulo";
import ContainerProjetos from "./ContainerProjetos";
import { FaExternalLinkAlt } from "react-icons/fa";
import projetos from "./projetos.json";
import { useState } from "react";
import { TbArrowBack } from "react-icons/tb";
import Markdown from "react-markdown";
import { FaCode } from "react-icons/fa6";
import bege from "../../assets/images/bg.jpg";

const Paragrafo = styled.p`
    color: var(--segunda-cor);
    font-size: 1.3rem;
    margin: 3.5rem 0 2.5rem;
    line-height: 1.5;
`;

const Projetos = () => {

    const [projects, setProjects] = useState(projetos);

    function rotacionar(id) {
        const alvo = projects.filter(projeto => projeto.id === id);
        if (alvo[0].classe === "") {
            alvo[0].classe = "animacao";
            setProjects([...projetos]);
        } else {
            alvo[0].classe = "";
            setProjects([...projetos]);
        }
    }

    return (
        <div id="projetos">
            <Secao corDeFundo="var(--branco)">
                <Container>
                    <Titulo corDaBorda="var(--quinta-cor)" corDoTexto="var(--segunda-cor)">Projetos</Titulo>
                    <Paragrafo>Aqui estão alguns dos meus projetos.</Paragrafo>
                    <ContainerProjetos $tamanho={`${projects.length * 336}px`}>
                        {projects.map(projeto =>
                            <div key={projeto.id} className="flip-card">
                                <div className={`flip-card-inner ${projeto.classe}`}>
                                    <div className="flip-card-front" onClick={() => rotacionar(projeto.id)}>
                                        <img src={projeto.imagem} alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="info-card">
                                            <h1>{projeto.nome}</h1>
                                            <Markdown>{projeto.descricao}</Markdown>
                                            <ul>
                                                <li>
                                                    <a href={projeto.repositorio} target="_blank">Source <FaCode /></a>
                                                </li>
                                                <li>
                                                    <a href={projeto.caminho} target="_blank">Visitar <FaExternalLinkAlt /></a>
                                                </li>
                                            </ul>
                                            <TbArrowBack className="voltar" size={35} onClick={() => rotacionar(projeto.id)} />
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
