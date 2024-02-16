import { Formacoes, Subtitulo, TextoCompetencias, Stacks } from "./ComponentesFormacao";
import Container from "../../components/Container";
import Secao from "../../components/ContainerSecao";
import Titulo from "../../components/Titulo";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoSass, IoLogoNodejs, IoLogoReact } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import Markdown from "react-markdown";

const Formacao = () => {

    const cards = [
        {
            id: 1,
            curso: 'Mestrado em andamento em Matemática.',
            instituição: 'Universidade Federal de Juiz de Fora, UFJF, Brasil.',
            titulo: 'Álgebras de Banach zLpd.',
            link: "http://lattes.cnpq.br/3138016508748811"
        },
        {
            id: 2,
            curso: 'Bacharel em Matemática.',
            instituição: 'Universidade Federal de Juiz de Fora, UFJF, Brasil.',
            titulo: 'Axioma da Escolha, Lema de Zorn e o Teorema de Zermelo:\n\n Aplicações e Equivalências.',
            link: 'https://www2.ufjf.br/matematica/wp-content/uploads/sites/393/2014/02/TCC_Yago-versao-final.pdf'
        }
    ];

    return (
        <div id="formacao">
            <Secao corDeFundo="var(--quinaria)">
                <Container>
                    <Titulo corDaBorda="var(--terciaria)" corDoTexto="var(--branco)">Minha formação</Titulo>
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
                    <Subtitulo>Competências</Subtitulo>
                    <TextoCompetencias>
                        Como desenvolvedor Front-end, possuo competência nas seguintes tecnologias:
                    </TextoCompetencias>
                    <Stacks>
                        <IoLogoHtml5 size={55} color="#f06529" />
                        <IoLogoCss3 size={55} color="#2965f1" />
                        <IoLogoSass size={55} color="#cc6699" />
                        <IoLogoJavascript size={55} color="#f0db4f" />
                        <IoLogoNodejs size={55} color="#68a063" />
                        <SiTypescript size={47} color="#007acc" />
                        <IoLogoReact size={55} color="#88dded" />
                    </Stacks>
                </Container>
            </Secao>
        </div>
    );
};

export default Formacao;
