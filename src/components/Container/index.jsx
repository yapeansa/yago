import { styled } from "styled-components"

const Wrap = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`

function Container({ children }) {
    return (
        <Wrap>
            {children}
        </Wrap>
    )
}

export default Container
