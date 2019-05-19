export const setPriceReducer = (price, { type, payload }) => {
    switch (type) {
        case 'setPrices':
            return handleOnAfterChange(price, payload.minValue, payload.maxValue);
        case 'setPriceMin':
            return handleChangeMin(price, payload.minValue);
        case 'setPriceMax':
            return handleChangeMax(price, payload.maxValue);
        case 'reset':
            return resetChecked();
        case 'setTabState':
            return setTabState(price, payload.tabMsg)
    }
};

function numberFormat(inputNumber) {
    return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const handleOnAfterChange = (price, minValue, maxValue) => {
    return { ...price, min: minValue, max: maxValue };
};

const handleChangeMin = (price, minValue) => {
    return { ...price, min: minValue };
};

const handleChangeMax = (price, maxValue) => {
    return { ...price, max: maxValue };
};

const resetChecked = () => {
    return {
        defaultMin: 12000,
        defaultMax: 1000000,
        min: 12000,
        max: 1000000,
        tabMsg: '가격'
    };
};

const setTabState = (price, tabMsg) => {
    return { ...price, tabMsg: tabMsg };
};

