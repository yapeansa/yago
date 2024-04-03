import { FaArrowUpLong } from "react-icons/fa6";
import EstilosScrollTop from "./EstilosScrollTop";
import { ContextoBotaoCriado } from "../../Contexts/ContextoBotao";
import { useContext } from "react";

const BotaoScrollTop = () => {

    const [acoesBotao, setAcoesBotao] = useContext(ContextoBotaoCriado);

    const rolagem = () => {
        if (document.documentElement.scrollTop > (screen.availHeight - 100)) {
            clearInterval(window.scrollEndTimer);
            window.scrollEndTimer = setTimeout(() => {
                setAcoesBotao({animar: true, mostrarBotao: true});
            }, 300);
        } else {
            clearInterval(window.scrollEndTimer);
            window.scrollEndTimer = setTimeout(() => {
                setAcoesBotao({...acoesBotao, animar: false});
                setTimeout(() => setAcoesBotao({...acoesBotao, mostrarBotao: false}), 300);
            }, 400);
        }
    };

    window.addEventListener('scroll', rolagem);

    return (
        <>
            <EstilosScrollTop $display={acoesBotao.mostrarBotao ? 'block' : 'none'} $animacao={acoesBotao.animar ? 'fadeIn' : 'fadeOut'}>
                <a href="#">
                    <FaArrowUpLong color="var(--branco)" size={27} />
                </a>
            </EstilosScrollTop>
        </>
    );
};

export default BotaoScrollTop;
