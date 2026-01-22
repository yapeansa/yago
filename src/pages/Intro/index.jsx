import SecaoIntro from "./EstilosIntro";
import Social from "@/components/Social";
import Logo from "@/components/Logo";
import { TbMenu2 } from "react-icons/tb";

const Intro = ({ acaoMenu }) => {
    return (
        <SecaoIntro>
            <TbMenu2 onClick={acaoMenu} className="drop-menu" size={60} />
            <Logo />
            <p>
                Precisão que <strong className="destaque">transforma</strong> dados em resultados. Análise meticulosa, <strong className="destaque">soluções</strong> confiáveis.
            </p>
            <Social />
        </SecaoIntro>
    );
};

export default Intro;
