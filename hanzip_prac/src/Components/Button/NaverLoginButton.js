import React from 'react';
import Button from './Button';

function NaverLoginButton() {
    const styles = {
        backgroundColor: '#00C73C',
    };

    const onClick = () => {
        console.log('네이버 로그인 버튼 클릭');
    };

    return (
        <Button style={styles} onClick={onClick}>
            네이버 로그인
        </Button>
    );
}

export default NaverLoginButton;