import TituloEstilizado from "./TituloEstilizado";

const Titulo = ({ corDaBorda, corDoTexto, children }) => {
    return (
        <TituloEstilizado $cordaborda={corDaBorda} $cordotexto={corDoTexto}>
            {children}
        </TituloEstilizado>
    );
};

export default Titulo;
