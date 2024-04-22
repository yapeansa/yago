import AboutInfo from "./AboutInfo";
import Container from "@/components/Container";
import Titulo from "@/components/Titulo";
import Secao from "@/components/ContainerSecao";
import me from "@/assets/images/me.jpg";

const About = ({ idade }) => {
    return (
        <div id="sobre">
            <Secao corDeFundo="var(--branco)">
                <Container>
                    <Titulo corDaBorda="var(--primeira-cor)" corDoTexto="var(--preto)">Quem sou eu</Titulo>
                    <AboutInfo>
                        <div className="text-intro">
                            <p>
                                Olá, meu nome é <span className="estilizado">Yago Pereira</span> e tenho {idade()} anos. Sou um desenvolvedor front-end com habilidade autodidata, com grande disposição em aprender novas tecnologias e com sólidos conhecimentos em HTML, CSS e Javascript. Me aperfeiçoei no desenvolvimento front-end na intituição de ensino <a href="https://www.alura.com.br" target="_blank">Alura</a> onde pude me aprofundar na linguagem <span className="estilizado">Javascript</span> e mergulhar no framework <span className="estilizado">React</span>.
                            </p>
                        </div>
                        <div className="minha-foto">
                            <img src={me} alt="Foto de Yago Pereira" />
                        </div>
                    </AboutInfo>
                </Container>
            </Secao>
        </div>
    );
};

export default About;
