# ⌨️ 코딩 타자 연습 서비스
<a><img src="https://github.com/user-attachments/assets/37f23063-107c-466f-aa90-7952b612957d" width="1444" alt="main" /></a>

<br>

## ❓ 프로젝트 소개

- 타자가 느려 코드를 따라치다 수업 내용을 못 따라간 경험에 기획하게 되었습니다.
- 언어를 선택해 간단한 코드를 치면서 타자 속도 향상과 해당 언어를 간접적으로 경험할 수 있습니다.

<br>

## 💻 개발 환경

- 기술 스택 : TypeScript, React, Next.js
- 버전 관리 : GitHub
- 배포 : AWS

<br>

## 📅 프로젝트 일정

- 전체 프로젝트 일정 : 2024-09-02 ~ 2024-09-13
- UI 설계 : 2024-09-02 ~ 2024-09-03
- 기능 구현 : 2024-09-04 ~ 2024-09-12
- 발표 및 시연 : 2024-09-13

<br>

## 💻 구현 사항

### 메인페이지
<a><img src="https://github.com/user-attachments/assets/294a153d-1de1-4db9-883d-f05b3761488e" alt="main_gif"/></a>

<br>

- css 애니메이션을 사용해 글자 한개씩 출력
- useEffect를 사용해 문장을 순서대로 출력
- 모든 문장이 끝나면 페이지를 이동하는 버튼이 나타납니다.

<br>

### 타자 연습
<a><img src="https://github.com/user-attachments/assets/7278309c-ecc3-4c20-9c6d-669371707a3b" alt="typing"/></a>

<br>

- 한 문장의 통계를 보여줍니다.
- 정확도는 원본 문장과 입력한 문자를 비교해 백분율로 표현했습니다.
- 타수는 입력한 문자 중 정확한 문자 수를 기준으로 1분동안의 예상타수를 계산했습니다.
- 붙여넣기를 방지하는 이벤트를 추가했습니다.

<br>

### 통계
<a><img src="https://github.com/user-attachments/assets/08083022-247d-4f30-9a13-e78acad77aab" width="900" alt="total"></a>

<br>

- 모든 문장을 완료하면 총 시간, 정확도, 타수를 확인할 수 있습니다.

