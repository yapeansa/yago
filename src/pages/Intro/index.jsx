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
                Hello, world! I'm a <strong className="destaque">mathematician</strong> currently specializing in computational modeling.
            </p>
            <Social />
        </SecaoIntro>
    );
};

export default Intro;
