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

**기타 기능 추후 구현 예정**
