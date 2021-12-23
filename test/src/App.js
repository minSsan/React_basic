import React, {useRef, useState, useMemo} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

// [useRef]
// 1. 함수형 컴포넌트에서 특정 DOM을 선택하기 위함.
// 2. 컴포넌트 안에서 조회 및 수정할 수 있는 변수를 관리하기 위함.
//    (useRef로 관리하는 변수는 값이 바뀌어도 컴포넌트가 리렌더링되지 않는다.
//    상태같은 경우에는 setState가 호출되고, 렌더링이 되고 나서 업데이트된 값을
//    볼 수 있는 반면에, useRef로 관리하는 변수는 리렌더링 없이, 업데이트 후 바로 조회할 수 있다.)

// +@
// useRef 객체는 전역 저장소에 저장되기 때문에 함수가 재호출되더라도
// 마지막으로 업데이트된 current 값이 유지된다. 그리고 매번 동일한 메모리 주소(전역변수)
// 를 가지기 때문에, 값이 변경되더라도 리렌더링이 되지 않는 것이다. 

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;
  
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active: true,
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: true,
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false,
    },
  ]);

  const nextId = useRef(4); // .current의 기본 값은 4
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    setUsers([...users, user]);
    // setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    });

    nextId.current += 1;

  };

  const onRemove = id => {
    // user.id가 파라미터로 일치하지 않는 원소만 추출하여 새로운 배열 생성
    // user.id 가 id 인 요소 제거
    // 배열의 요소를 추가 / 제거할 경우에 불변성을 유지해야한다.
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? {...user, active: !user.active} : user
      )
    );
  };
  
  // const count = countActiveUsers(users);
  // 이렇게 호출하게 되면, input 값이 바뀔 때마다 countActiveUsers도 다시 호출됨.
  // => input의 value 값을 state로 등록했기 때문에,
  // 해당 값이 바뀔 때마다 전체 화면이 리렌더링되기 때문.

  const count = useMemo(() => countActiveUsers(users), [users]);
  // 첫 번째 파라미터: 어떻게 연산할지 정의하는 함수
  // 두 번째 파라미터: deps 배열.
  //    => 넣은 내용이 바뀌면 등록한 함수를 호출해서 값을 연산해줌.
  //       넣은 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용.

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
