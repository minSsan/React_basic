import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

RadioButton.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.arrayOf(PropTypes.node),

    width: PropTypes.string,
    height: PropTypes.string,
}

const StyledLabel = styled.label`
    border: 1px solid #000;
    border-radius: 9px;
    transition: all 0.2s;

    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};

    &:hover {
        color: #777777;
        border-color: #777777;
    }
`

const StyledRadio = styled.input.attrs({
    type: "radio",
})`
    display: none;

    &:checked + ${StyledLabel} {
        background-color: #111E6C;
        border-color: #111E6C;
        color: #fff;
    }

    &:disabled + ${StyledLabel} {
        cursor: default;
        border-color: #777777;
        color: #777777;
        opacity: 0.5;
    }
`

const RadioTitle = styled.p`
    font-size: 25px;
    font-weight: bold;
`

const RadioSubtitle = styled.p`
    font-size: 12px;
    font-weight: bold;
`

function RadioButton({id, name, value, onChange, disabled, title, subtitle, width, height, margin}) {
    return (
        <div>
            <StyledRadio 
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled || false}
            />
            <StyledLabel 
                htmlFor={id}
                width={width}
                height={height}
                margin={margin}
            >
                <RadioTitle>{title}</RadioTitle>
                <RadioSubtitle>{(subtitle).map((text) => text)}</RadioSubtitle>
            </StyledLabel>
        </div>
    );
}

export default RadioButton;