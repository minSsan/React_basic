import React from 'react';
import axios from 'axios';

const DetailStatic = ({ item }) => {
    return (
        <div>
            {item && (
                <div className="Detail">
                    <h1 style={{ color: "#fff" }}>with Static Generation</h1>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                    <p>{item.id}번째 게시글</p>
                </div>
            )}
        </div>
    );
};

export default DetailStatic;

// 여기서 지정한 경로 페이지(/detail-static/id)는 처음 생성 후에 해당 생성 파일을 그대로 반환
export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { id: "1"} },
            { params: { id: "2"} },
            { params: { id: "3"} },
        ],
        fallback: true, // false인 경우 지정되지 않은 경로에 대한 요청에 404 에러 출력
        // true : 지정되지 않은 경로에 대한 요청에도 대응하여 정적생성을 하도록 함
    };
};

export const getStaticProps = async (ctx) => {
    const id = ctx.params.id;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = res.data;

    return {
        props: {
            item: data,
        },
    };
};