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
                <span className="corpo-t">Olá, mundo! Eu sou um</span> <strong className="destaque">desenvolvedor</strong> <span className="corpo-t">web Front-end especializado na biblioteca</span> <strong className="destaque">React</strong>.
            </p>
            <Social />
        </SecaoIntro>
    );
};

export default Intro;
