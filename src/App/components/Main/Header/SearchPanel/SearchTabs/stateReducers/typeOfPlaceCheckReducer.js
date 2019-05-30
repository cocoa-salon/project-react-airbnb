export const typeOfPlaceCheckReducer = (typeOfPlace, { type, payload }) => {
    switch (type) {
        case 'check':
            const name = payload.name;
            const isChecked = payload.isChecked;
            return { ...typeOfPlace, [name]: isChecked };
        case 'reset':
            return {
                entireRoom: false,
                privateRoom: false,
                hotelRoom: false,
                sharedRoom: false
            }
    }
}