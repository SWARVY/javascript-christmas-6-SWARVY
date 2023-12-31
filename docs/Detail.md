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

### 🌈 과제 진행 소감

처음 문제를 봤을 때 '와 이거 어떻게 구현하지' 라는 생각이 들었던 문제였습니다. 마지막 문제답게 요구사항도, 구현해야할 내용도 가득했습니다.
하지만 한편으로는 이 모든 기능을 구현할 수 있다면 나의 실력도 더 늘 수 있지 않을까 라는 생각도 들어 설렜던 것 같습니다.

당연한 이야기로, 지금까지 나왔던 그 어떤 문제보다도 더 이번 고민을 했던 것 같습니다.
이전 주차에서 끊임없이 고민했었던 '어떻게 하면 객체를 SOLID하게 작성할 수 있을까?', '어떻게 하면 서비스 레이어를 잘 적용할 수 있을까?' 같은 고민부터,
'12월이 아닌 다른 달의 이벤트로 확장할 수도 있는데, 이런 내용들을 고려하면 어떻게 작성할 수 있을까?' '메뉴가 나중에 추가되었을 때 기존의 코드를 최대한 건들지 않고 추가할 수 있도록 해야겠다'까지
이번 문제를 해결하기 위한 설계에 대해서 끊임없이 고민했습니다.

특히 '이후에 요구사항이 추가된다면 기존의 코드를 최대한 건드리지 않도록 작성하자' 라는 생각이 바탕에 있었습니다.
이후에 이벤트가 추가 될 수도 있고, 메뉴가 추가 될 수도 있기때문에 이를 생각하지 않고 코딩한다면 코드의 완성도가 떨어질 것 같다는 생각을 했습니다.

다행히도, 이 부분에 대해서 이전에 블로그를 직접 개발하면서 얻어낸 노하우들을 떠올릴 수 있었고. 해당 내용들을 별도의 상수로 설계하여 관리하면 되겠다는 생각이 들었습니다.
이전 미션에서도 상수를 꾸준히 분리해오긴 했으나, 상수 사용이 단순히 하드코딩을 피하기 위해서 사용했었다면 이번 미션에서는 유지보수성에 초점을 두어 상수를 설계했고,
이를 위해 많은 레퍼런스를 찾아보며 이전보다 상수 사용에 대한 이해도를 높일 수 있었던 것 같습니다.

또한 서비스 레이어를 설계하면서 피어 리뷰에서 받았던 답변인 싱글톤 디자인 패턴에 대해서도 학습할 수 있었습니다.
기존에는 객체를 만들기위해 별 생각없이 class를 사용했다면, 이제는 상황에 따라 적합한 객체 선언 방법과 클래스를 통한 객체 생성을 나누어 사용할 수 있게 된 것 같습니다.

그리고 객체의 불변성 유지에 대한 내용도 추가로 학습했는데, 기존에는 단순히 Object.freeze를 통해 불변성을 유지했으나 이번 미션에서는 객체의 구조가 기존 미션보다 복잡해져서 객체 내부에 객체가 존재하였는데, Object.freeze의 경우에는 객체 내부의 객체를 동결시키지 못해 불변셩을 유지할 수 없다는 문제가 있었습니다.
이에 따라 deepFreeze라는 개념에 대해서 학습하였고, deepFreeze를 적용시켜 복잡한 객체에서도 불변성을 유지시킬 수 있었습니다.

코드를 완성해서 소감을 작성하고 있는 지금도 로직에 대한 아쉬움이 많이 남는 것 같습니다. 유지보수성에 중점을 두고 작성했지만 이벤트 목록이 늘어난다면 기존의 로직을 상당량 수정해야하는 부분, 메서드가 한가지의 기능만 하도록 한 부분들.. 등 아직 학습할 내용이 많이 남았음을 느낍니다.

4주라는 시간이 길다면 길고 짧다면 짧은 기간이라고 할 수 있겠으나, 제게 4주라는 시간은 짧았을 지 몰라도 학습한 내용들은 결코 적지 않았음을 느낄 수 있었습니다.
결과를 떠나서 뜻깊은 한달이었던 것 같습니다. 감사합니다
