import React from 'react';
import styled from 'styled-components';
import { MediaSize } from '../../MediaSize/MediaSize';
import { Title } from '../text/Title';

const IMG_ROOT = "description/";

const Container = styled.div`
    height: 40vw;

    background-color: #306CC3;
    color: #fff;

    @media only screen and (max-width: ${MediaSize.Mobile_max}) {
        height: initial;

        background-color: #fff;
        color: #306CC3;
    }
`;

const Wrapper = styled.div`
    width: 62%;
    height: 100%;

    margin: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: ${MediaSize.Mobile_max}) {
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }
`;

const Left = styled.span`
`;

// const Title = styled.p`
//     font-size: 3.1vw;
//     font-weight: bold;

//     word-break: keep-all;

//     @media only screen and (max-width: ${MediaSize.Mobile_max}) {
//         font-size: 30px;
//         text-align: center;

//         margin-bottom: 45px;
//     }
// `;

const StyledTitle = styled(Title)`
    word-break: keep-all;

    @media only screen and (max-width: ${MediaSize.Mobile_max}) {
        font-size: 30px;
        text-align: center;

        margin-bottom: 45px;
    }
`;

const Subtitle = styled.p`
    font-size: 1.6vw;

    margin: 2vw 0 3.8vw 0;

    word-break: keep-all;

    @media only screen and (max-width: ${MediaSize.Mobile_max}) {
        display: none;
    }
`;

const StyledButton = styled.button`
    border: none;
    border-radius: 100px;

    padding: 1.25vw 2.2vw;

    font-weight: 500;
    font-size: 1.4vw;
    color: #306CC3;

    cursor: pointer;

    display: flex;
    align-items: center;

    white-space: nowrap; /* 줄 넘김 방지 */

    @media only screen and (max-width: ${MediaSize.Mobile_max}) {
        padding: 12px 21.5px;
        
        font-weight: 500;
        font-size: 20px;

        background-color: #306CC3;
        color: #fff;
    }
`;

const Arrow = styled.span`
    width: 1.6vw;
    height: 0.7vw;

    margin-left: 4px;

    background-image: url('img/${IMG_ROOT}Arrow.png');
    background-size: cover;
    background-repeat: no-repeat;

    @media only screen and (max-width: ${MediaSize.Mobile_max}) {
        width: 31.5px;
        height: 14px;
    }
`;

const Right  = styled.div`
    width: 22.4vw;
    height: 41vw;
    
    margin-bottom: -20%;

    background-image: url(${(props) => 'img/'+IMG_ROOT+props.image});
    background-size: cover;
    background-repeat: no-repeat;

    @media only screen and (max-width: ${MediaSize.Mobile_max}) {
        width: 345px;
        height: 524px;
        margin: 21px 0 0 0;

        background-image: url('img/${IMG_ROOT}FirstSection_m.png');
    }
`;

function FirstSection() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <StyledTitle>나의 맞춤<br />부동산 받기, 한집</StyledTitle>
                    <Subtitle>부동산 고민, 한집에서 해결하세요!</Subtitle>
                    <StyledButton>5분 안에 부동산 조언 받기💰<Arrow /></StyledButton>
                </Left>
                <Right 
                    image={'FirstSection.png'}
                />
            </Wrapper>
        </Container>  
    );
}

export default FirstSection;