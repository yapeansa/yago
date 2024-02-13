import AboutInfo from "./AboutInfo";
import Container from "../../components/Container";
import Titulo from "../../components/Titulo";
import Secao from "../../components/ContainerSecao";
import me from "/src/assets/images/me.jpg";

const About = ({ idade }) => {
    return (
        <div id="sobre">
            <Secao corDeFundo="var(--preto)">
                <Container>
                    <Titulo corDaBorda="var(--ouro-escuro)" corDoTexto="var(--branco)">Quem sou eu</Titulo>
                    <AboutInfo>
                        <p>Eu me chamo Yago Pereira e tenho {idade()} anos. Em 2021 adquiri o título de bacharel em Matemática pela <a href="http://ufjf.br" title="Universidade Federal de Juiz de Fora" target="_blank">UFJF</a> e atualmente sou discente do curso de Mestrado Acadêmico em Matemática nesta mesma instituição. Desde a adolescência possuo um fascínio por tecnologia no geral, o que me levou na época a estudar as linguagens <span className="estilizado">HTML</span> e <span className="estilizado">CSS</span> por conta própria. Me aperfeiçoei ainda mais nestas linguagens na intituição de ensino <a href="https://www.alura.com.br" target="_blank">Alura</a>, o que me levou a conhecer e me aprofundar na linguagem <span className="estilizado">Javascript</span> e, além disso, mergulhar no framework <span className="estilizado">React</span>.</p>
                        <img src={me} alt="Foto de Yago Pereira" />
                    </AboutInfo>
                </Container>
            </Secao>
        </div>
    );
};

export default About;
