import React from 'react';
import styled from 'styled-components';

const StyledH = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: ${(props) => props.color};
`;

function HeaderTitle(props) {
    return(
        <StyledH
            color={props.color || "#111E6C"}
        >
            {props.children}
        </StyledH>
    );
}

export default HeaderTitle;