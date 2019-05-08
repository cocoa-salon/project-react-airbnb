export const innTypeCheckReducer = (innTypes, { type, payload }) => {
    switch (type) {
        case 'check':
            const name = payload.name;
            const isChecked = payload.isChecked;
            return { ...innTypes, [name]: isChecked };
        case 'reset':
            return {
                allhouse: false,
                privateRoom: false,
                hotelRoom: false,
                publicRoom: false
            }
    }
}