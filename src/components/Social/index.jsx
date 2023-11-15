import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { styled } from "styled-components"

const SocialNetwork = styled.div`
    ul {
        list-style-type: none;
        display: flex;
        gap: 30px;
    }
`

function Social(props) {

    function aoMouseEntrar(icone) {
        switch (icone) {
            case 'facebook':
                if (icone === 'facebook') {
                    props.setFacebook('var(--cor-secundaria)')
                }
                break
            case 'twitter':
                if (icone === 'twitter') {
                    props.setTwitter('var(--cor-secundaria)')
                }
                break
            case 'github':
                if (icone === 'github') {
                    props.setGithub('var(--cor-secundaria)')
                }
                break
            case 'linkedin':
                if (icone === 'linkedin') {
                    props.setLinkedin('var(--cor-secundaria)')
                }
                break
            case 'instagram':
                if (icone === 'instagram') {
                    props.setInstagram('var(--cor-secundaria)')
                }
                break
        }
    }

    function aoMouseSair(icone) {
        switch (icone) {
            case 'facebook':
                if (icone === 'facebook') {
                    props.setFacebook('#FFF')
                }
                break
            case 'twitter':
                if (icone === 'twitter') {
                    props.setTwitter('#FFF')
                }
                break
            case 'github':
                if (icone === 'github') {
                    props.setGithub('#FFF')
                }
                break
            case 'linkedin':
                if (icone === 'linkedin') {
                    props.setLinkedin('#FFF')
                }
                break
            case 'instagram':
                if (icone === 'instagram') {
                    props.setInstagram('#FFF')
                }
                break
        }
    }
    
    return (
        <SocialNetwork>
            <ul>
                <li>
                    <a href="https://facebook.com/yapeansa" target="_blank">
                        <FaFacebook
                            color={props.facebook}
                            onMouseOver={() => aoMouseEntrar('facebook')}
                            onMouseOut={() => aoMouseSair('facebook')}
                            size="40"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/yapeansa" target="_blank">
                        <FaTwitter
                            color={props.twitter}
                            onMouseOver={() => aoMouseEntrar('twitter')}
                            onMouseOut={() => aoMouseSair('twitter')}
                            size="40"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/yapeansa" target="_blank">
                        <FaGithub
                            color={props.github}
                            onMouseOver={() => aoMouseEntrar('github')}
                            onMouseOut={() => aoMouseSair('github')}
                            size="40"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/yapeansa" target="_blank">
                        <FaLinkedin
                            color={props.linkedin}
                            onMouseOver={() => aoMouseEntrar('linkedin')}
                            onMouseOut={() => aoMouseSair('linkedin')}
                            size="40"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/yapeansa" target="_blank">
                        <FaInstagram
                            color={props.instagram}
                            onMouseOver={() => aoMouseEntrar('instagram')}
                            onMouseOut={() => aoMouseSair('instagram')}
                            size="40"
                        />
                    </a>
                </li>
            </ul>
        </SocialNetwork>
    )
}

export default Social
