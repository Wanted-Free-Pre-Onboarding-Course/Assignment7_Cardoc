<div align="center">

  # 원티드 백엔드 프리온보딩 7차 과제 - 카닥
  
  <img height="500" width="500" src="https://user-images.githubusercontent.com/59385491/143792825-2c6c2f0b-684b-4498-ab91-f2492da067a3.png">

  <h2> 👨‍💻 원티드 프리온보딩 어나더글라스 팀 팀장 박상수입니다. </h2>

<p>누구에겐 쉬운 공부일지라도, 나에겐 크고 작은 어려움에 맞서 해답을 찾으려고 노력했던 시간들의 흔적.</p>
<p>무던히 포기하지 않고 견디고 견뎠던 그 시간들이 변함없는 단 하나의 해답임을 믿습니다.</p>

</div>


<div align=center>

### [프로젝트 회고](https://overcome-the-limits.tistory.com/entry/%ED%9A%8C%EA%B3%A0-%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%EB%B0%B1%EC%97%94%EB%93%9C-%EC%BD%94%EC%8A%A4-7%EC%B0%A8-%EA%B3%BC%EC%A0%9C?category=980007)

</br>

<img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" />
<img alt="Hits" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FAnother-Glass%2FAssignment1_Team1%2Fblob%2Fdevelop%2FREADME.md&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false" />
<img alt="issues" src="https://img.shields.io/github/issues/Another-Glass/Assignment1_Team1" />
<img alt="sprint" src="https://img.shields.io/badge/wanted-sprint7-brown" />


</div>

</br>
</br>
</br>
</br>
</br>
</br>

## 🎤 소개

이 레포지토리는 [원티드 프리온보딩 백엔드 코스](https://www.wanted.co.kr/events/pre_onboarding_course_4) 7차 과제를 위해 만들어졌습니다. 

-   일정 : 2021년 11월 22일(월) 오후 6시 ~ 11월 29일(월) 오후 2시

<br>

## 📕 과제 내용

### [필수 포함 사항]

- README 작성
    - 프로젝트 빌드, 자세한 실행 방법 명시
    - 구현 방법과 이유에 대한 간략한 설명
    - 서버 구조 및 디자인 패턴에 대한 개략적인 설명
    - 완료된 시스템이 배포된 서버의 주소
    - 해당 과제를 진행하면서 회고 내용 블로그 포스팅
- Swagger나 Postman을 이용하여 API 테스트 가능하도록 구현

</br>


### [개발 요구사항]

**✔️ API 목록**
- 사용자 생성 API
- 사용자 로그인 API
- 사용자가 소유한 타이어 정보를 저장하는 API
- 사용자가 소유한 타이어 정보 조회 API

<details><summary>[고려 사항 및 상세설명]</summary>

</br>

# 과제 안내


## 1. 배경 및 공통 요구 사항

<aside>

😁 카닥에서 실제로 사용하는 프레임워크를 토대로 타이어 API를 설계 및 구현합니다.

</aside>

- 데이터베이스 환경은 별도로 제공하지 않습니다.
 **RDB중 원하는 방식을 선택**하면 되며, sqlite3 같은 별도의 설치없이 이용 가능한 in-memory DB도 좋으며, 가능하다면 Docker로 준비하셔도 됩니다.
- 단, 결과 제출 시 README.md 파일에 실행 방법을 완벽히 서술하여 DB를 포함하여 전체적인 서버를 구동하는데 문제없도록 해야합니다.
- 데이터베이스 관련처리는 raw query가 아닌 **ORM을 이용하여 구현**합니다.
- Response Codes API를 성공적으로 호출할 경우 200번 코드를 반환하고, 그 외의 경우에는 아래의 코드로 반환합니다.

</br>

## 2. 사용자 생성 API

🎁 **요구사항**

- ID/Password로 사용자를 생성하는 API.
- 인증 토큰을 발급하고 이후의 API는 인증된 사용자만 호출할 수 있다.

```jsx
/* Request Body 예제 */

 { "id": "candycandy", "password": "ASdfdsf3232@" }
```

</br>


## 3. 사용자가 소유한 타이어 정보를 저장하는 API

🎁 **요구사항**

- 자동차 차종 ID(trimID)를 이용하여 사용자가 소유한 자동차 정보를 저장한다.
- 한 번에 최대 5명까지의 사용자에 대한 요청을 받을 수 있도록 해야한다. 즉 사용자 정보와 trimId 5쌍을 요청데이터로 하여금 API를 호출할 수 있다는 의미이다.

```jsx
/* Request Body 예제 */
[
  {
    "id": "candycandy",
    "trimId": 5000
  },
  {
    "id": "mylovewolkswagen",
    "trimId": 9000
  },
  {
    "id": "bmwwow",
    "trimId": 11000
  },
  {
    "id": "dreamcar",
    "trimId": 15000
  }
]
```

</br>

🔍 **상세구현 가이드**

- 자동차 정보 조회 API의 사용은 아래와 같이 5000, 9000부분에 trimId를 넘겨서 조회할 수 있다.
- 자동차 정보 조회 API 사용 예제 → 
  - [https://dev.mycar.cardoc.co.kr/v1/trim/5000](https://dev.mycar.cardoc.co.kr/v1/trim/5000)
  - [https://dev.mycar.cardoc.co.kr/v1/trim/9000](https://dev.mycar.cardoc.co.kr/v1/trim/9000) 
  - [https://dev.mycar.cardoc.co.kr/v1/trim/11000](https://dev.mycar.cardoc.co.kr/v1/trim/11000) 
  - [https://dev.mycar.cardoc.co.kr/v1/trim/15000](https://dev.mycar.cardoc.co.kr/v1/trim/15000)
  
</p>

- 조회된 정보에서 타이어 정보는 spec → driving → frontTire/rearTire 에서 찾을 수 있다.
- 타이어 정보는 205/75R18의 포맷이 정상이다. 205는 타이어 폭을 의미하고 75R은 편평비, 그리고 마지막 18은 휠사이즈로써 {폭}/{편평비}R{18}과 같은 구조이다.
 위와 같은 형식의 데이터일 경우만 DB에 항목별로 나누어 서로다른 Column에 저장하도록 한다.

</br>


## 4. 사용자가 소유한 타이어 정보 조회 API

🎁 **요구사항**

- 사용자 ID를 통해서 2번 API에서 저장한 타이어 정보를 조회할 수 있어야 한다.

</div>
</details>

</br>
</br>


## 📕 과제 내용

### [회원가입]
- 이메일과 비밀번호, 이름을 입력받아 회원가입합니다.
- 입력값 하나라도 제대로 입력되지 않으면 400 에러를 출력합니다.
- 같은 이메일로 가입된 경우 409 에러를 출력합니다. 
- 단방향 암호화 기술을 사용할 수 있는 bcrypt를 활용해서, 비밀번호를 암호화한 후 DB에 저장합니다. 

</br>

### [로그인]
- 이메일, 비밀번호를 입력 받아서 로그인을 진행합니다. 
- 입력값 하나라도 제대로 입력되지 않으면 400 에러를 출력합니다.
- 비밀번호가 일치하지 않으면 401 에러를 출력합니다. 
- 아이디, 비밀번호가 일치하는 경우 accessToken을 쿠키에 발급합니다.

</br>

### [타이어 정보 저장]
- 이메일과 trimId를 입력 받아서 카닥 API에 파라미터 값으로 입력 받은 trimId를 넣고 호출합니다.
- 카닥 API에서 받은 타이어 정보를 타이어 포맷 정규식을 활용해서 나눕니다.
- 나뉘어진 타이어 정보를 데이터베이스에 저장합니다. 
- 타이어 규격의 형식이 맞지 않는 경우 400 에러를 출력합니다. 
- 타이어 규격 정보가 존재하지 않는 경우도 400 에러를 출력합니다. 
- 입력값 객체가 5개를 초과하는 경우 400 에러를 출력합니다.
- 입력값을 넣지 않는 경우 400 에러를 출력합니다. 

</br>

### [타이어 정보 조회]
- 사용자의 아이디를 파라미터로 입력받습니다.
- 사용자의 차량 타이어 정보가 조회됩니다. 

</br>

### [서버 구조 및 디자인 패턴] 
- main.ts, splitTrim.libs.ts 파일의 경우 싱글톤 패턴을 적용시켰습니다. 인스턴스가 1개만 생성되는 특징을 가진 싱글턴 패턴을 활용해서 유지보수의 편리함을 올렸습니다. 
- controller, service, repository, entity 계층을 구분해서 각 계층별로 객체간의 역할과 책임을 분리시켰습니다. 
- 파이프를 활용해서 string 타입으로 들어오는 파리미터를 interger 타입으로 변경했습니다.
- 필터를 활용해서 에러가 나는 경우 특정 형식에 맞게 출력되도록 설정했습니다. 
- 인터셉터를 활용해서 요청에 성공 응답을 보내는 경우 특정 형식에 맞게 출력되도록 설정했습니다. 


</br>
</br>


## 📕 모델링

</br>


 <img height="700" width="900" src="https://user-images.githubusercontent.com/59385491/143793441-6806b117-4b54-4e56-abbd-5e4b21bd525e.png">


<br>
<br>

## 🛠 실행 방법

- 레포지토리를 clone 받거나, 압축을 해제한 후 npm install을 통해 환경 셋팅을 진행합니다.
- npm run start:dev를 통해 서버를 구동합니다.
- 최상위 경로에 .env 파일을 설정해서, 환경변수를 설정합니다.
- [.env설정 노션 링크](https://www.notion.so/epitone/dbfeafb35aa348fd87de6726226c5746)
  - <details><summary><b>링크 접속불가 시 .env 파일 설정 방법</b></summary>

    ```
    NODE_ENV=
    PORT=
    ADMIN_USER=
    ADMIN_PASSWORD=
    SECRET_KEY=
    DB_HOST=
    DB_PORT=
    DB_NAME=
    DB_USERNAME=
    DB_PASSWORD=
    JWT_SECRET_KEY=
    ```


</details>


</br>
</br>


## 🗂 과제 확인 및 평가 API 명세서

- Swagger를 활용하여 API 작동 테스트를 진행했습니다. 
- __배포된 서버 주소__ 및 자세한 API 명세는 아래에서 확인 가능합니다.
- [🗂 API Description Link](http://3.36.217.156:3000/docs/)      
   1. 요청마다 여러 이상적이지 않은 상황의 테스트에 대한 예시가 있습니다.</br>
   2. Swagger에 접근하려면 환경변수의 ADMIN_USER, ADMIN_PASSWORD를 입력해야 합니다.
 
</br>
</br>


## 😎 컨벤션 설정

- [👏🏻 협업을 위한 코드 컨벤션 설정하기](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

- [👏🏻 Prettier, ESLint, Airbnb Style Guide로 코드 컨벤션  설정하기](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-ESLint-Prettier-Airbnb-Style-Guide%EB%A1%9C-%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0?category=911197)

- [👏🏻 협업을 위한 git 커밋 컨벤션 설정하기](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-git-%EC%BB%A4%EB%B0%8B%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0?category=911197)

- [👏🏻 협업을 위한 Git Flow 설정하기](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-Git-Flow-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0?category=911197)

- [👏🏻 협업을 위한 Git 명령어 가이드](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-Git-%EB%AA%85%EB%A0%B9%EC%96%B4-%EA%B0%80%EC%9D%B4%EB%93%9C?category=911197) 

</br>
</br>



## 🌲 File Tree

</br>


```
📦src
 ┣ 📂common
 ┃ ┣ 📂exceptions
 ┃ ┃ ┗ 📜http-exception.filter.ts
 ┃ ┣ 📂interceptors
 ┃ ┃ ┗ 📜success.interceptor.ts
 ┃ ┣ 📂jobs
 ┃ ┃ ┗ 📜mycar.jobs.ts
 ┃ ┣ 📂libs
 ┃ ┃ ┣ 📜checkArray.libs.ts
 ┃ ┃ ┗ 📜splitTrim.libs.ts
 ┃ ┗ 📂middlewares
 ┃ ┃ ┣ 📜logger.middleware.spec.ts
 ┃ ┃ ┗ 📜logger.middleware.ts
 ┣ 📂configs
 ┃ ┗ 📜typeorm.config.ts
 ┣ 📂tires
 ┃ ┣ 📂dto
 ┃ ┃ ┣ 📂swagger
 ┃ ┃ ┃ ┗ 📂success
 ┃ ┃ ┃ ┃ ┗ 📜getTire.success.dto.ts
 ┃ ┃ ┣ 📜getTire.dto.ts
 ┃ ┃ ┗ 📜tireInfo.dto.ts
 ┃ ┣ 📜tires.controller.spec.ts
 ┃ ┣ 📜tires.controller.ts
 ┃ ┣ 📜tires.entity.ts
 ┃ ┣ 📜tires.module.ts
 ┃ ┣ 📜tires.repository.ts
 ┃ ┣ 📜tires.service.spec.ts
 ┃ ┗ 📜tires.service.ts
 ┣ 📂trims
 ┃ ┣ 📂constants
 ┃ ┃ ┗ 📜trim.constants.ts
 ┃ ┣ 📂dto
 ┃ ┃ ┣ 📂swagger
 ┃ ┃ ┃ ┣ 📂fail
 ┃ ┃ ┃ ┃ ┗ 📜createTrim.fail.dto.ts
 ┃ ┃ ┃ ┗ 📂success
 ┃ ┃ ┃ ┃ ┗ 📜createTrim.success.dto.ts
 ┃ ┃ ┣ 📜createTrim.request.dto.ts
 ┃ ┃ ┗ 📜trimInfo.dto.ts
 ┃ ┣ 📜trims.controller.spec.ts
 ┃ ┣ 📜trims.controller.ts
 ┃ ┣ 📜trims.entity.ts
 ┃ ┣ 📜trims.module.ts
 ┃ ┣ 📜trims.repository.ts
 ┃ ┣ 📜trims.service.spec.ts
 ┃ ┗ 📜trims.service.ts
 ┣ 📂users
 ┃ ┣ 📂dto
 ┃ ┃ ┣ 📂swagger
 ┃ ┃ ┃ ┣ 📂fail
 ┃ ┃ ┃ ┃ ┣ 📜signin.fail.dto.ts
 ┃ ┃ ┃ ┃ ┗ 📜signup.fail.dto.ts
 ┃ ┃ ┃ ┗ 📂success
 ┃ ┃ ┃ ┃ ┣ 📜signin.success.dto.ts
 ┃ ┃ ┃ ┃ ┗ 📜signup.success.dto.ts
 ┃ ┃ ┣ 📜signin.request.dto.ts
 ┃ ┃ ┗ 📜signup.request.dto.ts
 ┃ ┣ 📂jwt
 ┃ ┃ ┣ 📜jwt.payload.ts
 ┃ ┃ ┗ 📜jwt.strategy.ts
 ┃ ┣ 📜users.controller.spec.ts
 ┃ ┣ 📜users.controller.ts
 ┃ ┣ 📜users.entity.ts
 ┃ ┣ 📜users.module.ts
 ┃ ┣ 📜users.repository.ts
 ┃ ┣ 📜users.service.spec.ts
 ┃ ┗ 📜users.service.ts
 ┣ 📜app.module.ts
 ┗ 📜main.ts
 ┣ 📂test
 ┃ ┣ 📜app.e2e-spec.ts
 ┃ ┗ 📜jest-e2e.json
 ┣ 📜.env
 ┣ 📜.eslintrc.js
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜README.md
 ┣ 📜compose.yml
 ┣ 📜nest-cli.json
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜tsconfig.build.json
 ┗ 📜tsconfig.json

```
