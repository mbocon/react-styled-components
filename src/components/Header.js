import { StyledHeader } from '../styles';

export default function Header(props){
    return(
        <StyledHeader>
            <h1>My App</h1>
            <ul>
                <li>About</li>
                <li>Contact Us</li>
                <li>Products</li>
            </ul>
        </StyledHeader>
    )
}