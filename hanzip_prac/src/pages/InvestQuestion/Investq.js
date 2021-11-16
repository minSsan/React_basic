import React, {useState} from 'react';
import './Investq.css';

function InvestQ() {
    const [selected, setSelected] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(selected);
        setSelected({
            ...selected,
            [name]: value,
        });
    }

    return (
        <>
            <div className="investType-container">
                <p>투자자님의 유형을 알려주세요.</p>
                <div className="radio-wrapper">
                    <input 
                        type="radio"
                        id="first"
                        name="invest-type"
                        value="무주택자"
                        onChange={handleChange}
                        />
                    <label htmlFor="first">
                        <p className="title">무주택자</p>
                        <p className="subtitle">제 명의로 된 주택이 아직 없어요</p>
                    </label>
                </div>
                <div className="radio-wrapper">
                    <input 
                        type="radio" 
                        id="second" 
                        name="invest-type" 
                        value="1주택자"
                        onChange={handleChange}
                        />
                    <label htmlFor="second">
                        <p className="title">1주택자</p>
                        <p className="subtitle">제 명의로 된 주택이 1채 있어요</p>
                    </label>
                </div>
                <div className="radio-wrapper">
                    <input type="radio"
                        id="third" 
                        name="invest-type" 
                        value="다주택자"
                        onChange={handleChange}
                        />
                    <label htmlFor="third">
                        <p className="title">다주택자</p>
                        <p className="subtitle">제 명의로 된 주택이 2채 이상 있어요.</p>
                    </label>
                </div>
            </div>
        </>
    );
}

export default InvestQ;