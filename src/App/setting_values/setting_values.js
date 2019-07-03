export const requestURL = {
    FETCH_ALL_DATA : "https://airbnbreactbackend.herokuapp.com/search/rooms",
    SEARCH_WORDS : "https://airbnbreactbackend.herokuapp.com/search/list",
    FETCH_PRICE_RANGE_MAP : "https://airbnbreactbackend.herokuapp.com/search/price_range"

    // FETCH_ALL_DATA: "http://localhost:8080/search/rooms",
    // SEARCH_WORDS: "http://localhost:8080/search/list",
    // FETCH_PRICE_RANGE_MAP : "http://localhost:8080/search/price_range"
};

export const OPERATE_FETCH_TIME = 1000; 
export const nextItemsIdxDefault = "&next_items_idx=1";
export const searchOptionPanelsfilterValues = {

    // 인원 state
    guestsValues : {
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
    },

    // 숙소타입 state
    typeOfPlaceValues : {
        entireRoom: false,
        privateRoom: false,
        hotelRoom: false,
        sharedRoom: false
    },

    // 가격 state
    priceValues : {
        defaultMin: 10000,
        defaultMax: 200000,
        min: 10000,
        max: 200000,
        tabMsg: '가격'
    },

    // 즉시예약 state
    instantBookValues : {
        isChecked: false
    }
};

export const searchOptionTabsValues = {

    // 검색 옵션 탭 활성화 state   
    tabActivated : {
        dates: false,
        guests: false,
        typeOfPlace: false,
        instantBook: false,
        price: false,
        time: false,
        moreFilters: false
    },

    // 검색 옵션 탭 초기화 state  
    tabStatesToClear : {
        dates: false,
        guests: false,
        typeOfPlace: false,
        instantBook: false,
        price: false,
        time: false,
        moreFilters: false
    }
};

export const searchOptionPanelsValues = {
    
    // 패널 삭제 버튼 활성화 토글
    panelClearButtonActivated : {
        dates: false,
        guests: false,
        typeOfPlace: false,
        instantBook: false,
        price: false,
        time: false,
        moreFilters: false
    },
    
    // 패널 상태 초기화 state
    panelStatesToClear : {
        dates: false,
        guests: false,
        typeOfPlace: false,
        instantBook: false,
        price: false,
        time: false,
        moreFilters: false
    }
};