import styled from 'styled-components';

export const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const StyledMain = styled.main`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledToggleButton = styled.button`
    color: white;
    width: 15.5rem;
    height: 2.8rem;
    font-size: 1.125rem;
    background-color: ${props => props.color};
    font-weight: bold;
    border-radius: 0.5rem;
`;

export const StyledFooter = styled.footer`
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: dodgerblue;
    box-shadow: 1px 1px 7px 5px #808080;
    color: white;
`;

// tagged template literal
export const StyledHeader = styled.header`
    background-color: dodgerblue;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    color: white;
    box-shadow: 1px 1px 7px 5px #808080;
    ul {
        display: flex;
        list-style: none;
        align-items: center;
        li {
            margin-right: 1.5rem;
            font-weight: 700;
            font-size: 1.25rem;
            &:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
`;