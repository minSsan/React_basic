// 사용자의 입력을 받아오는 input 태그의 상태 관리
import React, { useState } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef(); // nameInput 이라는 Ref 객체 생성

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target);
        setInputs({
            ...inputs, // 기존의 input 객체를 복사
            [name]: value // name 키를 가진 값을 value로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus(); 
        // nameInput.current: nameInput 이라는 Ref 객체가 가리키고 있는 DOM
    };

    return (
        <div>
            <input 
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}   
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;
