const updateGuestsReducer = (guestsNum, { type }) => {

    switch (type) {
        case ' addAdults' : 
            return  addAdults(guestsNum);
        case 'addChildren' :
            if(guestsNum.adultsNum === 0) return addEssentialAdult(type, guestsNum);
            return  addChildren(guestsNum); 
        case ' addInfants' : 
            if(guestsNum.adultsNum === 0) return addEssentialAdult(type, guestsNum);
            return  addInfants(guestsNum);  
        case 'removeAdults' :
            return removeAdults(guestsNum); 
        case 'removeChildren' : 
            return removeChildren(guestsNum);  
        case 'removeInfants' :
            return removeInfants(guestsNum); 
        case 'clear' :
            return reseGuestsNum(); 
        case 'clearAll':
            return { 
                adultsNum: 0,
                childrenNum: 0,
                infantsNum: 0,
                totalNum: 0,
                removeAdults: false,
                 addAdults: true,
                removeChildren: false,
                addChildren: true,
                removeInfants: false,
                 addInfants: true, 
            }; 
    };
};

const guestsNumLimit = {
    minAdultsNum: 1,
    minChildrenNum: 0,
    minInfantsNum: 0,
    maxAdultsNum : 16,
     maxChildrenNum : 5,
    maxInfantsNum : 5
};

const reseGuestsNum = () => {
    return ({
        adultsNum: guestsNumLimit.minAdultsNum,
        childrenNum: 0,
        infantsNum: 0,
        totalNum: 1,
        removeAdults: false,
         addAdults: true,
        removeChildren: false,
        addChildren: true,
        removeInfants: false,
         addInfants: true
    });
};

const addEssentialAdult = (buttonName, guestsNum) => {
    if (buttonName === "addChildren") {
        return { ...guestsNum, adultsNum: guestsNum.adultsNum + guestsNumLimit.minAdultsNum, childrenNum: guestsNum.childrenNum + 1, totalNum: 2, removeChildren: true, addChildren: true };
    } if (buttonName === " addInfants") {
        return { ...guestsNum, adultsNum: guestsNum.adultsNum + guestsNumLimit.minAdultsNum, infantsNum: 1, totalNum: 1, removeInfants: true,  addInfants: true };
    };
};

const  addAdults = (guestsNum) => {
    if (guestsNum.adultsNum === guestsNumLimit.maxAdultsNum  - 1) {
        return { ...guestsNum, adultsNum: guestsNum.adultsNum + 1, totalNum: guestsNum.totalNum + 1, removeAdults: true,  addAdults: false };
    } else if(guestsNum.adultsNum === 0 ) {
        return { ...guestsNum, adultsNum : 1, totalNum : 1, removeAdults: false,  addAdults: true };
    } else if ((guestsNum.adultsNum < guestsNumLimit.maxAdultsNum  && guestsNum.adultsNum > guestsNumLimit.minAdultsNum) || 
                (guestsNum.adultsNum <= guestsNumLimit.minAdultsNum)) {
        return { ...guestsNum, adultsNum: guestsNum.adultsNum + 1, totalNum: guestsNum.totalNum + 1, removeAdults: true,  addAdults: true };
    } else if (guestsNum.adultsNum >= guestsNumLimit.maxAdultsNum ) {
        return { ...guestsNum, removeAdults: true,  addAdults: false };
    };
};

const  addChildren = (guestsNum) => {
    if (guestsNum.childrenNum === 4) {
        return { ...guestsNum, childrenNum: guestsNum.childrenNum + 1, totalNum: guestsNum.totalNum + 1, removeChildren: true, addChildren: false };
    } else if ((guestsNum.adultsNum > 0 && guestsNum.childrenNum < guestsNumLimit.maxChildrenNum  && guestsNum.childrenNum > guestsNumLimit.minChildrenNum) || 
                (guestsNum.adultsNum > 0 && guestsNum.childrenNum <= guestsNumLimit.minChildrenNum) ) {
        return { ...guestsNum, childrenNum: guestsNum.childrenNum + 1, totalNum: guestsNum.totalNum + 1, removeChildren: true, addChildren: true };
    } else if (guestsNum.adultsNum > 0 && guestsNum.childrenNum >= guestsNumLimit.maxChildrenNum ) {
        return { ...guestsNum, removeChildren: true, addChildren: false };
    };
};

const  addInfants = (guestsNum) => {
    if (guestsNum.infantsNum === 4) {
        return { ...guestsNum, infantsNum: guestsNum.infantsNum + 1, removeInfants: true,  addInfants: false };
    } else if ((guestsNum.adultsNum > 0 && guestsNum.infantsNum < guestsNumLimit.maxInfantsNum  && guestsNum.infantsNum > guestsNumLimit.minInfantsNum) ||
                (guestsNum.adultsNum > 0 && guestsNum.infantsNum <= guestsNumLimit.minInfantsNum)) {
        return { ...guestsNum, infantsNum: guestsNum.infantsNum + 1, removeInfants: true,  addInfants: true };
    } else if (guestsNum.adultsNum > 0 && guestsNum.infantsNum >= guestsNumLimit.maxInfantsNum ) {
        return { ...guestsNum, removeInfants: true,  addInfants: false };
    };
};

const removeAdults = (guestsNum) => {
    if (guestsNum.adultsNum <= guestsNumLimit.minAdultsNum) {
        return { ...guestsNum, removeAdults: false,  addAdults: true };
    } else if (guestsNum.adultsNum === 2) {
        return { ...guestsNum, adultsNum: guestsNum.adultsNum - 1, totalNum: guestsNum.totalNum - 1, removeAdults: false,  addAdults: true };
    } else if (guestsNum.adultsNum > guestsNumLimit.minAdultsNum && guestsNum.adultsNum <= guestsNumLimit.maxAdultsNum ) {
        return { ...guestsNum, adultsNum: guestsNum.adultsNum - 1, totalNum: guestsNum.totalNum - 1, removeAdults: true,  addAdults: true };
    };
};

const removeChildren = (guestsNum) => {
    if (guestsNum.childrenNum <= guestsNumLimit.minChildrenNum) {
        return { ...guestsNum, removeChildren: false, addChildren: true };
    } else if (guestsNum.childrenNum === 1) {
        return { ...guestsNum, childrenNum: guestsNum.childrenNum - 1, totalNum: guestsNum.totalNum - 1, removeChildren: false, addChildren: true };
    } else if (guestsNum.childrenNum > guestsNumLimit.minChildrenNum && guestsNum.childrenNum <= guestsNumLimit.maxChildrenNum ) {
        return { ...guestsNum, childrenNum: guestsNum.childrenNum - 1, totalNum: guestsNum.totalNum - 1, removeChildren: true, addChildren: true };
    };
};

const removeInfants = (guestsNum) => {
    if (guestsNum.infantsNum <= guestsNumLimit.minInfantsNum) {
        return { ...guestsNum, removeInfants: false,  addInfants: true };
    } else if (guestsNum.infantsNum === 1) {
        return { ...guestsNum, infantsNum: guestsNum.infantsNum - 1, removeInfants: false,  addInfants: true };
    } else if (guestsNum.infantsNum > guestsNumLimit.minInfantsNum && guestsNum.infantsNum <= guestsNumLimit.maxInfantsNum ) {
        return { ...guestsNum, infantsNum: guestsNum.infantsNum - 1, removeInfants: true,  addInfants: true };
    };
};

export default updateGuestsReducer;