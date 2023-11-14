# 미션 수행 내용

## 🚀 설계

### 🏛️ Domain

#### DecemberEvent

- 12월달에 진행하는 이벤트를 관리하고 적용 결과를 반환합니다.

#### MonthlyEvent

- 월마다 진행되는 이벤트목록을 관리.하고 방문 날짜에 해당하는 이벤트 목록을 반환합니다.

#### OrderSheet

- 주문 목록을 관리하고 주문 목록과 주문 금액 합계를 반환합니다.

### 🎮 Controller

#### EventController

- 시스템 흐름 조절을 담당하는 컨트롤러입니다.

### ✨ Service

#### EventService

- 이벤트와 관련된 사항을 처리하는 서비스 레이어입니다.

#### OrderService

- 주문과 관련된 사항을 처리하는 서비스 레이어입니다.

### ✅ Validator

#### OrderValidator

- 주문 목록의 유효성을 검증합니다.

#### VisitDayValidator

- 방문 날짜의 유효성을 검증합니다.

### 🛠️ Utils

#### deepFreeze

- 객체를 깊은 동결 시키는 유틸 함수입니다.

#### getItemInformationByItemName

- 메뉴 이름을 통해 해당 메뉴의 정보를 반환하는 유틸 함수입니다.

#### getItemKindByOrderList

- 주문 목록에서 전달받은 카테고리를 통해 해당 카테고리에 속하는 메뉴의 개수가 몇인지 반환하는 유틸 함수입니다.

#### isWeekend

- 주말/평일 여부를 반환하는 유틸 함수입니다.

### 📚 실행 결과

![result](https://github.com/woowacourse-precourse/javascript-lotto-6/assets/53262430/22b8b1b4-ffd1-4ecc-83a5-eb2446411257)

### 🧪 테스트 결과

![image](https://github.com/woowacourse-precourse/javascript-lotto-6/assets/53262430/4ebf6f5c-5485-4953-8c16-0a68c0477ddf)
