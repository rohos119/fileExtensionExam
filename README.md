# FileExtensionExam

server : Ubuntu 20.04

front-end : React.js "18.2.0"

back-end : Node.js(express.js) "^4.18.1"

database : mysql

* 마드라스체크에서 채용공고에 올린 스택을 기반으로 유추하여 설정하였음 

## 구현요구사항

1. 고정확장자 설정하여, default는 Uncheck
2. 고정확장자가 check or uncheck 할 경우 DB에 저장된다 *새로고침시 유지
  ** defualt -> check시 제외 처리 하는것으로 설정
3. 확장자 최대 입력길이 20자리
4. Tag 추가 버튼 클릭시 DB에 저장되며, 아래쪽 영역애 표시
5. 커스텀 확장자는 최대 200개 까지 추가가능
6. 확장자 옆 X클릭시 Delete

## 구현방법

1) 고정확장자 설정
  - 고정확장자에 대한 DB를 생성, 확장자는 중복이 안되는 것이 기본임을 가정하여 PrimaryKey로 지정
   * DB이름 = defaultFileExtension / column = { name varchar(20) , apply boolean }
   * 추가커스텀 확장자도 동일한 DB에 저장, 이유로는 이미 Primarykey로 선정하였기에 중복체크등을 할 소요가 없음.

2) 고정확장자 default는 Uncheck
  - column에 apply의 default를 0으로 설정하여 check가 안되도록 하였음
  ** 그러나, input button의 attr를 checked 값을 부여하였을 경우 클릭이 되지 않는 현상이 발생 -> 추가 수정소요

3) 고정확장자에 대한 click 이벤트를 axios post로 넘겨 db에 직접 수정되도록 하였음

4) 새로고침시 유지하기 위해서 localStorage에 저장하여 front단에서 송출할때에 활용하게 하였으나 2)의 추가 수정소요와 동일
  ** localStorage는 동적으로 저장되나, 화면에 송출하는것 수정 필요

5) 확장자 최대 입력길이 20자리
  - input태그의 maxlength attr를 부여햐여 기본적으로 예방, 추가적으로 DB에 저장될때 varchar(20)으로도 제한하였음
    * 추가적인 고려사항으로 확장자는 영어 대소문자가 default임으로 한글 입력시 입력이 되지 않도록 설정하였음

6) Tag 추가 버튼 클릭시 DB에 저장되며, 아래쪽 영역에 표시
  - 추가 버튼 클릭시 onSubmit으로 하기위해 event.preventDefault를 설정하여 새로고침을 예방 
  
8) 버튼형 tag를 생성하여 클릭시 axios post로 넘겨 DB에 직접 수정 가능하게 구현

--------------------------------------------------------구현 예정 --------------------------------------------------

7) 커스텀 확장자는 최대 200개 까지 추가가능
  - 커스텀확장자 추가시 count를 하여 200개 초과시 alert 표현

## 개선 필요 사항


1) getCustom이 지속적으로 호출, useEffect 설정 해보았으나 동일 현상 지속, 계속 요청을 할경우 서버 트래픽 증가로 성능저하, interval을 주는 방법 또는 다른 것을 고민해볼 필요가 있음

2) DefaultExtension에 ExtensionCheck 함수를 props로 넘기면서 여러번 alert뜨는 현상 발생, 수정필요
