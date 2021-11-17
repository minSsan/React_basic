import React from 'react';

function InvestTypeButton(props) {
    return (
        <div className="radio-wrapper">
            <input
                type="radio"
                id={props.id}
                name="invest_type"
                value={props.value}
                onChange={props.onChange}
                />
            <label htmlFor={props.id}>
                <p className="title">{props.title}</p>
                <p className="subtitle">{props.subtitle}</p>
            </label>
        </div>
    );
}

export default InvestTypeButton;