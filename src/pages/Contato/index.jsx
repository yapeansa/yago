import Secao from "../../components/ContainerSecao"
import Titulo from "../../components/Titulo"
import ContainerContato from "./ContainerContato"
import Container from "../../components/Container"

function Contato({ nome, email, mensagem, setNome, setEmail, setMensagem }) {

    function aoInteragir(campo) {
        switch (campo) {
            case 'nome':
                if (nome !== '') {
                    setNome('')
                } else {
                    setNome('Digite o seu nome aqui...')
                }
                break
            case 'email':
                if (email !== '') {
                    setEmail('')
                } else {
                    setEmail('Digite o seu e-mail aqui...')
                }
                break
            default:
                if (mensagem !== '') {
                    setMensagem('')
                } else {
                    setMensagem('Digite a sua mensagem aqui...')
                }
                break
        }
    }

    return (
        <div id="contato">
            <Secao corDeFundo="var(--preto-secundario)">
                <Container>
                    <Titulo corDaBorda="var(--cor-secundaria)" corDoTexto="var(--branco)">Contato</Titulo>
                    <ContainerContato>
                        <p>Pronto para trazer vida ao seu projeto ou para me incluir no seu time? Fale comigo através do e-mail:</p>
                        <a href="mailto:yago.pereira@estudante.ufjf.br">yago.pereira@estudante.ufjf.br</a>
                        <p>Ou preencha o formulário abaixo com seus dados e sua mensagem.</p>
                        <form method="post" action="https://formspree.io/f/xnqlkqnk">
                            <label>
                                <input
                                    type="text"
                                    name="nome"
                                    onFocus={() => aoInteragir('nome')}
                                    onBlur={() => aoInteragir('nome')}
                                    placeholder={nome}
                                    required
                                />
                            </label>
                            <label>
                                <input
                                    type="email"
                                    name="email"
                                    onFocus={() => aoInteragir('email')}
                                    onBlur={() => aoInteragir('email')}
                                    placeholder={email}
                                    required
                                />
                            </label>
                            <label>
                                <textarea
                                    name="mensagem"
                                    rows="6"
                                    onFocus={() => aoInteragir()}
                                    onBlur={() => aoInteragir()}
                                    placeholder={mensagem}
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
    )
}

export default Contato
