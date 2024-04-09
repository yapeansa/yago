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
                Olá, mundo! Eu sou um <span className="destaque">desenvolvedor</span> web Front-end especializado no framework <span className="destaque">React</span>.
            </p>
            <Social />
        </SecaoIntro>
    );
};

export default Intro;
