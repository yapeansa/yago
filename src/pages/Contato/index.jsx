import Secao from "../../components/ContainerSecao";
import Titulo from "../../components/Titulo";
import ContainerContato from "./ContainerContato";
import Container from "../../components/Container";
import { SiGmail } from "react-icons/si";
import { ContextoContatoCriado } from "../../Contexto Contato";
import { useContext } from "react";

const Contato = () => {

    const [placeHolders, setPlaceHolders] = useContext(ContextoContatoCriado);

    function aoInteragir(campo) {
        switch (campo) {
            case 'nome':
                if (placeHolders.nome !== '') {
                    placeHolders.nome = '';
                    setPlaceHolders({...placeHolders});
                } else {
                    placeHolders.nome = 'Digite o seu nome aqui...';
                    setPlaceHolders({...placeHolders});
                }
                break;
            case 'email':
                if (placeHolders.email !== '') {
                    placeHolders.email = '';
                    setPlaceHolders({...placeHolders});
                } else {
                    placeHolders.email = 'Digite o seu e-mail aqui...';
                    setPlaceHolders({...placeHolders});
                }
                break;
            default:
                if (placeHolders.mensagem !== '') {
                    placeHolders.mensagem = '';
                    setPlaceHolders({...placeHolders});
                } else {
                    placeHolders.mensagem = 'Digite a sua mensagem aqui...';
                    setPlaceHolders({...placeHolders});
                }
                break;
        }
    }

    return (
        <div id="contato">
            <Secao corDeFundo="var(--terceira-cor)">
                <Container>
                    <Titulo corDaBorda="var(--primeira-cor)" corDoTexto="var(--branco)">Contato</Titulo>
                    <ContainerContato>
                        <p>Pronto para trazer vida ao seu projeto ou para me incluir no seu time? Você pode me enviar um e-mail através do seguinte endereço:</p>
                        <a href="mailto:yago.pereira@estudante.ufjf.br">
                            <SiGmail size={30} color="var(--primeira-cor)" /> yago.pereira@estudante.ufjf.br
                        </a>
                        <p>Ou preencha o formulário abaixo com seus dados e sua mensagem.</p>
                        <form method="post" action="https://formspree.io/f/xnqlkqnk">
                            <label>
                                <input
                                    type="text"
                                    name="nome"
                                    onFocus={() => aoInteragir('nome')}
                                    onBlur={() => aoInteragir('nome')}
                                    placeholder={placeHolders.nome}
                                    required
                                />
                            </label>
                            <label>
                                <input
                                    type="email"
                                    name="email"
                                    onFocus={() => aoInteragir('email')}
                                    onBlur={() => aoInteragir('email')}
                                    placeholder={placeHolders.email}
                                    required
                                />
                            </label>
                            <label>
                                <textarea
                                    name="mensagem"
                                    rows="6"
                                    onFocus={() => aoInteragir()}
                                    onBlur={() => aoInteragir()}
                                    placeholder={placeHolders.mensagem}
                                    required></textarea>
                            </label>
                            <div>
                                <input type="reset" value="Limpar" />
                                <input type="submit" value="Enviar" />
                            </div>
                        </form>
                    </ContainerContato>
                </Container>
            </Secao>
        </div>
    );
};

export default Contato;
