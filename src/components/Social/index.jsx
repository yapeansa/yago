import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { styled } from "styled-components"

const SocialNetwork = styled.div`
    ul {
        list-style-type: none;
        display: flex;
        gap: 30px;
    }
`

function Social() {
    return (
        <SocialNetwork>
            <ul>
                <li><a href="https://facebook.com/yapeansa" target="_blank"><FaFacebook color="white" size="40" /></a></li>
                <li><a href="https://twitter.com/yapeansa" target="_blank"><FaTwitter color="white" size="40" /></a></li>
                <li><a href="https://github.com/yapeansa" target="_blank"><FaGithub color="white" size="40" /></a></li>
                <li><a href="https://linkedin.com/in/yapeansa" target="_blank"><FaLinkedin color="white" size="40" /></a></li>
                <li><a href="https://instagram.com/yapeansa" target="_blank"><FaInstagram color="white" size="40" /></a></li>
            </ul>
        </SocialNetwork>
    )
}

export default Social
