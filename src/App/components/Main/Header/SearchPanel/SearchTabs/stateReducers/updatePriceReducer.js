const updatePriceReducer = (price, { type, payload }) => {
    switch (type) {
        case 'setPrices':
            return handleOnAfterChange(price, payload.minValue, payload.maxValue);
        case 'setPriceMin':
            return handleChangeMin(price, payload.minValue);
        case 'setPriceMax':
            return handleChangeMax(price, payload.maxValue);
        case 'clear':
            return clearChecked();
        case 'setTabState':
            return setTabState(price, payload.tabMsg)
    }
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

const clearChecked = () => {
    return {
        defaultMin: 10000,
        defaultMax: 500000,
        min: 10000,
        max: 500000,
        tabMsg: '가격'
    };
};

const setTabState = (price, tabMsg) => {
    return { ...price, tabMsg: tabMsg };
};

export default updatePriceReducer;