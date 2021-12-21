// 배열 렌더링
import React from 'react';

function User({ user, onRemove, onToggle }) {
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