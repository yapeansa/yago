import { useRef, useContext } from "react";
import { ContextoContatoCriado } from "@/Contexts/ContextoContato";
import emailjs from '@emailjs/browser';
import Secao from "@/components/ContainerSecao";
import Titulo from "@/components/Titulo";
import ContainerContato from "./ContainerContato";
import Container from "@/components/Container";
import { SiGmail } from "react-icons/si";
import { IoIosSend } from "react-icons/io";

const Contato = ({ enviado, setEnviado }) => {

    const [placeHolders, setPlaceHolders] = useContext(ContextoContatoCriado);

    // The function below deals with the placeholders

    const aoInteragir = (campo) => {
        switch (campo) {
            case 'nome':
                placeHolders.nome = placeHolders.nome !== "" ? "" : "Type your name here...";
                setPlaceHolders({ ...placeHolders });
                break;
            case 'email':
                placeHolders.email = placeHolders.email !== "" ? "" : "Type your e-mail here...";
                setPlaceHolders({ ...placeHolders });
                break;
            default:
                placeHolders.mensagem = placeHolders.mensagem !== "" ? "" : "Type your message here...";
                setPlaceHolders({ ...placeHolders });
                break;
        }
    };

    // Below, we have the function that informes the user that the email was successfully sended.

    const confirmacaoDeEnvio = () => {
        enviado.display = "block";
        enviado.animation = "fadeIn .5s ease-in-out";
        setEnviado({ ...enviado });
        setTimeout(() => {
            enviado.animation = "fadeOut .5s ease-in-out";
            setEnviado({ ...enviado });
        }, 3500);
        setTimeout(() => {
            enviado.display = "none";
            setEnviado({ ...enviado });
        }, 4000);
    };

    // Here, we're using React EmailJS to send e-mail from contact form.

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c66jb2p', 'template_e8zek0j', form.current, {
            publicKey: 'o5T1d5IHXaJyiTE7D',
        })
            .then(() => {
                console.log('SUCCESS!');
                e.target.reset();
                confirmacaoDeEnvio();
            }, (error) => {
                console.log('FAILED...', error.text);
            },);
    };

    return (
        <Secao corDeFundo="var(--noir)" id="contato">
            <Container>
                <Titulo
                    corDaBorda="var(--quatrieme)"
                    corDoTexto="var(--troisieme)"
                >
                    Contact
                </Titulo>
                <ContainerContato>
                    <p>Ready to bring life for your projects? You can get in touch with me sending me a message through my e-mail address</p>
                    <a href="mailto:yapeansa@gmail.com">
                        <SiGmail size={30} color="var(--premiere)" /> yapeansa@gmail.com
                    </a>
                    <p>Or, if you like, you can fill the form below with your information and your message</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="engloba_texto_email">
                            <input
                                type="text"
                                name="user_name"
                                minLength={3}
                                onFocus={() => aoInteragir('nome')}
                                onBlur={() => aoInteragir('nome')}
                                placeholder={placeHolders.nome}
                                required
                            />
                            <input
                                type="email"
                                name="user_email"
                                minLength={11}
                                onFocus={() => aoInteragir('email')}
                                onBlur={() => aoInteragir('email')}
                                placeholder={placeHolders.email}
                                required
                            />
                        </div>
                        <label>
                            <textarea
                                name="message"
                                rows="5"
                                minLength={100}
                                onFocus={() => aoInteragir()}
                                onBlur={() => aoInteragir()}
                                placeholder={placeHolders.mensagem}
                                required></textarea>
                        </label>
                        <div className="acoes__formulario">
                            <button type="reset">Reset</button>
                            <button type="submit">Send <IoIosSend size={27} className="send_bullet" /></button>
                        </div>
                    </form>
                </ContainerContato>
            </Container>
        </Secao>
    );
};

export default Contato;
