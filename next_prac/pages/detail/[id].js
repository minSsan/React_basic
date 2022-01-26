// [id].js -> dynamic routing
import React from 'react';
import axios from 'axios';

const Detail = ({ item }) => {
    return (
        <div className='Detail'>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <p>{item.id}번째 게시글</p>
        </div>
    );
};

export default Detail;

// ctx를 통해, 자기 자신을 호출한 라우터의 파라미터에 접근 가능.
export const getServerSideProps = async (ctx) => {
    const id = ctx.params.id;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = res.data;

    console.log(data);

    return {
        props: {
            item: data,
        },
    };
};