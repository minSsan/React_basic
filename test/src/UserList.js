// 배열 렌더링
import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    // useEffect(() => {
    //     console.log('컴포넌트가 화면에 나타남');
    //     return () => {
    //         console.log('컴포넌트가 화면에서 사라짐');
    //     };
    // }, []);

    useEffect(() => {
        // 마운트될 때
        console.log('user 값이 설정됨');
        console.log(user);
        // 언마운트될 때
        return () => {
            console.log('user 가 바뀌기 전..');
            console.log(user);
        };
    }, [user]);
    // deps에 값을 넣음 => 컴포넌트가 처음 마운트될 때에도 호출, 지정된 값이
    // 바뀔 때에도 호출. 그리고 deps 안에 특정 값이 있음 => 언마운트시에도 호출, 
    // 값이 바뀌기 직전에도 호출

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

export default UserList;