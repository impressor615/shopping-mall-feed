# ShoppingMall Feed

* **description**: 상품 및 랭킹 피드를 만듭니다.

* **prerequisite**
	- [node & npm](https://github.com/creationix/nvm)

* **postgresql install & setting**
```
// postres를 설치합니다.
brew install postgres

// postgres를 시작합니다.
brew services start postgres

// postgres 데이터베이스로 접속합니다.
psql postgres

// psql command-line에서 다음 커맨드들을 실행합니다.
// "test-user"라는 유저를 'password'를 패스워드로 가지도록 생성합니다.
CREATE ROLE "test-user" WITH LOGIN PASSWORD 'password';

// "test-user"가 데이터베이스를 만들 수 있도록 설정합니다.
ALTER ROLE "test-user" CREATEDB;

// "shoping-mall"이라는 데이터베이스를 만듭니다.
CREATE DATABASE "shopping-mall";
```

* **dependencies install**

```
// repository를 local로 복사합니다.
git clone git@github.com:impressor615/shopping-mall-feed.git [your_project_name]

// 프로젝트 폴더로 이동하여 dependencies들을 설치합니다.
cd [your_project_name]
npm install
```

* **start application**

```
// server와 web 어플리케이션을 시작합니다.
npm start
```
