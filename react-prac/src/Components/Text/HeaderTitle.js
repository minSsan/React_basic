import React from 'react';
import styled from 'styled-components';

const StyledH = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: ${(props) => props.color ? props.color : "#111E6C"};
`;

function HeaderTitle({children, color}) {
    return(
        <StyledH
            color={color}
        >
            {children}
        </StyledH>
    );
}

export default HeaderTitle;