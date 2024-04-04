import { useState } from "react";
import { Formacoes, TextoCompetencias, Stacks } from "./ComponentesFormacao";
import Container from "../../components/Container";
import Secao from "../../components/ContainerSecao";
import Titulo from "../../components/Titulo";
import Markdown from "react-markdown";
import sociais from "./IconesStacks";
import cards from "./Educacao";
import { FaArrowRight } from "react-icons/fa6";

const Formacao = () => {

    const [socialSk, setSocialSk] = useState(sociais);

    const opacidade = (id) => {
        const alvo = socialSk.filter(item => item.id !== id);
        alvo.forEach((elemento) => {
            elemento.classe = elemento.classe === "" ? "opacite" : "";
            setSocialSk([...socialSk]);
        });
    }

    return (
        <div id="formacao">
            <Secao corDeFundo="var(--terceira-cor)">
                <Container>
                    <Titulo corDaBorda="var(--quinta-cor)" corDoTexto="var(--branco)">Educação</Titulo>
                    <TextoCompetencias>
                        Logo abaixo você pode conferir a minha trajetória acadêmica.
                    </TextoCompetencias>
                    <Formacoes>
                        {cards.map(card =>
                            <div className="minhas-formacoes" key={card.id}>
                                <h3 className="curso-nome">{card.curso}</h3>
                                <h2 className="instituicao-nome">{card.instituição}</h2>
                                <span className="formacao-descricao">
                                    <a href={card.link} target={card.link ? '_blank' : '_parent'}>
                                        <Markdown>Saiba mais</Markdown><FaArrowRight />
                                    </a>
                                </span>
                            </div>
                        )}
                    </Formacoes>
                    <Titulo corDaBorda="var(--quinta-cor)" corDoTexto="var(--branco)">Minha Stack</Titulo>
                    <TextoCompetencias>
                        Como desenvolvedor Front-end, possuo competência nas seguintes tecnologias:
                    </TextoCompetencias>
                    <Stacks>
                        <ul className="icon-skill">
                            {sociais.map(item =>
                                <li key={item.id} className={item.classe}>
                                    <a
                                        href={item.path}
                                        target="_blank"
                                        title={item.titulo}
                                        onMouseEnter={() => opacidade(item.id)}
                                        onMouseLeave={() => opacidade(item.id)}
                                    >
                                        {item.nome}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </Stacks>
                </Container>
            </Secao>
        </div>
    );
};

export default Formacao;
