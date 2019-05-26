// 패키지 불러오기
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const port = process.env.PORT || 8080;
const app = express();


app.use(cors());


// 데이터 베이스 연결
const dbRoute = `mongodb+srv://dbUser:dbmaster119@cluster0-ekuau.gcp.mongodb.net/airbnb_test?retryWrites=true`;
mongoose.connect(dbRoute, { useNewUrlParser: true});
const db = mongoose.connection;
db.once('open', function(){
    // mongoDB 서버에 연결시 메시지 출력
    console.log("Connected to mongoDB server");
});
db.on('error', console.error.bind(console, "MongoDB connection error"));



// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// 라우터 설정
app.use('/search', indexRouter);

// 백엔드 서버 실행하기
app.listen(port, () =>
    console.log("Express server has started on port " + port)
);


// 설정한 스키마와 모델을 가지고 도큐먼트 생성
// const batesMotel = new Models.Inn({name : 'Inn1', location: "LA", type: "motel", num: 1});

// batesMotel.save((err, batesMotel) => {
//   if(err) return console.log(err);
// });

// const hotelMumbai = new Models.Inn({name: 'Inn2', location: "Mumbai", type: "hotel", num: 2});

// hotelMumbai.save((err, hotelMumbai) => {
//   if(err) return console.log(err);
// });

// const jake = new Models.HostInfo({name: "Jake", tier: 3 });

// jake.save((err, Jake) => {
//   if(err) return console.log(err);
// });

// const fin = new Models.HostInfo({name: "Fin", tier: 2});

// fin.save((err, Fin) => {
//   if(err) return console.log(err);
// });


