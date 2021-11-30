import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    backgroundColor: PropTypes.string,
}

const StyledButton = styled.button`
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    padding: 12px 0;

    width: ${(props) => props.width}; 
    height: ${(props) => props.height};
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    background-color: ${(props) => props.backgroundColor};
`;

function Button(props) {
    return (
        <StyledButton 
            onClick={props.onClick}
            width={props.width || "100%"}
            height={props.height || "48px"}
            color={props.color || "#fff"}
            fontSize={props.fontSize || "16px"}
            backgroundColor={props.backgroundColor || "#111E6C"}
        >
            {props.children}
        </StyledButton>
    )
}

export default Button;