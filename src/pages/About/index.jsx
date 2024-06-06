import AboutInfo from "./AboutInfo";
import Container from "@/components/Container";
import Titulo from "@/components/Titulo";
import Secao from "@/components/ContainerSecao";
import me from "@/assets/images/me.jpg";

const About = () => {
    return (
        <Secao corDeFundo="var(--lavender)" id="sobre">
            <Container>
                <Titulo
                    corDaBorda="var(--cor-quinaria)"
                    corDoTexto="var(--preto)"
                >
                    Quem sou eu
                </Titulo>
                <AboutInfo>
                    <div className="text-intro">
                        <p>
                            Olá, meu nome é <span className="estilizado">Yago</span>! Sou um desenvolvedor <span className="estilizado">Front-end</span> em transição de carreira. Busco aplicar as habilidades e conhecimentos adquiridos da minha formação de <span className="estilizado">Matemático</span> ao mundo do desenvolvimento web. Autodidata e vindo de um ambiente que valoriza a pesquisa, prezo pela evolução constante dos meus conhecimentos e por compartilhar os mesmos com as pessoas ao meu redor.
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
