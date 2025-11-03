import { useState } from "react";
import { Formacoes, TextoCompetencias, Stacks } from "./ComponentesFormacao";
import Container from "@/components/Container";
import Secao from "@/components/ContainerSecao";
import Titulo from "@/components/Titulo";
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
    };

    return (
        <Secao corDeFundo="var(--noir)" id="formacao">
            <Container>
                <Titulo
                    corDaBorda="linear-gradient(to right, transparent, var(--quatrieme-demie), transparent)"
                    corDoTexto="var(--troisieme)"
                >
                    Education
                </Titulo>
                <TextoCompetencias>
                    You can check below my academic trajectory
                </TextoCompetencias>
                <Formacoes>
                    {cards.map(card =>
                        <div className="minhas-formacoes" key={card.id}>
                            <h3 className="curso-nome">{card.curso}</h3>
                            <h2 className="instituicao-nome">
                                <a href="https://www2.ufjf.br/ufjf/" target="_blank">{card.instituição}</a>
                            </h2>
                            <span className="formacao-descricao">
                                <a href={card.link} target={card.link ? '_blank' : '_parent'}>
                                    <Markdown>Read more</Markdown><FaArrowRight size={20} className="arrow_more" />
                                </a>
                            </span>
                        </div>
                    )}
                </Formacoes>
                <Titulo
                    corDaBorda="linear-gradient(to right, transparent, var(--quatrieme-demie), transparent)"
                    corDoTexto="var(--troisieme)"
                >
                    Minha Stack
                </Titulo>
                <TextoCompetencias>
                    As a front-end web developer, I have knowledge on the following technologies
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
    );
};

export default Formacao;
