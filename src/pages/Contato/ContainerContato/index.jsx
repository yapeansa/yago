import { styled } from "styled-components";

const ContainerContato = styled.div`
    margin: 3rem 0 0;
    line-height: 1.5;
    p {
        color: var(--branco);
        font-size: 1.3rem;
        max-width: 55%;
        margin: 0 auto;
    }
    a {
        color: var(--branco);
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 30px auto;
        transition: all .3s ease-in;
        position: relative;
        padding: .5rem 0;
        width: fit-content;
        &::before {
            content: '';
            position: absolute;
            left: 50%;
            margin-left: -15%;
            bottom: 0;
            background: var(--cor-primaria);
            width: 30%;
            height: 2px;
            transition: all .3s ease-in-out;
        }
        &:hover {
            &::before {
                width: 100%;
                left: 0;
                margin-left: 0;
            }
        }
    }
    form {
        max-width: 65%;
        margin: 60px auto 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0 1.5rem;
        .engloba_texto_email {
            width: 100%;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            input[type=text], input[type=email] {
                flex: 1 1 auto;
                font-family: var(--fonte-secundaria);
                font-size: 1rem;
                background: var(--quinaria);
                border: 2px solid var(--cor-quaternaria);
                padding: 1.2rem 1rem;
                outline: none;
                color: var(--branco);
                transition: all .3s ease-in-out;
                &:focus { border-color: var(--cor-quinaria); }
                &::placeholder {
                    opacity: 1;
                    color: var(--branco);
                }
            }
        }
        textarea {
            resize: none;
            width: 100%;
            font-family: var(--fonte-secundaria);
            font-size: 1rem;
            background: var(--quinaria);
            border: 2px solid var(--cor-quaternaria);
            padding: 1.2rem 1rem;
            outline: none;
            color: var(--branco);
            transition: all .3s ease-in-out;
            &:focus { border-color: var(--cor-quinaria); }
            &::placeholder {
                opacity: 1;
                color: var(--branco);
            }
        }
        .acoes__formulario {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
            button[type=reset], button[type=submit] {
                flex: 1 1 auto;
                background: transparent;
                border-top: 4px solid var(--cor-terciaria);
                border-bottom: 4px solid var(--cor-quinaria);
                border-right: none;
                border-left: none;
                font-family: var(--fonte-primaria);
                font-weight: 400;
                display: block;
                font-size: 1.2rem;
                text-transform: uppercase;
                cursor: pointer;
                padding: .8rem;
                transition: all .2s ease-in-out;
                color: var(--branco);
                position: relative;
                z-index: 1;
                overflow: hidden;
                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 4px;
                    height: 100%;
                    background: linear-gradient(to top, var(--cor-quinaria), var(--cor-terciaria));
                    transition: all .3s ease-out;
                    z-index: -1;
                }
                &::after {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 4px;
                    height: 100%;
                    background: linear-gradient(to top, var(--cor-quinaria), var(--cor-terciaria));
                }
                &:hover {
                    color: var(--terceira-cor);
                    &::before {
                        width: 100%;
                        bottom: 0;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        p {
            max-width: 90%;
        }
        form {
            max-width: 100%;
        }
    }
`;

export default ContainerContato;
