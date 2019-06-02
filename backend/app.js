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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// 라우터 설정
app.use('/search', indexRouter);

// 백엔드 서버 실행
app.listen(port, () =>
    console.log("Express server has started on port " + port)
);