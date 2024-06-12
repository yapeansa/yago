import { styled } from "styled-components";

const SocialNetwork = styled.div`
    ul {
        list-style-type: none;
        display: flex;
        gap: 2.5rem;
        li {
            transition: all .3s ease-in-out;
            .social {
                color: var(--troisieme);
                transition: all .3s ease-in-out;
                &:hover {
                    color: var(--quatrieme);
                }
            }
        }
    }
    .lights-out {
        opacity: .4;
    }

    @media screen and (max-width: 960px) {
        display: none;
    }
`;

export default SocialNetwork;
