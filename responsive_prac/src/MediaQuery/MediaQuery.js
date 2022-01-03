import React from 'react';
import { useMediaQuery } from "react-responsive";

const PC = ({children}) => {
    const isPC = useMediaQuery({
        query: "(min-width:1024px)"
    });
    return (
        <>
            {isPC && children}
        </>    
    )
}

const Tablet = ({children}) => {
    const isTablet = useMediaQuery({
        query: "(min-width:768px) and (max-width:1023px)"
    });
    return (
        <>
            {isTablet && children}
        </>
    )
}

const Mobile = ({children}) => {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <>
            {isMobile && children}
        </>
    )
}

export {PC, Tablet, Mobile};