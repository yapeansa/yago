import { styled } from "styled-components"

const ContainerContato = styled.div`
    margin: 84px 0 0;
    p {
        color: var(--branco);
        font-size: 1.4rem;
        max-width: 60%;
        margin: 0 auto;
    }
    a {
        color: var(--branco);
        font-size: 1.4rem;
        text-decoration: underline;
        text-decoration-color: var(--cor-primaria);
        text-decoration-thickness: 3px;
        display: inline-block;
        margin: 30px 0;
        transition: all .3s ease-in;
        &:hover {
            text-decoration-color: var(--cor-secundaria);
        }
    }
    form {
        max-width: 50%;
        margin: 60px auto 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        input, textarea {
            font-family: var(--fonte-secundaria);
            font-size: 1rem;
            display: block;
            width: 100%;
            background: var(--preto-secundario);
            border: 2px solid #333;
            padding: 1.2rem 1rem;
            outline: none;
            color: var(--branco);
            transition: all .3s ease-in-out;
            &:focus {
                border-color: var(--cor-secundaria);
            }
            &::placeholder {
                opacity: 1;
            }
        }
        textarea {
            resize: none;
        }
        input[type=reset], input[type=submit] {
            max-width: 160px;
            background: var(--cor-primaria);
            border: 2px solid transparent;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            padding: 1rem;
            transition: all .3s ease-in;
            &:hover {
                background: var(--cor-secundaria);
                color: var(--preto);
            }
        }
        div {
            display: flex;
            justify-content: center;
            flex: 1;
            gap: 1.2rem;
        }
    }

    @media screen and (max-width: 768px) {
        form {
            max-width: 100%;
        }
    }
`

export default ContainerContato