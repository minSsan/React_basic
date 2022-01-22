import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const getList = async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            const data = res.data;
            setList(data);
        };
        getList();
    }, []);

    return (
        <div className="About">
            <h1>여기는 About 페이지 입니다.</h1>
            {list.length && 
                list.slice(0, 10).map((item) => <li key={item.id}>{item.title}</li>)}
        </div>
    );
};

export default About;