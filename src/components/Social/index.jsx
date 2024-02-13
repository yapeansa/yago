import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { styled } from "styled-components";

const SocialNetwork = styled.div`
    ul {
        list-style-type: none;
        display: flex;
        gap: 30px;
        .social {
            color: var(--fourth-color);
            transition: all .3s ease-in-out;
            &:hover {
                color: var(--ouro-escuro);
            }
        }
    }
`;

const Social = () => {
    return (
        <SocialNetwork>
            <ul>
                <li>
                    <a href="https://facebook.com/yapeansa" target="_blank">
                        <FaFacebook size="38" className="social" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/yapeansa" target="_blank">
                        <FaTwitter size="38" className="social" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/yapeansa" target="_blank">
                        <FaGithub size="38" className="social" />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/yapeansa" target="_blank">
                        <FaLinkedin size="38" className="social" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/yapeansa" target="_blank">
                        <FaInstagram size="38" className="social" />
                    </a>
                </li>
            </ul>
        </SocialNetwork>
    );
}

export default Social;
