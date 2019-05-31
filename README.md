# Air bnb 검색 UI 컴포넌트 (React.js) 구현 (진행중)

## 주요특징

- react 16.8 hooks 활용하여 클래스형 컴포넌트에서 함수형 컴포넌트로 전환
- useState hook을 통한 상태관리
- react Router를 이용한 url 분기처리
- context API 및 useContext 활용하여 간소한 상태관리 구현
- useReducer hook을 통해 특정 상태 업데이트 로직 별도 분리
- 별도 css sheet 생성 대신 styled component로 기본 스타일 적용

## 주요 기능

### 검색 옵션 패널 기능 구현(일부)

- Header(SearchHeader, SearchPanel), Section 컴포넌트로 구성
- react transition group 라이브러리 이용하여 검색 창 클릭시 확대 애니메이션 구현

<img src="https://user-images.githubusercontent.com/38235501/57766564-87b76200-7742-11e9-80a3-084d4c02fbb3.gif" alt="">

### 검색 탭(에어비앤비 둘러보기)

- 검색 탭 선택시 각 탭에 해당하는 옵션 패널 노출(모두, 숙소, 트립, 레스토랑)

<img src="https://user-images.githubusercontent.com/38235501/57766572-8a19bc00-7742-11e9-8e17-395021912a68.gif" alt="">

- 각 탭 선택시 기존 검색 패널에 설정한 옵션 초기화

<img src="https://user-images.githubusercontent.com/38235501/57766571-8a19bc00-7742-11e9-967b-2cb0e0d10ec5.gif" alt="">

### 검색 옵션 패널(인원, 숙소타입, 즉시예약)

- 인원 패널에서 인원 증감시 버튼 활성화 여부 체크
- useReducer로 통합적인 상태 업데이트
- 어린이, 유아 선택시 성인 자동 추가
- 설정한 인원 수 검색 탭에 반영
- 삭제 시 최소 인원수 유지

<img src="https://user-images.githubusercontent.com/38235501/57766565-884ff880-7742-11e9-8d1a-216bf1da687d.gif" alt="">

- 숙소타입, 즉시예약 패널에서 각 옵션 체크시 검색 탭에 반영
- material UI를 적용한 체크박스, 스위치 컴포넌트

<img src="https://user-images.githubusercontent.com/38235501/57766566-88e88f00-7742-11e9-82d8-f1e134307d9e.gif" alt="">


### 검색 옵션 패널(가격) 기능 구현

- npm rc-slider 라이브러리 이용하여 이중 슬라이더 구현
- 최소,최대 금액 슬라이더 이동시 실시간 가격 반영
- useRef 적용, 슬라이더 이동 시 불필요한 리랜더링 방지
- onAfterChange 이벤트를 통해 슬라이더 이동이 끝난 후 랜더링

<img src="https://user-images.githubusercontent.com/38235501/58684010-9a23d380-83b1-11e9-9970-26e1d3699398.gif" alt="">

- 가격 직접 입력 가능
- 가격 입력 시 슬라이더 막대 위치 자동 변경
- 적용 버튼 클릭시 설정한 가격대 검색 옵션 탭에 반영(금액에 콤마 표시), 패널 닫힘

<img src="https://user-images.githubusercontent.com/38235501/58684200-54b3d600-83b2-11e9-995e-87f28c1f8fbd.gif" alt="">


### DB 연동 및 조회(mongoDB), 결과 표시

- airbnb 샘플 데이터 참고하여 숙소 데이터 schema 및 모델 생성
- 숙소 mock 데이터 생성 및 mongoDB shell 이용하여 insert(30개)
- 최초 페이지 로딩 후 useEffect를 통해 전체 숙소 정보 표시

<img src="https://user-images.githubusercontent.com/38235501/58684655-e2dc8c00-83b3-11e9-9329-a16f21014fd7.gif" alt="">

- 검색옵션 패널에서 선택한 조건에 해당하는 데이터 DB 조회(인원, 숙소타입, 가격, 즉시예약)
- 각 선택 조건에 해당하는 query string 생성
- query string에 대한 DB 조회용 conditional query 객체 생성 로직 구현

<img src="https://user-images.githubusercontent.com/38235501/58685056-664aad00-83b5-11e9-9b28-9ff8cbdfa439.gif" alt="">

**기타 기능 추후 구현 예정**
