const innTypeModel = {
    allhouse: '집 전체',
    privateRoom: '개인실',
    hotelRoom: '호텔 객실',
    publicRoom: '다인실'
};

const InnTypeTapDisplay = (props) => {
    const checkedList = [];

    for (let prop in props.innTypes) {
        if (props.innTypes[prop] === true) {
            checkedList.push(prop);
        }
    };

    const checkedInnType = checkedList.reduce((acc, innType) => {
        if (innType === 'allhouse') acc.push(innTypeModel.allhouse);
        if (innType === 'privateRoom') acc.push(innTypeModel.privateRoom);
        if (innType === 'hotelRoom') acc.push(innTypeModel.hotelRoom);
        if (innType === 'publicRoom') acc.push(innTypeModel.publicRoom);
        return acc;
    }, []);

    return (
            checkedInnType.length === 0 ? "숙소 타입" :
            checkedInnType.length >= 2 ? `숙소 종류 ${checkedList.length}` :
            checkedInnType.length === 1 ? `${checkedInnType[0]}` : null
    );
}

export { InnTypeTapDisplay };