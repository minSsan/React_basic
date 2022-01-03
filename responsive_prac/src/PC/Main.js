import React from 'react';
import styled from 'styled-components';

const FirstSection = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: #306CC3;
    color: #fff;
`;

const SecondSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350vh;
    background-color: #BFD9FF;
`;

function PCMain() {
    return (
        <>
            <FirstSection>
                <div style={{
                    width: '1200px',
                    height: '406px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        <p style={{
                            fontSize: '60px',
                            fontWeight: 'bold',
                        }}>나의 맞춤<br />부동산 받기, 한집</p>
                    </div>
                    <div></div>
                </div>
            </FirstSection>
            <SecondSection>
                <div style={{
                    width: '62.5%',
                    height: '245vh',
                    borderRadius: '50px',
                    backgroundColor: '#fff'
                }}>

                </div>
            </SecondSection>
        </>
    )
}

export default PCMain;