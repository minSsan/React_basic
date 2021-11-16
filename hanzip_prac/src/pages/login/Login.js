import React from 'react';
import Button from '../../Components/Button/Button';
import Container from '../../Components/Container/Vertical';
import './Login.css';

function Login() {
    // basic login btn onclick
    const onClick = () => {
        console.log("로그인 버튼 누름");
    };

    // kakao btn style
    const kakaoStyle = {
        backgroundColor: "yellow",
    };
    // kakao login btn onclick
    const kakaoOnclick = () => {
        console.log("카카오 로그인 버튼 누름");
    };

    // naver btn style
    const naverStyle = {
        backgroundColor: '#00C73C',
    };
    // naver btn onclick
    const naverOnClick = () => {
        console.log("네이버 로그인 버튼 누름");
    };

    return (
        <Container>
            <Button onClick={onClick}>로그인</Button>
            <Button onClick={kakaoOnclick} style={kakaoStyle}>카카오 로그인</Button>
            <Button onClick={naverOnClick} style={naverStyle}>네이버 로그인</Button>
        </Container>
    );
}

export default Login;