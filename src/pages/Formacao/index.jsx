import { Formacoes, Subtitulo, TextoCompetencias, Stacks } from "./ComponentesFormacao"
import Container from "../../components/Container"
import Secao from "../../components/ContainerSecao"
import Titulo from "../../components/Titulo"
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoSass, IoLogoNodejs, IoLogoReact } from "react-icons/io5"

function Formacao() {

    const cards = [
        {
            curso: 'Mestrado em andamento em Matemática.',
            instituição: 'Universidade Federal de Juiz de Fora, UFJF, Brasil.',
            titulo: 'Álgebras de Banach zLpd.',
            link: "http://lattes.cnpq.br/3138016508748811"
        },
        {
            curso: 'Graduação em Matemática.',
            instituição: 'Universidade Federal de Juiz de Fora, UFJF, Brasil.',
            titulo: 'Axioma da Escolha, Lema de Zorn e o Teorema de Zermelo: Aplicações e Equivalências.',
            link: 'https://www2.ufjf.br/matematica/wp-content/uploads/sites/393/2014/02/TCC_Yago-versao-final.pdf'
        }
    ]

    return (
        <div id="formacao">
            <Secao corDeFundo="var(--preto-secundario)">
                <Container>
                    <Titulo corDaBorda="var(--cor-secundaria)" corDoTexto="var(--branco)">Minha formação</Titulo>
                    <TextoCompetencias>
                        Logo abaixo você pode conferir a minha trajetória acadêmica.
                    </TextoCompetencias>
                    <Formacoes>
                        {cards.map(card =>
                            <div key={card.titulo}>
                                <h3>{card.curso}</h3>
                                <h2>{card.instituição}</h2>
                                <p><a href={card.link} target={card.link ? '_blank' : '_parent'}>{card.titulo}</a></p>
                            </div>
                        )}
                    </Formacoes>
                    <Subtitulo>Competências</Subtitulo>
                    <TextoCompetencias>
                        Como desenvolvedor Front-end, possuo competência nas seguintes tecnologias:
                    </TextoCompetencias>
                    <Stacks>
                        <IoLogoHtml5 size={70} color="#f06529" />
                        <IoLogoCss3 size={70} color="#2965f1" />
                        <IoLogoSass size={70} color="#cc6699" />
                        <IoLogoJavascript size={70} color="#f0db4f" />
                        <IoLogoNodejs size={70} color="#68a063" />
                        <IoLogoReact size={70} color="#88dded" />
                    </Stacks>
                </Container>
            </Secao>
        </div>
    )
}

export default Formacao
