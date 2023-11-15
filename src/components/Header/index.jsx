import Cabecalho from "./Cabecalho"
import Logo from "../Logo"
import Menu from "../Menu"
import Intro from "../../pages/Intro"
import Social from "../Social"

function Header(props) {
    return (
        <>
            <Cabecalho>
                <aside>
                    <Logo />
                    <Menu />
                    <Social
                        facebook={props.facebook}
                        twitter={props.twitter}
                        github={props.github}
                        linkedin={props.linkedin}
                        instagram={props.instagram}
                        setFacebook={props.setFacebook}
                        setTwitter={props.setTwitter}
                        setGithub={props.setGithub}
                        setLinkedin={props.setLinkedin}
                        setInstagram={props.setInstagram}
                    />
                </aside>
                <div className="introducao">
                    <Intro />
                </div>
            </Cabecalho>
        </>
    )
}

export default Header
