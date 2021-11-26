import React, {useState} from 'react';
import Button from '../../Components/Button/Button';
import InvestButton from '../../Components/Button/InvestButton';
import Input from '../../Components/Input/Input';
import './Investq.css';

function InvestQ() {
    const buttonStyle = {
        width: '100%',
        height: '48px',
        fontSize: '20px',
        lineHeight: '29px',
    };

    const [selected, setSelected] = useState({
        invest_type: '',
        invest_want: '',
        invest_location: '',
        invest_period: '',
        invest_funds: 0,
        invest_income: 0,
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSelected({
            ...selected,
            [name]: value,
        });
    }

    let isValid;
    const handleCostChange = (e) => {
        const {name, value} = e.target;

        // 가용자금, 연소득 잘못된 입력 (숫자가 아닌 경우, 0으로 시작) 
        // => 보여지는 값(e.target.value)은 빈 문자열, state 값은 0으로 설정
        isValid = !(/^0/.test(value) || isNaN(value.replace(/,/g, "")));
        // 스크립트 상에서 value 값을 변경해줄 때는 handleChange가 호출되지 x
        e.target.value = isValid ?
            parseInt(value.replace(/,/g, "")).toLocaleString() : '';

        setSelected({
            ...selected,
            [name]: isValid ? parseInt(value.replace(/,/g, "")) : 0,
        });
    }

    const onClick = () => {
        console.log(selected);
    }

    // 투자자 유형
    const INV_TYPES = [
        {
            value: "무주택자",
            subtitle:["제 명의로 된 주택이 아직 없어요"],
        },
        {
            value: "1주택자",
            subtitle:["제 명의로 된 주택이 1채 있어요"],
        },
        {
            value: "다주택자",
            subtitle:["제 명의로 된 주택이 2채 이상 있어요"],
        },
    ];

    // 투자 유형
    const INV_WANTS = [
        {
            value: "투자",
            title: "투자",
            subtitle: ["매수한 주택에", <br />, "거주하지 않을거예요"],
        },
        {
            value: "거주",
            title: "거주",
            subtitle: ["매수한 주택에", <br />, "거주할 거예요"],
        },
        {
            value: "투자거주", // "투자+거주"로 넘겨도 ok? 괜찮으면 title, value 하나로 묶을 것
            title: "투자+거주",
            subtitle: ["매수 이후", <br />, "거주 가능성도 있어요"],
        },
        {
            value: "이사",
            title: "이사",
            subtitle: ["기존 주택을 팔고", <br />, "매수한 주택에 거주할 거예요"],
        },
    ];

    // 투자 지역
    const INV_LOC = [
        "서울", "경기도", "충청도", "경상도", "전라도", "제주도", "상관없음"
    ];

    // 투자 기간
    const INV_PERIOD = [
        "2년이하", "4년이하", "6년이하", "8년이하", "10년이하", "상관없음"
    ];

    return (
        <div id="container">
            <h2 id="header">투자자 질문지 작성</h2>

            <h4>투자자님의 유형을 알려주세요.</h4>
            <span id="investType-container">
                {INV_TYPES.map((type, i) => (
                    <InvestButton 
                        key={"type"+i}
                        id={"type"+i}
                        name="invest_type"
                        value={type.value}
                        onChange={handleChange}
                        title={type.value}
                        subtitle={type.subtitle}
                    />
                ))}
            </span>

            <h4>투자자님은 어떤 투자를 원하시나요?</h4>
            <span className="gridButton-container">
                {INV_WANTS.map((type, i) => (
                    <InvestButton
                        key={"want"+i} 
                        id={"want"+i}
                        name="invest_want"
                        value={type.value}
                        onChange={handleChange}
                        title={type.title}
                        subtitle={type.subtitle}
                    />
                ))}
            </span>

            <hr />

            <h4>희망 투자지역을 선택해주세요.</h4>
            <span className="gridButton-container">
                {INV_LOC.map((loc, i) => (
                    <InvestButton 
                        key={"loc"+i}
                        id={"loc"+i}
                        name="invest_location"
                        value={loc}
                        onChange={handleChange}
                        title={loc}
                        subtitle={[]}
                    />
                ))}
            </span>

            <hr />

            <h4>희망 투자기간을 설정해주세요.<br/>
            <p>Tip: 투자 기간이 길수록 성공적인 투자에 유리해요.</p></h4>
            <span className="gridButton-container">
                {INV_PERIOD.map((period, i) => (
                    <InvestButton 
                        key={"period"+i}
                        id={"period"+i}
                        name="invest_period"
                        value={period}
                        onChange={handleChange}
                        title={period}
                        subtitle={[]}
                    />
                ))}
            </span>

            <hr />

            <h4>가용 자금을 알려주세요.</h4>
            <span className="costInput-container">
                <Input 
                    style={{width: '238px'}}
                    name="invest_funds"
                    type="text"
                    placeholder="1,080,000,000"
                    onChange={handleCostChange}
                />
                <p>원</p>
            </span>
            <h4>연소득을 알려주세요.<br />
            <p>(최근 2개년, 세전기준)</p></h4>
            <span className="costInput-container">
                <Input 
                    style={{width: '238px'}}
                    name="invest_income"
                    type="text"
                    placeholder="570,000,000"
                    onChange={handleCostChange}
                />
                <p>원</p>
            </span>

            <hr />
            
            <Button 
                style={buttonStyle}
                onClick={onClick}
            >
                나의 한집 보러가기
            </Button>
        </div>
    );
}

export default InvestQ;