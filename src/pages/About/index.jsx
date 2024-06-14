import AboutInfo from "./AboutInfo";
import Container from "@/components/Container";
import Titulo from "@/components/Titulo";
import Secao from "@/components/ContainerSecao";
import me from "@/assets/images/me.jpg";

const About = () => {
    return (
        <Secao corDeFundo="var(--troisieme)" id="sobre">
            <Container>
                <Titulo
                    corDaBorda="var(--quatrieme)"
                    corDoTexto="var(--deuxieme)"
                >
                    Quem sou eu
                </Titulo>
                <AboutInfo>
                    <div className="text-intro">
                        <p>
                            Olá, meu nome é <strong className="estilizado">Yago</strong>. Sou um desenvolvedor <strong className="estilizado">Front-end</strong> em transição de carreira. Busco aplicar as habilidades e conhecimentos adquiridos da minha formação de <strong className="estilizado">Matemático</strong> ao mundo do desenvolvimento web. Autodidata e vindo de um ambiente que valoriza a pesquisa, prezo pela evolução constante dos meus conhecimentos e por compartilhar os mesmos com as pessoas ao meu redor.
                        </p>
                    </div>
                    <div className="minha-foto">
                        <img src={me} alt="Foto de Yago Pereira" />
                    </div>
                </AboutInfo>
            </Container>
        </Secao>
    );
};

export default About;
