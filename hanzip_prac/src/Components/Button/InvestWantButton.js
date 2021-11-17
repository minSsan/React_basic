import React from 'react';

function InvestWantButton(props) {
    return (
        <div className="radio-wrapper">
            <input 
                type="radio"
                id={props.id}
                name="invest_want"
                value={props.value}
                onChange={props.onChange}
            />
            <label htmlFor={props.id}>
                <p className="title">{props.title}</p>
                <p className="subtitle">{props.subtitle1}<br/>{props.subtitle2}</p>
            </label>
        </div>
    );
}

export default InvestWantButton;