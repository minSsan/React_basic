// 배열 렌더링
import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    // useEffect(() => {
    //     // 마운트될 때
    //     console.log('컴포넌트가 화면에 나타남');
    //     return () => { // cleanup 함수. deps 비어있음 -> 컴포넌트 사라질 때 호출
    //         // 언마운트될 때
    //         console.log('컴포넌트가 화면에서 사라짐');
    //     };
    // }, []);
    // deps 배열이 비어있는 경우
    // -> 컴포넌트 처음 나타날 때만 useEffect에 등록된 함수 호출

    // useEffect(() => {
    //     // 마운트될 때
    //     console.log('user 값이 설정됨');
    //     console.log(user);
    //     // 언마운트될 때, user 값이 바뀔 때
    //     return () => {
    //         console.log('user 가 바뀌기 전..');
    //         console.log(user);
    //     };
    // }, [user]);
    // deps에 값을 넣음 => 컴포넌트가 처음 마운트될 때에도 호출, 지정된 값이
    // 바뀔 때에도 호출. 그리고 deps 안에 특정 값이 있음 => 언마운트시에도 호출, 
    // 값이 바뀌기 직전에도 호출

    useEffect(() => {
        console.log(user);
    });
    // deps 파라미터를 생략하면 컴포넌트가 리렌더링 될 때마다 호출

    return (
        <div>
            <b 
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}) {
    // 동적인 배열을 렌더링할 때는 자바스크립트 배열 내장함수 map()을 사용한다.
    // map() 함수를 사용하여 일반 데이터 배열을 리액트 엘리먼트로 변환
    return (
        <div>
            {users.map(user => (
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default React.memo(UserList);