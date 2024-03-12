import { useState } from "react";
import { Formacoes, TextoCompetencias, Stacks } from "./ComponentesFormacao";
import Container from "../../components/Container";
import Secao from "../../components/ContainerSecao";
import Titulo from "../../components/Titulo";
import Markdown from "react-markdown";
import sociais from "./IconesStacks";
import cards from "./Educacao";

const Formacao = () => {

    const [socialSk, setSocialSk] = useState(sociais);

    const opacidade = (id) => {
        const encontraElemento = socialSk.filter(item => item.id !== id);
        console.log(encontraElemento);
        if (encontraElemento[0].classe === "") {
            encontraElemento.forEach(item => item.classe = "opacite");
            setSocialSk([...socialSk]);
        } else {
            encontraElemento.forEach(item => item.classe = "");
            setSocialSk([...socialSk]);
        }
    }

    return (
        <div id="formacao">
            <Secao corDeFundo="var(--quinaria)">
                <Container>
                    <Titulo corDaBorda="var(--ouro-escuro)" corDoTexto="var(--branco)">Educação</Titulo>
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
                                        <Markdown>{card.titulo}</Markdown>
                                    </a>
                                </span>
                            </div>
                        )}
                    </Formacoes>
                    <Titulo corDaBorda="var(--ouro-escuro)" corDoTexto="var(--branco)">Competências</Titulo>
                    <TextoCompetencias>
                        Como desenvolvedor Front-end, possuo competência nas seguintes tecnologias:
                    </TextoCompetencias>
                    <Stacks>
                        <ul className="icon-skill">
                            {sociais.map(item =>
                                <li key={item.id} className={item.classe}>
                                    <a href={item.path} target="_blank" onMouseEnter={() => opacidade(item.id)} onMouseLeave={() => opacidade(item.id)}>{item.nome}</a>
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
