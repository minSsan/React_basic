import React from 'react';
import styled from 'styled-components';
import { MediaSize } from '../../MediaSize/MediaSize';
import { Title } from '../text/Title';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 139vw;

    background-color: #BFD9FF;
`;

const Wrapper = styled.div`
    width: 62.5%;
    height: 77.5%;

    padding: 0 9.1% 0 10.6%;

    border-radius: 50px;

    background-color: #fff;

    @media only screen and (max-width: ${MediaSize.Mobile_max}) {
        padding: 0;
        background-color: inherit;
    }
`;

const StyledTitle = styled(Title)`
    transform: translateY(-50%);

    @media only screen and (max-width: ${MediaSize.Mobile_max}) {
        color: #306CC3;
    }
`;

function SecondSection() {
    return (
        <Container>
            <Wrapper>
                <StyledTitle>
                    한집<br />
                    이용방법
                </StyledTitle>
            </Wrapper>
        </Container>
    );
}

export default SecondSection;