import React from 'react';
import { PC, Tablet, Mobile } from "./MediaQuery/MediaQuery";
import PCMain from './PC/Main';

function Reactive() {
    return (
        <>
            <PC>
                <PCMain />
            </PC>

            <Mobile>
                <p>Mobile</p>
            </Mobile>

            <Tablet>
                <p>Tablet</p>
            </Tablet>
        </>
    );
}

export default Reactive;