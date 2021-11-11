import React, { useState } from 'react';

function Counter() {
    // state: 리액트 컴포넌트의 동적인 값
    // Hooks: 함수형 컴포넌트에서도 state를 관리할 수 있도록 하는 기능
    
    // Hooks에 포함된 함수인 useState를 통해 함수 내부에서도 상태관리 가능
    // useState는 리턴값으로 배열을 반환 
    // =>   첫 번째 원소는 state 변수, 
    //      두 번째 원소는 state 변수의 값을 갱신하는 setter 함수
    //      useState의 파라미터 값은 state 변수의 초깃값
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        // 1. setter 함수에 값으로 전달
        // setter 함수는 파라미터 값을 최신 값으로 갱신함
        // setNumber(number + 1);
        
        // 2. 함수형 업데이트
        setNumber(prevNumber => prevNumber + 1);
    };

    const onDecrease = () => {
        // setNumber(number - 1);
        setNumber(prevNumber => prevNumber - 1);
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;
