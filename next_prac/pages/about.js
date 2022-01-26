import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const About = ({list}) => {
    // 1. 기존 CSR 방식
    // : (Next에서는 Static Generation이 디폴트 
    //      -> build시 모든 html 문서 pre-rendering)
    //      -> 맨 처음에 list의 length가 0. 순간적으로 0이라는 데이터가 응답됨

    // const [list, setList] = useState([]);
    // useEffect(() => {
    //     const getList = async () => {
    //         const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    //         const data = res.data;
    //         setList(data);
    //     };
    //     getList();
    // }, []);

    // 1-1. list의 내용이 항상 고정된 형식 및 내용인 경우
    // : 요청이 올 때마다 html 문서를 생성할 필요 X.
    //   첫 요청에 하나의 HTML을 생성하고, 이후 요청에는 동일한 문서를 반환
    //   이 때, 화면에 뿌려줄 데이터 역시 미리 서버에서 처리하여 완성된 HTML 문서를 반환 -> SEO 적용 용이

    return (
        <div className="About">
            <h1>여기는 About 페이지 입니다.</h1>
            {list.length && 
                list.slice(0, 10).map((item) => 
                    <li key={item.id}>
                        <Link href={`/detail/${item.id}`}>{item.title}</Link>
                    </li>
                )}
        </div>
    );
};

export default About;

// Static Generation을 특정 데이터와 함께 하는 경우(=항상 동일한 데이터, 문서 구조를 갖는 페이지)
// : getStaticProps라는 비동기 함수를 사용.
export const getStaticProps = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    const data = res.data;

    console.log(data[1]);

    return {
        props: {
            list: data,
        },
    };
}