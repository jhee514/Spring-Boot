# Spring Boot

## Apache

 아파치는 The Apache Software Foundation에서 만든 대표적인 HTTP Server로 무료고 오픈소스이다.

#### server / client

 웹서비스가 있다고 했을 때 서버는 웹서비스를 제공하는 쪽, 클라이언트는 웹서비스를 이용하는 쪽이고 할 수 있다. 웹 클라이언트를 다른 말로는 웹브라우저라고 하고, 대표적으로는 IE, Firefox, Chrome가 있다. 웹서버는 웹서비스를 제공하는 쪽을 의미하고 대표적으로는 Apache, IIS, Nginx 등이 있다. HTTP Server 라고도 부른다.

 

## JPA

**Java Persistence API**

 자바 플랫폼을 사용하는 응용프로그램에서 관계형 데이터베이스를 관리를 표현하는 자바 API이다.

**JPA(Java Persistence API)**란?



JPA는 여러 ORM 전문가가 참여한 EJB 3.0 스펙 작업에서 기존 EJB ORM이던 Entity Bean을

JPA라고 바꾸고 Java SE, Java EE를 위한 영속성(Persistence) 관리와 ORM을 위한 표준 기술이다.



>   그렇다면 ORM은 무엇일까?

ORM(Object Relational Mapping)이란 RDB 테이블을 객체지향적으로 사용하기 위한 기술이다.

RDB테이블은 객체지향적 특징(상속, 다형성, 레퍼런스, 오브젝트 등)이 없고 자바와 같은 언어로 접근하기

쉽지 않다. 때문에 ORM을 사용해 오브젝트와 RDB사이에 존재하는 개념과 접근을 객체 지향적으로

다루기 위한 기술이다.



>   JPA를 쓰는 이유?

먼저 JPA를 제외하고 자바를 통해 DB에 접근할 수 있는 방법을 살펴보면 크게 3가지를 꼽을 수 있다.

-   JDBC API
-   IBatis(MyBatis)
-   스프링 JDBC Template : SQL Mapper

이러한 접근 방법에는 몇가지의 문제가 존재한다.



**1. CRUD의 SQL이 반복된다.**

CRUD기능을 사용할 모든 모델과 객체에 대해 반복하고 또 반복해야 한다.



**2. SQL에 의존적인 개발을 해야한다.**

예를 들어, 객체에 변수 하나를 추가하기라도 하면 그 객체와 매핑된 테이블, 그 테이블을 조인하고 있는 모든

테이블에 관한 SQL문을 수정해야 한다.



이런 문제점을 해결하기 위한 것이 객체 + 관계형 데이터베이스 모델 즉, **ORM 프레임워크**이다.

ORM Framework가 JPA만 있는 것이 아니라 Java 진영에서 개발한 **ORM기술 표준이 JPA**이다.



우선 JPA는 DAO를 생각하지 않아도 된다. Entity 클래스를 생성하는 것이 바로 DB테이블을 만드는 것이기 때문이다.

한마디로 DB에다가 create쿼리를 직접 날리지 않아도 된다는 것이다.

Entity클래스의 @(어노테이션)을 붙이는 것만으로 DB와 자동으로 매핑을 해버린다.

DB가 없으면 create를 하고, 컬럼이 없으면 자동으로 alter한다.



### ORM

**Object Relational Mapping**

 객체와 관계형 데이터베이스(RDB)를 자동으로 매핑(연결) 해주는 것

-   객체 지향 프로그래밍은 클래스를 사용하고, 관계형 데이터베이스는 테이블을 사용한다. => 객체 모델과 관계형 모델간의 불일치가 존재한다. 이 때 ORM 을 활용하여 객체 간의 관계를 바탕으로 SQL 을 자동으로 생성하여 불일치를 해결한다.

-   ```python
    qs= Category.objects.all()
    c = Category.objects.filter(name__iexact='science')
    ```

#### RDBMS

**Relational Database Management System**

 관계형 모델을 기반으로 하는 데이터베이스 관리 시스템

-   관계형 데이터베이스는 데이터 항목 간에 사전 정의된 관계가 있을 때 그러한 데이터 항목들의 모음을 가리킨다.
-   관계형 데이터베이스란 테이블(table)로 이루어져 있으며, 이 테이블은 키(key)와 값(value)의 관계를 나타낸다. 이처럼 데이터의 종속성을 관계(relationship)로 표현하는 것이 관계형 데이터베이스의 특징입니다. 

#### SQL

**Structured Query Language**

 관계형 데이터베이스 관리 시스템의 데이터를 관리하기 위해 설계된 특수 목적의 프로그래밍 언어이다.

-   관계형 데이터베이스 관리 시스템에서 자료의 검색과 관리, 데이터베이스 스키마 생성과 수정, 데이터베이스 객체 접근 조정 관리를 위해 고안되었다. 많은 수의 데이터베이스 관련 프로그램들이 SQL을 표준으로 채택하고 있다.

-   ``CREATE`` ``ALTER`` ``DROP`` ...



## CORS

Cross-Origin Resource Sharing

-   요즘 사용되는 모던 브라우저는 자바스크립트 인터프리터가 도입 되었으며, 보안상의 문제를 막기 위해 JS 의 동일 출처 정책으로 Cross-Domain 이슈를 제한한다(Cross-Domain Policy)
-   Cross-Domain Policy
    -   스크립트가 사용자의 입력을 다른 페이지로 흘려보느내는 등의 보안에 위협이 되는 사항들을 방지 하기 위하여 스크립트는 다른 서버에서 불러온 문서 뿐 아니라 자신의 문서의 내용을 읽을 수 없고, 다른 서버에서 불러온 문서에는 이벤트 리스너를 등록할 수 없다.
-   Cross-Domain
    -   서로 다른 도메인에서 Javascript로 접근하려 하거나 다른 서버에 Ajax 통신의 결과를 받는 행위
-   보안상의 문제 없이 Ajax 등의 통신을 하기 위해 사용되는 메커니즘이 CORS
-   CORS 표준은 웹 브라우저가 사용하는 정보를 읽을 수 있도록 허가된 출처 집합을 서버에게 알려주도록 허용하는 Http header 를 추가함으로써 동작한다.



## localhost:8080

해당 주소로 접속 시 Spring Security에서 자동으로 제공하는 로그인 페이지가 나오게 되고 ``user`` 로 console 에 나오는 security password 를 비밀번호로 입력시 페이지에 접속 가능 => 처음엔 아무것도 만들어진 것이 없어서 404 에러



## JWT

 Jason Web Token

 JSON 객체로서 당사자 간에 안전하게 정보를 전송할 수 있는 작고 독립적인 방법을 정의하는 공개 표준 (RFC 7519)이다.



## MYSQL

-   ``mysql`` 설치 필요
    -   해당 사이트에서 다운로드 하거나 ``brew install`` 로 설치
    -   

```bash
$ mysql -u root -p
```

```mysql
show databases;
create database demo_db;
create user jhee@'%' identified by '<password>';
SELECT User, HOST FROM mysql.user;
grant all privileges on demo_db.* to 'jhee'@'%';
```



## Spring MVC

-   Model, View, Controller 의 약자로 사용자 인터페이스와 비지니스 로직을 분리하여 웹 개발을 하는 것을 가장 큰 장점이라고 생각하고 개발을 진행하는 방법

#### Model

데이터로 앱의 정보를 나타낸다.

#### View

화면으로 사용자에게 보여주는 인터페이스

#### Controller

비지니스 로직과 모델, 뷰 간의 상호동작의 조정자 역할

-   ``@Controller`` 라고 선언하면 컨트롤러가 설정된 것

-   ``@RestController`` 

-   ``controller`` 라는 디렉토리를 프로젝트 메인패키지(?) 안에 생성 후 새로운 클래스를 작성해준다.

    -   ``BoardController.java``

        ```java
        package com.jhee.demo.Controller;
        
        
        import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.RestController;
        
        @RestController
        public class BoardController {
            @GetMapping("/test")
            public String test() {
                return "Hello, World!";
            }
        }
        ```

        -   ``localhost:8080`` 뒤에 ``@GetMapping()`` 에 들어간 url 을 붙여 주면 해당 url 이 생성 및 연결 된다. 

### MV vs MVVM

http://frugalisminds.com/android/mac-mvvm-take-pick/



https://medium.com/@falkohussain/basic-rest-api-application-using-spring-boot-react-and-mysql-part-i-the-back-end-e79028f8a67b

### 1. DB 연결

1.  ``application.properties``

    ```java
    DEBUG=true
    
    
    /* logging.level.org.springframework.context=DEBUG */
    
    
    /* Database Configuration */
    spring.datasource.driverClassName=com.mysql.jdbc.Driver
    spring.datasource.url=jdbc:mysql://localhost:3306/demo_db?serverTimezone=Asia/Seoul
    spring.datasource.username=jhee
    spring.datasource.password=jhee11
    
    /* JPA Configuration */
    spring.jpa.database-platform=org.hibernate.dialect.MySQL5Dialect
    spring.jpa.show-sql=false
    /* automatically crate the database every time our spring boot application runs, w/o dropping it when we close our application */
    spring.jpa.hibernate.ddl-auto=create
    
    
    /* REST API */
    spring.data.rest.base-path=/apiDEBUG=true
    ```



### 2. model class 생성

### 3. repository interface 생성

-   Spring will automatically implement this interface into a Bean w/ the same name.
-   ``extends JpaRepository<T, ID>`` will provide w/ a set of CRUD functions.
    -   the generic type will be our Entity Object and pk which is type int.
    -   3 different CRUD functions from the JpaRepository:
        -   ``.findAll()``
        -   ``.save()``
        -   ``.deleteById()``
        -   etc

### 4. create Controller

1.  Controller is the C in MVC. This class handles the incoming HTTP requests from the user and returns a response(GET, PUT, POST, DELETE).

2.  Spring Boot Annotations

    ```java
    // handle any request types
    @RequestMapping
    
    @GetMapping
    @PutMapping
    @PostMapping
    @DeleteMapping
    @PatchMapping
    ```

    



## VO

**Value Object**



## DTO





## JDBC

**JDBC** 는 **Java Database Connectivity** 의 약자로 자바에서 데이터베이스에 접속할 수 있도록 도와주는 **자바 API** 입니다.

-   **DBCP** 는 **Databasa Connection Pool** 의 약자로 DB와 커넥션을 맺고 있는 객체를 관리합니다.
    -   WAS 실행 시, 미리 개발자가 지정한 DB Connection 객체를 생성하여 Pool이라는 공간에 저장
    -   DB 연결 요청이 들어오면, 이 Pool에서 Connection 객체를 불러와 사용하고 반환
    -   즉, 미리 만들어 놓은 커넥션 객체를 요청이 들어올때마다 꺼내 쓰는 형식입니다.
    -   그런데 커넥션 객체를 미리 만들어 놓을때, "몇개를 만들어 놓을 것이냐", "얼마동안 안쓰이면 없앨 것이냐", "최소한 몇개를 유지할 것이냐" 등 여러 설정을 할 수 있습니다.
    -   단, 커넥션 객체는 동시에 일 할 수 있는 개수는 cpu 코어 개수에 비례합니다.
-   스프링부트는 기본적으로 **HikariCP**를 사용



## Thymeleaf

-   회원가입 할 때 자격 증명 실패로 403 떴을 때 해결방법

```html
<!-- csrf token 을 자동으로 Thymeleaf 가 추가해준다. -->
<form method="post" th:action="@{/joinRequest}">
```

