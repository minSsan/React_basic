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

const Content = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ContentTitle = styled.p`
    color: #0083FF;

    font-size: 4vw;
    font-weight: 300;

    margin-bottom: 1.6vw;
`;

const ContentText = styled.p`
    color: #333333;

    font-size: 1.6vw;
`;

const Image = styled.div`
    width: 20.8vw;
    height: 38vw;

    margin: ${(props) => props.margin};

    background-image: url(${(props) => 'img/'+props.image});
    background-size: cover;
    background-repeat: no-repeat;
`;

function SecondSection() {
    return (
        <Container>
            <Wrapper>
                <StyledTitle>
                    한집<br />
                    이용방법
                </StyledTitle>
                <Content>
                    <ContentText>
                        <ContentTitle>01</ContentTitle>
                        5분 질문지 작성으로 <br />찾고 있는 매물을 알려주세요.
                    </ContentText>
                    <Image 
                        margin="-25% 0 0 0"
                        image="SecondSection1.png"
                    />
                </Content>
            </Wrapper>
        </Container>
    );
}

export default SecondSection;