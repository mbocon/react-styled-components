import { StyledMain, StyledToggleButton } from '../styles';
import { useState } from 'react';

export default function Main(props){
    const [color, setColor] = useState('red');

    const handleClick = () => {
        setColor(color === 'red' ? 'green' : 'red');
    }

    return(
        <StyledMain>
            <StyledToggleButton color={color} onClick={handleClick}>Toggle Color</StyledToggleButton>
        </StyledMain>
    )
}