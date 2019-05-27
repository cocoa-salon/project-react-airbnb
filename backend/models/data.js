const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StaysSchema = new Schema({
  // id
  _id: String,
  // 숙박 정보 url
  listingUrl: String,
  // 숙소 이름
  name: String,

  // 설명
  // 요약
  summary: String,
  // 숙소 설명
  space: String,
  // 상세설명
  description: String,
  // 지역정보
  neighborhoodOverview: String,
  // 기타사항
  notes: String,
  // 교통편
  transit: String,
  // 사용가능 공간/시설
  access: String,
  // 게스트와의 교류
  interaction: String,
  // 숙박 규칙
  houseRules: String,


  // 숙소 타입(house)
  propertyType: String,
  // 공간 타입(entireRoom, privateRoom, hotelRoom, sharedRoom )
  roomType: String,
  // 최대 수용 가능 인원(유아 제외)
  accommodates: Number,
  // 가격
  price: Number,

  // 리뷰 개수
  numberOfReviews: Number,
  // 리뷰 평점
  review_scores: {
    accuracy: Number,
    location: Number,
    communication: Number,
    checkin: Number,
    cleanliness: Number,
    value: Number,
    rating: Number
  },

  // 이미지
  images: {
    thumbnailUrl: String,
    mediumUrl: String,
    pictureUrl: String,
    xlPictureUrl: String
  }

});

const Stays = mongoose.model("Stay", StaysSchema);

exports.Stays = Stays;

