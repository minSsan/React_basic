import React from 'react';
import './InvestButton.css';

function InvestButton(props) {
    return (
        <div className="radio-wrapper">
            <input 
                type="radio"
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