const typeOfPlaceModel = {
    entireRoom: '집 전체',
    privateRoom: '개인실',
    hotelRoom: '호텔 객실',
    sharedRoom: '다인실'
};

const TypeOfPlaceTapDisplay = (props) => {
    const checkedList = [];

    for (let prop in props.typeOfPlace) {
        if (props.typeOfPlace[prop] === true) {
            checkedList.push(prop);
        }
    };

    const checkedTypeOfPlace = checkedList.reduce((acc, type) => {
        if (type === 'entireRoom') acc.push(typeOfPlaceModel.entireRoom);
        if (type === 'privateRoom') acc.push(typeOfPlaceModel.privateRoom);
        if (type === 'hotelRoom') acc.push(typeOfPlaceModel.hotelRoom);
        if (type === 'sharedRoom') acc.push(typeOfPlaceModel.sharedRoom);
        return acc;
    }, []);

    return (
        checkedTypeOfPlace.length === 0 ? "숙소 타입" :
        checkedTypeOfPlace.length >= 2 ? `숙소 종류 ${checkedList.length}` :
        checkedTypeOfPlace.length === 1 ? `${checkedTypeOfPlace[0]}` : null
    );
}

export default TypeOfPlaceTapDisplay;