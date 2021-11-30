import React from 'react';
import './InvestButton.css';
import styled from 'styled-components';

const RadioWrapper = styled.div`

`;

const RadioInput = styled.input.attrs({
    type: "radio",
})`
    display: none;
`;

function InvestButton(props) {
    return (
        <div>
            <RadioInput 
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
            <label htmlFor={props.id}>
                <p className="title">{props.title}</p>
                <p className="subtitle">{(props.subtitle).map((text) => text)}</p>
            </label>
        </div>
    );
}

export default InvestButton;