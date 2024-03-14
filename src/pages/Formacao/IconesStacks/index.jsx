import { TbBrandHtml5, TbBrandCss3, TbBrandSass, TbBrandJavascript, TbBrandNodejs, TbBrandTypescript, TbBrandReact, TbBrandGit, TbBrandVscode } from "react-icons/tb";

const sociais = [
    {
        id: 1,
        path: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
        nome: <TbBrandHtml5 size={60} color='#f06529' />,
        classe: "",
        titulo: "HTML5"
    },
    {
        id: 2,
        path: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
        nome: <TbBrandCss3 size={60} color="#2965f1" />,
        classe: "",
        titulo: "CSS3"
    },
    {
        id: 3,
        path: "https://sass-lang.com/",
        nome: <TbBrandSass size={55} color="#cc6699" />,
        classe: "",
        titulo: "SASS"
    },
    {
        id: 4,
        path: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
        nome: <TbBrandJavascript size={60} color="#f0db4f" />,
        classe: "",
        titulo: "Javascript"
    },
    {
        id: 5,
        path: "https://nodejs.org/en",
        nome: <TbBrandNodejs size={55} color="#68a063" />,
        classe: "",
        titulo: "Node"
    },
    {
        id: 6,
        path: "https://www.typescriptlang.org/",
        nome: <TbBrandTypescript size={57} color="#007acc" />,
        classe: "",
        titulo: "Typescript"
    },
    {
        id: 7,
        path: "https://react.dev/",
        nome: <TbBrandReact size={55} color="#88dded" />,
        classe: "",
        titulo: "React"
    },
    {
        id: 8,
        path: "https://git-scm.com",
        nome: <TbBrandGit size={55} color="#F1502F" />,
        classe: "",
        titulo: "Git"
    },
    {
        id: 9,
        path: "https://code.visualstudio.com",
        nome: <TbBrandVscode size={55} color="#0078d7" />,
        classe: "",
        titulo: "VS Code"
    }
];

export default sociais;