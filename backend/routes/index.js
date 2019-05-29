const express = require('express');
const router = express.Router();
const Models = require('../models/data');


const keysToReturn = { name: 1, price: 1, roomType: 1, accommodates: 1 };

// 전체 목록 조회
router.get('/rooms', (req, res) => {
    Models.Stays.find({}, keysToReturn, (err, Stays) => {
        return res.json(Stays);
    });
});

// 조건 쿼리를 적용한 목록 조회
router.get('/rooms/:query', (req, res) => {
    console.log("요청한 쿼리는 " + req.params.query + " 입니다.");
    const queryString = req.params.query;
    const conditionalQuery = generateConditionalQuery(queryString);
    console.log(conditionalQuery);
    Models.Stays.find(conditionalQuery, keysToReturn, (err, Stays) => {
        return res.json(Stays);
    });
});

// DB 조회를 위한 조건 쿼리 생성
const generateConditionalQuery = (queryString) => {
    const queryArrayList = convertQueryArray(queryString); 
    const objectifiedQueryList = convertObjectifiedQueryList(queryArrayList);

    const conditionalQuery = objectifiedQueryList.reduce((acc, v) => {
        let key = Object.keys(v)[0];
        if (key === "roomType") return convertRoomTypeQuery(acc, v, key);
        else if (key === "price_min" || key === "price_max") return convertPriceQuery(acc, v, key);
        else if (key === "adults" || key === "children" || key === "infants") return convertGuestQuery(acc, v, key);
        else if (key === "instantbook") return convertInstantBookQuery(acc, v, key); 
    }, {});
    return conditionalQuery;
};

// 쿼리 스트링을 분석 가능한 배열로 변환
const convertQueryArray = (queryString) => {
    let queryArrayList = queryString.split("&");
    queryArrayList.shift();
    return queryArrayList;
}

// 조건 쿼리를 생성하기 위한 쿼리스트링 객체 변환 
const convertObjectifiedQueryList = (queryArrayList) => {
    const objectifiedQueryList = queryArrayList.reduce((acc, v) => {
        let tempObj = {};
        let eachKeyValue = v.split("=");
        if (eachKeyValue[1] === "true" || eachKeyValue[1] === "false") {
            tempObj[eachKeyValue[0]] = JSON.parse(eachKeyValue[1]);
        } else if (!isNaN(Number(eachKeyValue[1]))) {
            tempObj[eachKeyValue[0]] = Number(eachKeyValue[1]);
        } else {
            tempObj[eachKeyValue[0]] = eachKeyValue[1];
        };
        acc.push(tempObj);
        return acc;
    }, []);
    return objectifiedQueryList;
};

// 숙소타입 쿼리 객체 변환
const convertRoomTypeQuery = (acc, v, key) => {
    if (acc.hasOwnProperty("roomType")) {
        acc[key]['$in'].push(v[key]);
        return acc;
    } else {
        acc[key] = {};
        acc[key]['$in'] = [];
        acc[key]['$in'].push(v[key]);
        return acc;
    };
};

// 가격 쿼리 객체 변환
const convertPriceQuery = (acc, v, key) => {
    if (acc.hasOwnProperty("price")) {
        acc['price']['$lte'] = v[key];
        return acc;
    } else {
        acc['price'] = {};
        acc['price']['$gte'] = v[key];
        return acc;
    };
};

// 게스트 쿼리 객체 변환
const convertGuestQuery = (acc, v, key) => {
    if (acc.hasOwnProperty("accommodates") && key !== "infants") {
        acc['accommodates']['$gte'] += v[key];
        return acc;
    } else if (!acc.hasOwnProperty("accommodates") && key !== "infants") {
        acc['accommodates'] = {};
        acc['accommodates']['$gte'] = v[key];
        return acc;
    } else if (key === "infants") {
        return acc;
    }
};

// 즉시 예약 쿼리 객체 변환
const convertInstantBookQuery = (acc, v, key) => {
    acc['instantBook'] = v[key];
    return acc;
};

router.post('/newInfo', (req, res) => {
    const inn = new Models.Inn();
    inn.name = req.body.name;
    inn.location = req.body.location;
    inn.type = req.body.type;
    inn.num = req.body.num;

    inn.save((err) => {
        if (err) return console.log(err);
    });
});

module.exports = router;