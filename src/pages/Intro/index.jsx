import { styled } from "styled-components";
import Social from "../../components/Social";
import Logo from "../../components/Logo";
import { TbMenu2 } from "react-icons/tb";

const SecaoIntro = styled.section`
    font-family: var(--fonte-primaria);
    font-weight: 100;
    font-size: 3.4rem;
    p {
        max-width: 80%;
        margin: 0 0 0 auto;
        line-height: 1.8;
        text-decoration: underline;
        text-decoration-thickness: 3px;
        text-decoration-color: var(--branco);
        text-align: right;
        .destaque {
            color: var(--ouro-escuro);
            font-weight: 700;
        }
    }
    .drop-menu { display: none; }
    .aparecer-logo, .aparecer-social { display: none; }

    @media screen and (min-width: 961px) and (max-width: 1440px) {
        p {
            max-width: 90%;
        }
    }

    @media screen and (max-width: 960px) {
        font-size: 2.5rem;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5rem;
        .aparecer-logo { display: inline-block; }
        p {
            text-align: center;
            margin: 0 auto;
            max-width: 80%;
        }
        .aparecer-social {
            display: flex;
        }
        .drop-menu {
            position: absolute;
            top: 1rem;
            right: 1rem;
            cursor: pointer;
            display: block;
        }
    }
`;

const Intro = ({ acaoMenu }) => {
    return (
        <SecaoIntro>
            <TbMenu2 onClick={acaoMenu} className="drop-menu" size={65} color="var(--terciaria)" />
            <Logo />
            <p>
                Olá, mundo! Eu sou um <span className="destaque">desenvolvedor</span> web Front-end especializado no framework <span className="destaque">React</span>.
            </p>
            <Social />
        </SecaoIntro>
    );
};

export default Intro;
