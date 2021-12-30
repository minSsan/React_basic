// state로 관리: string invest_cost_text, string invest_income_text
// invest_cost, invest_income input 값 변화할 때마다
// (= onCostChange) 금액 표시 변경

import React, {useCallback, useState, useRef, useMemo} from 'react';
import VerticalContainer from '../../Components/Container/Vertical';
import HeaderTitle from '../../Components/Text/HeaderTitle';
import Button from '../../Components/Button/Button';
import RadioButton from '../../Components/Button/RadioButton';
import Input from '../../Components/Input/Input';
import './Investq.css';

const SCREEN_WIDTH = "342px";
const TYPE_BTN_HEIGHT = "75px";
const COST_INPUT_WIDTH = "238px";

// cost: int, return: string
const cost_to_KR = (cost) => {
    let result = '';
    cost = parseInt(cost / 10000);
    if(cost === 0)
        return '';

    if (parseInt(cost / 10000) !== 0) {
        result += parseInt(cost / 10000) + "억";
    }

    if(parseInt((cost % 10000) / 1000) !== 0) {
        result += parseInt((cost % 10000) / 1000);
        return (
            parseInt(((cost % 10000) % 1000) / 100) === 0 ?
                result + "천만원" : 
                result + "천" + parseInt(((cost % 10000) % 1000) / 100) + "백만원"
        );
    }
    return (
        parseInt(((cost % 10000) % 1000) / 100) === 0 ? 
            (result ? result + "원" : "") : 
            result + parseInt(((cost % 10000) % 1000) / 100) + "백만원"
    );
}

function InvestQ() {
    console.log("InvestQ rendered");
    const [selected, setSelected] = useState({
        invest_type: '',
        invest_want: '',
        invest_location: '',
        invest_period: '',
        invest_funds: 0,
        invest_income: 0,
    });

    const funds_kor = useMemo(() => cost_to_KR(selected.invest_funds), [selected.invest_funds]);
    const income_kor = useMemo(() => cost_to_KR(selected.invest_income), [selected.invest_income]);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setSelected({
            ...selected,
            [name]: value,
        });
    }, []);

    const isValid = useRef();
    const handleCostChange = useCallback((e) => {
        const { name, value } = e.target;

        isValid.current = !(/^0/.test(value) || isNaN(parseInt(value.replace(/,/g, ""))));

        // 잘못된 입력일 때는 공백으로 보여줌
        e.target.value = isValid.current ?
            parseInt(value.replace(/,/g, "")).toLocaleString() : '';

        setSelected(selected => ({
            ...selected,
            [name]: isValid.current ? parseInt(value.replace(/,/g, "")) : 0,
        }));

        // setCostsKor({
        //     ...costs_kor,
        //     [name]: cost_to_KR(selected[name])
        // });    
    }, []);

    const onClick = useCallback(() => {
        console.log(selected);
    }, [selected]);

    // 투자자 유형
    const INV_TYPES = [
        {
            value: "무주택자",
            title: "무주택자",
            subtitle: ["제 명의로 된 주택이 아직 없어요"],
        },
        {
            value: "1주택자",
            title: "1주택자",
            subtitle: ["제 명의로 된 주택이 1채 있어요"],
        },
        {
            value: "다주택자",
            title: "다주택자",
            subtitle: ["제 명의로 된 주택이 2채 이상 있어요"],
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
        <VerticalContainer width={SCREEN_WIDTH}>
            <HeaderTitle>투자자 질문지 작성</HeaderTitle>

            <h4>투자자님의 유형을 알려주세요.</h4>
            <span id="investType-container">
                {INV_TYPES.map((type, i) => (
                    <RadioButton 
                        {...type}
                        key={"type"+i}
                        id={"type"+i}
                        name="invest_type"
                        onChange={handleChange}

                        height={TYPE_BTN_HEIGHT}
                        margin="10px 0"
                    />
                ))}
            </span>

            <h4>투자자님은 어떤 투자를 원하시나요?</h4>
            <span className="gridButton-container">
                {INV_WANTS.map((type, i) => (
                    <RadioButton
                        {...type}
                        key={"want"+i} 
                        id={"want"+i}
                        name="invest_want"
                        onChange={handleChange}
                    />
                ))}
            </span>

            <hr />

            <h4>희망 투자지역을 선택해주세요.</h4>
            <span className="gridButton-container">
                {INV_LOC.map((loc, i) => (
                    <RadioButton 
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
                    <RadioButton
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
                    name="invest_funds"
                    type="text"
                    onChange={handleCostChange}
                    width={COST_INPUT_WIDTH}
                    placeholder="1,080,000,000"
                />
                <p>원</p>
            </span>
            <div>{funds_kor}</div>
            
            <h4>연소득을 알려주세요.<br />
            <p>(최근 2개년, 세전기준)</p></h4>
            <span className="costInput-container">
                <Input 
                    name="invest_income"
                    type="text"
                    onChange={handleCostChange}
                    width={COST_INPUT_WIDTH}
                    placeholder="570,000,000"
                />
                <p>원</p>
            </span>
            <div>{income_kor}</div>

            <hr />
            
            <Button 
                onClick={onClick}
                fontSize="20px"
            >
                나의 한집 보러가기
            </Button>
        </VerticalContainer>
    );
}

export default InvestQ;