# Subproject1.1

## Installation

-   JDK

-   Intelli J
-   MySQL

## Spring Boot

### Dependencies

-   Spring Boot Dev Tools
-   Lombok
-   Spring Web
-   Spring Reactive Web
-   Thymeleaf
-   Spring Security
-   Spring Data JPA
-   MySQL Driver

## ``DEBUG=true``

``src/main/resourc/application.properties`` 에서 ``DEBUG=true`` 해주면 ``run`` 실행시 에러가 났을 때 알려준다.

## MySQL

-   ``mysql`` 계정 생성 후 권한 설정

-   Spring Boot 와 DB 연동

    -   ``Data Sources and Drivers`` 에서 ``MySQL `` 탭에 들어가 설정 해준다.

-   JDBC URL 옵션 추가

    -   **JDBC** 는 **Java Database Connectivity** 의 약자로 자바에서 데이터베이스에 접속할 수 있도록 도와주는 **자바 API** 입니다.

    -   **DBCP** 는 **Database Connection Pool** 의 약자로 DB와 커넥션을 맺고 있는 객체를 관리합니다.

        -   WAS 실행 시, 미리 개발자가 지정한 DB Connection 객체를 생성하여 Pool이라는 공간에 저장
        -   DB 연결 요청이 들어오면, 이 Pool에서 Connection 객체를 불러와 사용하고 반환
        -   즉, 미리 만들어 놓은 커넥션 객체를 요청이 들어올때마다 꺼내 쓰는 형식입니다.
        -   그런데 커넥션 객체를 미리 만들어 놓을때, "몇개를 만들어 놓을 것이냐", "얼마동안 안쓰이면 없앨 것이냐", "최소한 몇개를 유지할 것이냐" 등 여러 설정을 할 수 있습니다.
        -   단, 커넥션 객체는 동시에 일 할 수 있는 개수는 cpu 코어 개수에 비례합니다.

    -   스프링부트는 기본적으로 **HikariCP**를 사용

    -   ``application.properties`` 에 다음과 같이 설정 해준다.

        ```java
        #Database Configuration
        spring.datasource.driverClassName=com.mysql.jdbc.Driver
        spring.datasource.url=jdbc:mysql://localhost:3306/demo_db?serverTimezone=Asia/Seoul
        spring.datasource.username=jhee
        spring.datasource.password=<password>
        
        
        #JPA Configuration
        spring.jpa.database-platform=org.hibernate.dialect.MySQL5Dialect
        spring.jpa.show-sql=false
        spring.jpa.hibernate.ddl-auto=create
        ```

        -    ``spring.datasource.url`` 뒤에 time zone 설정은 안해주면 다음과 같은 에러가 나타난다.

            ```
            2020-01-15 11:19:34.944 ERROR 82111 --- [  restartedMain] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Exception during pool initialization.
            
            java.sql.SQLException: The server time zone value 'KST' is unrecognized or represents more than one time zone. You must configure either the server or JDBC driver (via the serverTimezone configuration property) to use a more specifc time zone value if you want to utilize time zone support.
            ```





-   -   

## getter setter

Lombok 을 사용하면 getter setter 를 만들어 준다.

-   ``Model`` 안 해당 ``.class`` 에서 원하는 모델을 작성 후 ``Code`` > ``Generate`` 누르고 팝업창 위 ``getter and setter`` 를 눌러주고, 생성하고 싶은 항목을 선택
-   



