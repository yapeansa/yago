import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const redesSociais = [
    {
        id: 1,
        path: "https://facebook.com/yapeansa",
        label: <FaFacebook size="38" className="social" />,
        classe: ""
    },
    {
        id: 2,
        path: "https://twitter.com/yapeansa",
        label: <FaSquareXTwitter size="38" className="social" />,
        classe: ""
    },
    {
        id: 3,
        path: "https://github.com/yapeansa",
        label: <FaGithub size="38" className="social" />,
        classe: ""
    },
    {
        id: 4,
        path: "https://linkedin.com/in/yapeansa",
        label: <FaLinkedin size="38" className="social" />,
        classe: ""
    },
    {
        id: 5,
        path: "https://instagram.com/yapeansa",
        label: <FaInstagram size="38" className="social" />,
        classe: ""
    }
];

export default redesSociais;
