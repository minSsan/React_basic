import React, {useState} from 'react';
import InvestTypeButton from '../../Components/Button/InvestTypeButton';
import InvestWantButton from '../../Components/Button/InvestWantButton';
import './Investq.css';

function InvestQ() {
    const [selected, setSelected] = useState({
        invest_type: '',
        invest_want: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setSelected({
            ...selected,
            [name]: value,
        });

        console.log(selected);
    }

    const INV_TYPES = [
        {
            id: "type1",
            value: "무주택자",
            title:"무주택자",
            subtitle:"제 명의로 된 주택이 아직 없어요",
        },
        {
            id: "type2",
            value: "1주택자",
            title:"1주택자",
            subtitle:"제 명의로 된 주택이 1채 있어요",
        },
        {
            id: "type3",
            value: "다주택자",
            title:"다주택자",
            subtitle:"제 명의로 된 주택이 2채 이상 있어요.",
        },
    ];

    const INV_WANTS = [
        {
            id: "want1",
            value: "투자",
            title: "투자",
            subtitle1: "매수한 주택에",
            subtitle2: "거주하지 않을거예요.",
        },
        {
            id: "want2",
            value: "거주",
            title: "거주",
            subtitle1: "매수한 주택에",
            subtitle2: "거주할 거예요.",
        },
        {
            id: "want3",
            value: "투자거주",
            title: "투자+거주",
            subtitle1: "매수 이후",
            subtitle2: "거주 가능성도 있어요.",
        },
        {
            id: "want4",
            value: "이사",
            title: "이사",
            subtitle1: "기존 주택을 팔고",
            subtitle2: "매수한 주택에 거주할 거예요.",
        },
    ];

    return (
        <div id="container">
            <h4>투자자님의 유형을 알려주세요.</h4>
            <span id="investType-container">
                {INV_TYPES.map((type) => (
                    <InvestTypeButton 
                        key={type.id}
                        id={type.id}
                        value={type.value}
                        onChange={handleChange}
                        title={type.title}
                        subtitle={type.subtitle}
                    />
                ))}
            </span>

            <h4>투자자님은 어떤 투자를 원하시나요?</h4>
            <span id="investWant-container">
                {INV_WANTS.map((type) => (
                    <InvestWantButton
                        key={type.id} 
                        id={type.id}
                        value={type.value}
                        onChange={handleChange}
                        title={type.title}
                        subtitle1={type.subtitle1}
                        subtitle2={type.subtitle2}
                    />
                ))}
            </span>
        </div>
    );
}

export default InvestQ;