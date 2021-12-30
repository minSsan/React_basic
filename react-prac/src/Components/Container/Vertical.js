import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;

    width: ${(props) => props.width};
`;

function VerticalContainer(props) {
    return (
        <StyledContainer
            width={props.width}
        >
            {props.children}
        </StyledContainer>
    );
}

export default VerticalContainer;