import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import Container from '../../Components/Container/Vertical';
import Input from '../../Components/Input/Input';
import './Login.css';

function Login() {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        })
    };

    // basic login btn onclick
    const onClick = () => {
        console.log("로그인 버튼 누름");
        console.log(userInfo);
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
            <form>
                <p>이메일</p>
                <Input
                    name="email"
                    type="email"
                    placeholder="이메일 주소"
                    onChange={handleChange}
                />
                <p>비밀번호</p>
                <Input
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    onChange={handleChange}
                />
            </form>
            <Button onClick={onClick}>로그인</Button>
            <Button onClick={kakaoOnclick} style={kakaoStyle}>카카오 로그인</Button>
            <Button onClick={naverOnClick} style={naverStyle}>네이버 로그인</Button>
        </Container>
    );
}

export default Login;