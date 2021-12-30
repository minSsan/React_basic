import React, { useRef, useCallback, useState } from 'react';
import Input from '../../Components/Input/Input';
import CostDiv from './costDiv';

const COST_INPUT_WIDTH = "238px";

function FundsInputContainer(props) {
    const [funds, setFunds] = useState(0);

    const isValid = useRef();
    const handleCostChange = useCallback((e) => {
        const {name, value} = e.target;
        // const value = e.target.value;

        isValid.current = !(/^0/.test(value) || isNaN(parseInt(value.replace(/,/g, ""))));

        // 잘못된 입력일 때는 공백으로 보여줌
        e.target.value = isValid.current ?
            parseInt(value.replace(/,/g, "")).toLocaleString() : '';

        setFunds(v => (isValid.current ? parseInt(value.replace(/,/g, "")) : 0));
        props.saveCostsInfo(name, isValid.current ? parseInt(value.replace(/,/g, "")) : 0);
    }, []);

    return (
        <>
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
            <CostDiv 
                cost={funds}
            />
        </>
    );
}

export default FundsInputContainer;