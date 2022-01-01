import React from 'react';
import { useMediaQuery } from 'react-responsive';

function Reactive() {
    const isPC = useMediaQuery({
        query: "(min-width:1024px)"
    });

    const isTablet = useMediaQuery({
        query: "(min-width:768px) and (max-width:1023px)"
    });

    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });

    return (
        <>
            {isPC && <p>PC</p>}
            {isTablet && <p>Tablet</p>}
            {isMobile && <p>Mobile</p>}
        </>
    );
}

export default Reactive;