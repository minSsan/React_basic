import React from 'react';

function Hello(props) {
    return (
        <div style={{ color: props.color }}>
            { props.isSpecial && <b>*</b> }
            안녕하세요 {props.name}
        </div>
    );
}

// default 프로퍼티 값을 지정
Hello.defaultProps = {
    name: '이름없음',
};

// Hello 컴포넌트 내보내기 => 다른 컴포넌트에서 사용 가능
export default Hello;
