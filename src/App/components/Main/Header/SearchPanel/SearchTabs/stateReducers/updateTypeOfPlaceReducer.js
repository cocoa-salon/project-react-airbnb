const updateTypeOfPlaceReducer = (typeOfPlace, { type, payload }) => {
    switch (type) {
        case 'check':
            const name = payload.name;
            const isChecked = payload.isChecked;
            return { ...typeOfPlace, [name]: isChecked };
        case 'clear':
            return {
                entireRoom: false,
                privateRoom: false,
                hotelRoom: false,
                sharedRoom: false
            };
    };
};

export default updateTypeOfPlaceReducer;