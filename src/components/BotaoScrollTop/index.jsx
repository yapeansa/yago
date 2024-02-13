import { styled } from "styled-components";
import { FaArrowUpLong } from "react-icons/fa6";

const Scroll = styled.div`
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    display: ${props => props.$display};
    animation-name: ${props => props.$animacao};
    animation-duration: .3s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    a {
        display: block;
        background: var(--terciaria);
        padding: 1.4rem 1.2rem .4rem;
    }
`;

const BotaoScrollTop = ({ mostrarBotao, aoRolar, animar, aoAnimar }) => {

    const visivel = mostrarBotao ? 'block' : 'none';
    const animacao = animar ? 'fadeIn' : 'fadeOut';

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
            <Scroll $display={visivel} $animacao={animacao}>
                <a href="#">
                    <FaArrowUpLong color="var(--branco)" size={27} />
                </a>
            </Scroll>
        </>
    );
};

export default BotaoScrollTop;
