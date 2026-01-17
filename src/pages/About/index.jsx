import AboutInfo from "./AboutInfo"
import Container from "@/components/Container"
import Titulo from "@/components/Titulo"
import Secao from "@/components/ContainerSecao"
import me from "@/assets/images/me.jpg"

const About = () => {
    return (
        <Secao corDeFundo="var(--branco)" id="sobre">
            <Container>
                <Titulo
                    corDaBorda="linear-gradient(to right, var(--terceira), var(--segunda))"
                    corDoTexto="var(--deuxieme)"
                >
                    About Me
                </Titulo>
                <AboutInfo>
                    <div className="text-intro">
                        <p>
                            Sou um profissional metódico e detalhista, com perfil técnico e analítico. Minha abordagem é fundamentada na precisão, na organização e na busca constante pela qualidade no que faço. Tenho facilidade para lidar com sistemas, dados e processos complexos, sempre com paciência e persistência para resolver problemas de forma eficaz.
                        </p>
                        <p>
                            No ambiente de trabalho, valorizo a clareza, a consistência e a entrega de resultados confiáveis. Sou comprometido com minhas tarefas e mantenho o foco mesmo em projetos de longo prazo. Acredito que a excelência está nos detalhes, e por isso dedico atenção cuidadosa a cada etapa do processo.
                        </p>
                        <p>
                            Além das habilidades técnicas, busco construir relações profissionais sólidas e positivas, sempre com respeito e discrição. Estou em constante desenvolvimento para equilibrar minha natural cautela com maior flexibilidade e capacidade de adaptação, sem abrir mão da minha essência: ser alguém em quem se pode confiar para fazer bem feito.
                        </p>
                    </div>
                    <div className="minha-foto">
                        <img src={me} alt="Foto de Yago Pereira" />
                    </div>
                </AboutInfo>
            </Container>
        </Secao>
    )
}

export default About
