import React from 'react';
import styled from 'styled-components';
import { MediaSize } from '../../MediaSize/MediaSize';
import { Title } from '../text/Title';
import { ImageDiv, Image } from '../image/Images';

/* CONSTANTS: images root directory, images' width */
const IMG_ROOT = "description/";

const SMALL_IMG_WIDTH = "223.95px";
const SMALL_IMG_HEIGHT = "360px";

const LARGE_IMG_WIDTH = "366px";
const LARGE_IMG_HEIGHT = "319px";

/* STYLED COMPONENTS */
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 139vw;

    background-color: #BFD9FF;

    @media only screen and (max-width: ${MediaSize.Mobile_max}) {
        position: relative;
        height: initial;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 62.5%;
    height: 77.5%;

    padding: 0 9.1% 0 10.6%;

    border-radius: 50px;

    background-color: #fff;

    @media only screen and (max-width: ${MediaSize.Mobile_max}) {
        position: absolute;
        top: 0;
        
        align-items: center;

        width: 100%;
        height: initial;

        padding: 0;

        border-radius: 0;

        background-color: inherit;
    }
`;

const StyledTitle = styled(Title)`
    width: 0;

    transform: translateY(-50%);

    word-break: keep-all;
    white-space: pre-wrap;

    @media only screen and (max-width: ${MediaSize.Mobile_max}) {
        width: auto;

        margin: 40px 0;
        
        transform: none;

        white-space: nowrap;
        color: #306CC3;


        font-size: 25px;
    }
`;

const Content = styled.div`
    flex-basis: 33.3%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:nth-child(2) {
        align-items: stretch;
    }

    @media only screen and (max-width: ${MediaSize.Mobile_max}) {
        margin-top: 37px;

        &:nth-child(2) {
            margin-top: 0;
        }
        
        flex-direction: column;

        &:nth-child(2), &:nth-child(4) {
            flex-direction: column-reverse;
        }
    }
`;

const ContentTitle = styled.p`
    color: #0083FF;

    font-size: 4vw;
    font-weight: 300;

    margin-bottom: 1.6vw;

    @media only screen and (max-width: ${MediaSize.Mobile_max}) {
        display: inline-block;

        font-size: 35px;

        margin: 0;
        margin-right: 10px;
    }
`;

const ContentText = styled.p`
    color: #333333;

    font-size: 1.6vw;

    @media only screen and (max-width: ${MediaSize.Mobile_max}) {
        display: inline-block;

        font-size: 13px;
    }
`;

// const Image = styled.div`
//     display: inline-block;

//     width: ${(props) => props.width ? props.width : "24vw"};
//     height: ${(props) => props.height ? props.height : "38vw"};

//     margin: ${(props) => props.margin ? props.margin : "0"};

//     transform: translateY(${(props) => props.y});
//     transform: translateX(${(props) => props.x});

//     background-image: url(${(props) => 'img/'+props.image});
//     background-size: cover;
//     background-repeat: no-repeat;

//     @media only screen and (max-width: ${MediaSize.Mobile_max}) {
//         width: inherit;
//         height: inherit;
        
//         margin: 0;
//     }
// `;

function SecondSection() {
    return (
        <Container>
            <Wrapper>
                <StyledTitle>
                    한집
                    이용방법
                </StyledTitle>
                <Content>
                    <span>
                        <ContentTitle>01</ContentTitle>
                        <ContentText>
                            5분 질문지 작성으로 <br />찾고 있는 매물을 알려주세요.
                        </ContentText>
                    </span>
                    <ImageDiv 
                        width="24vw"
                        height="38vw"
                        margin="-25% 0 0 0"
                        image={IMG_ROOT+"SecondSection1.png"}

                        m_width={SMALL_IMG_WIDTH}
                        m_height={SMALL_IMG_HEIGHT}
                    />
                </Content>
                <Content>
                    <ImageDiv 
                        width="44.3vw"
                        height="38vw"
                        margin="0 0 0 -25%"
                        image={IMG_ROOT+"SecondSection2_Group.png"}

                        m_width={LARGE_IMG_WIDTH}
                        m_height={LARGE_IMG_HEIGHT}
                    />
                    <span>
                        <ContentTitle>02</ContentTitle>
                        <ContentText>맞춤 질문지를 토대로<br />나만의 맞춤 매물을 받아보세요.</ContentText>
                    </span>
                </Content>
                <Content>
                    <span>
                        <ContentTitle>03</ContentTitle>
                        <ContentText>어떤 매물을 투자할지 고민 되시나요?<br/>한집 파트너스에게 조언을 구하세요.</ContentText>
                    </span>
                    <ImageDiv 
                        width="24vw"
                        height="38vw"
                        y="20%"
                        image={IMG_ROOT+"SecondSection3.png"}

                        m_width={SMALL_IMG_WIDTH}
                        m_height={SMALL_IMG_HEIGHT}
                    />
                </Content>
            </Wrapper>
        </Container>
    );
}

export default SecondSection;