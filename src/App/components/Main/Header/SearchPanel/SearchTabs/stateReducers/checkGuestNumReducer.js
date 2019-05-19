export const checkGuestNumReducer = (guestNum, { type }) => {

    switch (type) {
        case 'addAdult' : 
            return addAdult(guestNum);
        case 'addChildren' :
            if(guestNum.adultNum === 0) return addEssentialAdult(type, guestNum);
            return addChild(guestNum); 
        case 'addToddler' : 
            if(guestNum.adultNum === 0) return addEssentialAdult(type, guestNum);
            return addToddler(guestNum);  
        case 'removeAdult' :
            return removeAdult(guestNum); 
        case 'removeChildren' : 
            return removeChild(guestNum);  
        case 'removeToddler' :
            return removeToddler(guestNum); 
        case 'reset' :
            return reseGuestNum(); 
        case 'resetAll':
            return { 
                adultNum: 0,
                childNum: 0,
                toddlerNum: 0,
                totalNum: 0,
                removeAdult: false,
                addAdult: true,
                removeChildren: false,
                addChildren: true,
                removeToddler: false,
                addToddler: true, 
            }; 
    };
};

const guestNumLimit = {
    minAdultNum: 1,
    minChildNum: 0,
    minToddlerNum: 0,
    maxAdultNum: 16,
    maxChildNum: 5,
    maxToddlerNum: 5
};

const reseGuestNum = () => {
    return ({
        adultNum: guestNumLimit.minAdultNum,
        childNum: 0,
        toddlerNum: 0,
        totalNum: 1,
        removeAdult: false,
        addAdult: true,
        removeChildren: false,
        addChildren: true,
        removeToddler: false,
        addToddler: true
    });
};

const addEssentialAdult = (buttonName, guestNum) => {
    if (buttonName === "addChildren") {
        return { ...guestNum, adultNum: guestNum.adultNum + guestNumLimit.minAdultNum, childNum: guestNum.childNum + 1, totalNum: 2, removeChildren: true, addChildren: true };
    } if (buttonName === "addToddler") {
        return { ...guestNum, adultNum: guestNum.adultNum + guestNumLimit.minAdultNum, toddlerNum: 1, totalNum: 1, removeToddler: true, addToddler: true };
    };
};

const addAdult = (guestNum) => {
    if (guestNum.adultNum === guestNumLimit.maxAdultNum - 1) {
        return { ...guestNum, adultNum: guestNum.adultNum + 1, totalNum: guestNum.totalNum + 1, removeAdult: true, addAdult: false };
    } else if(guestNum.adultNum === 0 ) {
        return { ...guestNum, adultNum : 1, totalNum : 1, removeAdult: false, addAdult: true };
    } else if ((guestNum.adultNum < guestNumLimit.maxAdultNum && guestNum.adultNum > guestNumLimit.minAdultNum) || 
                (guestNum.adultNum <= guestNumLimit.minAdultNum)) {
        return { ...guestNum, adultNum: guestNum.adultNum + 1, totalNum: guestNum.totalNum + 1, removeAdult: true, addAdult: true };
    } else if (guestNum.adultNum >= guestNumLimit.maxAdultNum) {
        return { ...guestNum, removeAdult: true, addAdult: false };
    };
};

const addChild = (guestNum) => {
    if (guestNum.childNum === 4) {
        return { ...guestNum, childNum: guestNum.childNum + 1, totalNum: guestNum.totalNum + 1, removeChildren: true, addChildren: false };
    } else if ((guestNum.adultNum > 0 && guestNum.childNum < guestNumLimit.maxChildNum && guestNum.childNum > guestNumLimit.minChildNum) || 
                (guestNum.adultNum > 0 && guestNum.childNum <= guestNumLimit.minChildNum) ) {
        return { ...guestNum, childNum: guestNum.childNum + 1, totalNum: guestNum.totalNum + 1, removeChildren: true, addChildren: true };
    } else if (guestNum.adultNum > 0 && guestNum.childNum >= guestNumLimit.maxChildNum) {
        return { ...guestNum, removeChildren: true, addChildren: false };
    };
};

const addToddler = (guestNum) => {
    if (guestNum.toddlerNum === 4) {
        return { ...guestNum, toddlerNum: guestNum.toddlerNum + 1, removeToddler: true, addToddler: false };
    } else if ((guestNum.adultNum > 0 && guestNum.toddlerNum < guestNumLimit.maxToddlerNum && guestNum.toddlerNum > guestNumLimit.minToddlerNum) ||
                (guestNum.adultNum > 0 && guestNum.toddlerNum <= guestNumLimit.minToddlerNum)) {
        return { ...guestNum, toddlerNum: guestNum.toddlerNum + 1, removeToddler: true, addToddler: true };
    } else if (guestNum.adultNum > 0 && guestNum.toddlerNum >= guestNumLimit.maxToddlerNum) {
        return { ...guestNum, removeToddler: true, addToddler: false };
    };
};

const removeAdult = (guestNum) => {
    if (guestNum.adultNum <= guestNumLimit.minAdultNum) {
        return { ...guestNum, removeAdult: false, addAdult: true };
    } else if (guestNum.adultNum === 2) {
        return { ...guestNum, adultNum: guestNum.adultNum - 1, totalNum: guestNum.totalNum - 1, removeAdult: false, addAdult: true };
    } else if (guestNum.adultNum > guestNumLimit.minAdultNum && guestNum.adultNum <= guestNumLimit.maxAdultNum) {
        return { ...guestNum, adultNum: guestNum.adultNum - 1, totalNum: guestNum.totalNum - 1, removeAdult: true, addAdult: true };
    };
};

const removeChild = (guestNum) => {
    if (guestNum.childNum <= guestNumLimit.minChildNum) {
        return { ...guestNum, removeChildren: false, addChildren: true };
    } else if (guestNum.childNum === 1) {
        return { ...guestNum, childNum: guestNum.childNum - 1, totalNum: guestNum.totalNum - 1, removeChildren: false, addChildren: true };
    } else if (guestNum.childNum > guestNumLimit.minChildNum && guestNum.childNum <= guestNumLimit.maxChildNum) {
        return { ...guestNum, childNum: guestNum.childNum - 1, totalNum: guestNum.totalNum - 1, removeChildren: true, addChildren: true };
    };
};

const removeToddler = (guestNum) => {
    if (guestNum.toddlerNum <= guestNumLimit.minToddlerNum) {
        return { ...guestNum, removeToddler: false, addToddler: true };
    } else if (guestNum.toddlerNum === 1) {
        return { ...guestNum, toddlerNum: guestNum.toddlerNum - 1, removeToddler: false, addToddler: true };
    } else if (guestNum.toddlerNum > guestNumLimit.minToddlerNum && guestNum.toddlerNum <= guestNumLimit.maxToddlerNum) {
        return { ...guestNum, toddlerNum: guestNum.toddlerNum - 1, removeToddler: true, addToddler: true };
    };
};