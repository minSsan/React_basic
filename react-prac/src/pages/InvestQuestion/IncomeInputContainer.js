import React, { useRef, useCallback, useState } from 'react';
import Input from '../../Components/Input/Input';
import CostDiv from './costDiv';

const COST_INPUT_WIDTH = "238px";

function IncomeInputContainer() {
    const [income, setIncome] = useState(0);

    const isValid = useRef();

    const handleCostChange = useCallback((e) => {
        // const {name, value} = e.target;
        const value = e.target.value;

        isValid.current = !(/^0/.test(value) || isNaN(parseInt(value.replace(/,/g, ""))));

        // 잘못된 입력일 때는 공백으로 보여줌
        e.target.value = isValid.current ?
            parseInt(value.replace(/,/g, "")).toLocaleString() : '';

        setIncome(v => (isValid.current ? parseInt(value.replace(/,/g, "")) : 0));
    }, []);

    return (
        <>
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
            <CostDiv 
                cost={income}
            />
        </>
    );
}

export default IncomeInputContainer;