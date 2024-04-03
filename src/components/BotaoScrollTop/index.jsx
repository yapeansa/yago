import { FaArrowUpLong } from "react-icons/fa6";
import EstilosScrollTop from "./EstilosScrollTop";

const BotaoScrollTop = ({ mostrarBotao, aoRolar, animar, aoAnimar }) => {

    const rolagem = () => {
        if (document.documentElement.scrollTop > (screen.availHeight - 100)) {
            clearInterval(window.scrollEndTimer);
            window.scrollEndTimer = setTimeout(() => {
                aoAnimar(true)
                aoRolar(true)
            }, 300);
        } else {
            clearInterval(window.scrollEndTimer);
            window.scrollEndTimer = setTimeout(() => {
                aoAnimar(false)
                setTimeout(() => aoRolar(false), 300)
            }, 400);
        }
    };

    window.addEventListener('scroll', rolagem);

    return (
        <>
            <EstilosScrollTop $display={mostrarBotao ? 'block' : 'none'} $animacao={animar ? 'fadeIn' : 'fadeOut'}>
                <a href="#">
                    <FaArrowUpLong color="var(--branco)" size={27} />
                </a>
            </EstilosScrollTop>
        </>
    );
};

export default BotaoScrollTop;
