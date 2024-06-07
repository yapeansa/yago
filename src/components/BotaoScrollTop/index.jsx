import { FaArrowUpLong } from "react-icons/fa6";
import EstilosScrollTop from "./EstilosScrollTop";
import { ContextoBotaoCriado } from "@/Contexts/ContextoBotao";
import { useContext } from "react";

const BotaoScrollTop = () => {

    const [acoesBotao, setAcoesBotao] = useContext(ContextoBotaoCriado);

    const aparecerBotao = () => {
        clearInterval(window.scrollEndTimer);
        window.scrollEndTimer = setTimeout(() => {
            setAcoesBotao({ animar: true, mostrarBotao: true });
        }, 300);
    };

    const desaparecerBotao = () => {
        clearInterval(window.scrollEndTimer);
        window.scrollEndTimer = setTimeout(() => {
            setAcoesBotao({ ...acoesBotao, animar: false });
            setTimeout(() => setAcoesBotao({ ...acoesBotao, mostrarBotao: false }), 300);
        }, 400);
    };

    const aoRolar = () => (window.scrollY > (screen.availHeight - 100)) ? aparecerBotao() : desaparecerBotao();

    window.addEventListener('scroll', aoRolar);

    const mostrarEsconder = acoesBotao.mostrarBotao ? "block" : "none";
    const animarToggle = acoesBotao.animar ? "fadeIn" : "fadeOut";

    return (
        <EstilosScrollTop $display={mostrarEsconder} $animacao={animarToggle}>
            <a href="#">
                <FaArrowUpLong color="var(--troisieme)" size={27} />
            </a>
        </EstilosScrollTop>
    );
};

export default BotaoScrollTop;
