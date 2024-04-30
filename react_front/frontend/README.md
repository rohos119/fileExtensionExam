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

### 구현방법

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



[현무사격지휘통제시스템] 
* 본 사업은 국가 보안사업으로 상세한 설명은 불가한점에 대해 양해 부탁드립니다.
Vxworks 기반 백보드 시스템 개발
주요 업무 성과 :
  VxWorks 6.9 -> 7.0 migration / MCU 모의 Framework 개발 / 신규 2개의 프로젝트 구현 / Misra C:2012 신뢰성 시험 수행 / 암호화 / 미사일 발사시험 진행
1) Vxworks 버전 업그레이드 
사업간 사용하던 SBC의 단종으로 인하여, 신규 SBC 제작간 CPU와 Vxworks 호환 문제로 인하여 6.9->7.0으로 migration 작업을 진행하였음
7.0으로 변경되며 VSB의 도입으로 인하여 전체 프로젝트 구조와 BSP 연동 및 이미지 생성 부분, 변경된 Library 적용을 진행하였고 이로인해 변경된 코드들에 대한 신뢰성시험을 재수행 하였음.
   
2) MCU 모의 Framework 개발
타 협력업체에서 MCU를 개발하는 환경으로 인하여 기존 개발간 ICD을 바탕으로 신규사업간 MCU모의기를 지속적으로 개발할 소요로 인해 업무 진행속도에 영향이
미치는 것을 파악하고 이를 해결하기위해 MCU개수를 가변적으로 선택하여 모의할 수 있게 모듈화 및 미사일 발사진행간 발생하는 공통 이벤트들을 인터페이스화 하여
코드 재사용성을 높였음.  Vxworks의 C언어로 선언된 ICD상의 Structure들을 재사용 하기위해 Cpython으로 자동 변경하는 converter를 제작하여 생산성을 향상시킬수 있었음

MCU 연동 SHDSL 통신, Serial 통신, UDP socket 프로그래밍 구현. MessageQue 기반 구현, Git flow 도입등 또한 진행하였음
