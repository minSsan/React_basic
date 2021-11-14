import React from 'react';
import './Vertical.css'

function Container(props) {
    return (
        <div className='container'>
            {props.children}
        </div>
    );
}

export default Container;