// 배열 렌더링
import React from 'react';

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList({users}) {
    // 동적인 배열을 렌더링할 때는 자바스크립트 배열 내장함수 map()을 사용한다.
    // map() 함수를 사용하여 일반 데이터 배열을 리액트 엘리먼트로 변환
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    );
}

export default UserList;