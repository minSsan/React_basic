import React from 'react';

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

function CostDiv({cost}) {
    console.log("CostDiv rendered");
    const cost_KOR = cost_to_KR(cost);
    return (
        <>
            <div>
                {cost_KOR}
            </div>
        </>
    );
}

export default CostDiv;