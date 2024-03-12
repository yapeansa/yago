import { TbBrandHtml5, TbBrandCss3, TbBrandSass, TbBrandJavascript, TbBrandNodejs, TbBrandTypescript, TbBrandReact } from "react-icons/tb";

const sociais = [
    {
        id: 1,
        path: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
        nome: <TbBrandHtml5 size={60} color='#f06529' />,
        classe: ""
    },
    {
        id: 2,
        path: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
        nome: <TbBrandCss3 size={60} color="#2965f1" />,
        classe: ""
    },
    {
        id: 3,
        path: "https://sass-lang.com/",
        nome: <TbBrandSass size={55} color="#cc6699" />,
        classe: ""
    },
    {
        id: 4,
        path: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
        nome: <TbBrandJavascript size={60} color="#f0db4f" />,
        classe: ""
    },
    {
        id: 5,
        path: "https://nodejs.org/en",
        nome: <TbBrandNodejs size={55} color="#68a063" />,
        classe: ""
    },
    {
        id: 6,
        path: "https://www.typescriptlang.org/",
        nome: <TbBrandTypescript size={57} color="#007acc" />,
        classe: ""
    },
    {
        id: 7,
        path: "https://react.dev/",
        nome: <TbBrandReact size={55} color="#88dded" />,
        classe: ""
    }
];

export default sociais;