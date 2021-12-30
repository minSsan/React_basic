import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.node,
    width: PropTypes.string,
    height: PropTypes.string,
};

const StyledInput = styled.input.attrs(props => ({
    type: props.type || "text",
    placeholder: props.placeholder || "",
}))`
    padding: 12px;

    border: 1px solid #707070;
    border-radius: 5px;

    &:placeholder {
        color: #BABABA;
    }

    width: ${(props) => props.width ? props.width : "100%"};
    height: ${(props) => props.height ? props.height : "24px"};
`;

function Input({name, type, onChange, placeholder, width, height}) {
    console.log("Input rendered");
    return (
        <StyledInput 
            name={name}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            width={width}
            height={height}
        />
    );
}

export default React.memo(Input);