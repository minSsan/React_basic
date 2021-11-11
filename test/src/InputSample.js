// 사용자의 입력을 받아오는 input 태그의 상태 관리
import React, { useState } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
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
    };

    return (
        <div>
            <input placeholder="이름" onChange={onChange} value={name}/>
            <input placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;
