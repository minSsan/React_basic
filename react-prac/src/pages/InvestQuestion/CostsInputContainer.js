import React, { useRef, useCallback, useState } from 'react';
import Input from '../../Components/Input/Input';
import CostDiv from './CostDiv';

const COST_INPUT_WIDTH = "238px";

function CostsInputContainer({name, saveCostsInfo, placeholder}) {
    const [cost, setCost] = useState(0);

    const isValid = useRef();
    const handleCostChange = useCallback((e) => {
        const value = e.target.value;

        isValid.current = !(/^0/.test(value) || isNaN(parseInt(value.replace(/,/g, ""))));

        // 잘못된 입력일 때는 공백으로 보여줌
        e.target.value = isValid.current ?
            parseInt(value.replace(/,/g, "")).toLocaleString() : '';

        setCost(v => (isValid.current ? parseInt(value.replace(/,/g, "")) : 0));
        saveCostsInfo(name, isValid.current ? parseInt(value.replace(/,/g, "")) : 0);
    }, []);

    return (
        <>
            <span className="costInput-container">
                <Input 
                    name={name}
                    type="text"
                    onChange={handleCostChange}
                    width={COST_INPUT_WIDTH}
                    placeholder={placeholder}
                />
                <p>원</p>
            </span>
            <CostDiv 
                cost={cost}
            />
        </>
    );
}

export default CostsInputContainer;