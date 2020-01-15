# Spring Boot

## Apache

 아파치는 The Apache Software Foundation에서 만든 대표적인 HTTP Server로 무료고 오픈소스이다.

#### server / client

 웹서비스가 있다고 했을 때 서버는 웹서비스를 제공하는 쪽, 클라이언트는 웹서비스를 이용하는 쪽이고 할 수 있다. 웹 클라이언트를 다른 말로는 웹브라우저라고 하고, 대표적으로는 IE, Firefox, Chrome가 있다. 웹서버는 웹서비스를 제공하는 쪽을 의미하고 대표적으로는 Apache, IIS, Nginx 등이 있다. HTTP Server 라고도 부른다.

 

## JPA

**Java Persistence API**

 자바 플랫폼을 사용하는 응용프로그램에서 관계형 데이터베이스를 관리를 표현하는 자바 API이다.

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





### VO

### DTO

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



