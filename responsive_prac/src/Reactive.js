import React from 'react';
import FirstSection from './Components/home/FirstSection';
import SecondSection from './Components/home/SecondSection';

function Reactive() {
    return (
        <>
            <FirstSection 
                image={'FirstSection.png'}
            />
            <SecondSection />
        </>
    );
}

export default Reactive;