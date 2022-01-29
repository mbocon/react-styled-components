import { StyledFooter } from "../styles"

export default function Footer(props){
    return(
        <StyledFooter>
            <p>All Rights Reserved &copy; {new Date().getFullYear()} </p>
        </StyledFooter>
    )
}