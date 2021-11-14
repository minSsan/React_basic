import React from 'react';
import Button from './Button';

function LoginButton() {
    const onClick = () => {
        console.log('로그인 버튼 누름');
    };

    return (
        <Button onClick={onClick}>
            로그인
        </Button>
    );
}

export default LoginButton;