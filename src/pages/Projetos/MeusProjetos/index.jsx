import Markdown from "react-markdown";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbArrowBack } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";

const MeusProjetos = ({ conteudoCard }) => {
    return (
        // definindo a estrutura dos cards projetos
        <div
            className={`flip-card ${conteudoCard.projeto.escalaCinza}`}
            onMouseEnter={() => conteudoCard.tomDeCinza(conteudoCard.projeto.id)}
            onMouseLeave={() => conteudoCard.tomDeCinza(conteudoCard.projeto.id)}
        >
            <div className={`flip-card-inner ${conteudoCard.projeto.classe}`}>
                <div className="flip-card-front" onClick={() => conteudoCard.rotacionar(conteudoCard.projeto.id)}>
                    <img
                        src={conteudoCard.projeto.imagem}
                        alt={conteudoCard.projeto.nome}
                    />
                </div>
                <div className="flip-card-back">
                    <div className="info-card">
                        <h1>{conteudoCard.projeto.nome}</h1>
                        <Markdown>{conteudoCard.projeto.descricao}</Markdown>
                        <ul>
                            <li>
                                <a href={conteudoCard.projeto.repositorio} target="_blank">Source <FaCode /></a>
                            </li>
                            <li>
                                <a href={conteudoCard.projeto.caminho} target="_blank">Visitar <FaExternalLinkAlt /></a>
                            </li>
                        </ul>
                        <button className="aciona-rotacao" onClick={() => conteudoCard.rotacionar(conteudoCard.projeto.id)}>
                            <TbArrowBack className="voltar" size={35} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeusProjetos;
