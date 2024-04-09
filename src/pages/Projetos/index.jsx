import Container from "@/components/Container";
import Secao from "@/components/ContainerSecao";
import Titulo from "@/components/Titulo";
import ContainerProjetos from "./ContainerProjetos";
import { FaExternalLinkAlt } from "react-icons/fa";
import projetos from "@/assets/json/projetos.json";
import { useState } from "react";
import { TbArrowBack } from "react-icons/tb";
import Markdown from "react-markdown";
import { FaCode } from "react-icons/fa6";
import Paragrafo from "./Paragrafo";

const Projetos = () => {

    const [projects, setProjects] = useState(projetos);

    function rotacionar(id) {
        const alvo = projects.filter(projeto => projeto.id === id);
        alvo.forEach(objeto => {
            objeto.classe = objeto.classe === "" ? "animacao" : "";
        });
        setProjects([...projetos]);
    }

    return (
        <div id="projetos">
            <Secao corDeFundo="var(--branco)">
                <Container>
                    <Titulo corDaBorda="var(--primeira-cor)" corDoTexto="var(--segunda-cor)">Projetos</Titulo>
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
                                            <button className="rotacao" onClick={() => rotacionar(projeto.id)}>
                                                <TbArrowBack className="voltar" size={35} />
                                            </button>
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
