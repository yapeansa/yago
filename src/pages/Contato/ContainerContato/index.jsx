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
        display: inline-block;
        margin: 30px 0;
        transition: all .3s ease-in;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            left: -5.5rem;
            top: 50%;
            margin-top: -1px;
            background: var(--cor-secundaria);
            width: 4rem;
            height: 2px;
        }
        &::after {
            content: '';
            position: absolute;
            right: -5.5rem;
            top: 50%;
            margin-top: -1px;
            background: var(--cor-secundaria);
            width: 4rem;
            height: 2px;
        }
    }
    form {
        max-width: 800px;
        margin: 60px auto 0;
        padding: 0 1.6rem;
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
            padding: 1.1rem 1rem;
            outline: none;
            color: var(--branco);
            transition: all .3s ease-in-out;
            &:focus {
                border-color: var(--cor-secundaria);
            }
            &::placeholder {
                opacity: 1;
                color: #999;
            }
        }
        textarea {
            resize: none;
        }
        input[type=reset], input[type=submit] {
            max-width: 140px;
            background: var(--cor-primaria);
            border: 2px solid var(--preto-secundario);
            font-family: var(--fonte-primaria);
            font-weight: 700;
            font-size: 1.2rem;
            text-transform: uppercase;
            cursor: pointer;
            padding: 1rem;
            transition: all .3s ease-in;
            color: var(--branco);
            &:hover {
                background: var(--cor-secundaria);
                color: var(--preto-secundario);
                border-color: transparent;
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
        p {
            max-width: 90%;
        }
    }
`

export default ContainerContato