# JAVA

## Java build automation tools

-   Build = Compile + Test + Inspect + Deploy
-   컴파일
    -   소스의 문법을 분석해 기계어(컴퓨터가 실행하기 위한 파일)로 번역

-   빌드(build)
    -   번역된 것과 그외 잡다한 것(이미지, 라이브버리) 등을 모아서 실행 가능한 파일로 산출

-   Eclipse Java Build Path 에서는 빌드에 필요한 다양한 자원들을 "어디서" 가져올 것인지 (PATH) 지정할 수 있다. 빌드에 필요한 자원들은 Source, Project, Library 로 구분하고 있다. 

### Gradle

 Gradle is a build automation system that is fully open source and uses the concepts you see on Apache Maven and Apache Ant. It uses domain-specific language based on the programming language Groovy, differentiating it from Apache Maven, which uses XML for its project configuration. It also determines the order of tasks run by using a directed acyclic graph.

Several developers created Gradle and first released in 2007, and in 2013, it was [adopted by Google](https://devops.com/puzzle-gradle-maven/) as the build system for Android projects. It was designed to support multi-project builds that are expected to be quite huge. It also allows for incrementally adding to your build, because it knows which parts of your project are updated. Tasks that are dependent on updated parts are no longer re-executed. For now, the latest stable release is version 3.4, which was launched in February 2017. It supports development and subsequent deployment using Java, Scala, and Groovy, with other project workflows and languages being introduced in the future.

## Maven

 [Maven](https://maven.apache.org/what-is-maven.html) is used for project build automation using Java. It helps you map out how a particular software is built, as well as its different dependencies. It uses an XML file to describe the project that you are building, the dependencies of the software with regards to third-party modules and parts, the build order, as well as the needed plugins. There are pre-defined targets for tasks such as packaging and compiling.

### Maven 

 Maven will download libraries and plugins from the different repositories and then puts them all in a cache on your local machine. While predominantly used for Java projects, you can use it for Scala, Ruby, and C#, as well as a host of other languages.

### Gradle vs Maven

Maven provides a very rigid model that makes customization tedious and sometimes impossible. While this can make it easier to understand any given Maven build, as long as you don’t have any special requirements, it also makes it unsuitable for many automation problems. Gradle, on the other hand, is built with an empowered and responsible user in mind. 

## 변수

-   변수를 먼저 선언 후, 값을 할당한다.

    -   ```java
        int a;
        String b;
        a = 1;
        b = "Hello, Java";
        ```



## 자료형

```java
// 정수형은 int 가 디폴트 => long 값 뒤에 'L'을 붙여
int age = 10;
long countOf Star = 4378740358459L;

// 실수형은 double 이 디폴트 => float 값 뒤에 'F' 붙여야
double morePi = 3.14159265358979323846;
float pi = 3.14F;

// 8진수는 '0'으로 시작, 16진수는 '0x'로 시작
int octal = 023;
int hex = 0xC;

// boolean
boolean isTrue = true;
boolean isFalse = false;

// char 는 ''으로 감싸준다
char a1 = 'a';

// String
String a = "Happy Java";
```



### primitive 자료형

-   ``int`` , ``long`` , ``double``, ``float``, ``boolean``, ``char````
-   ``new`` 키워드를 사용할 수 없다.
-   Literal 로 값을 세팅할 수 있다.
    -   Literal : 계산식 없이 소스코드에 표기하는 상수 값을 의미
        -   ``String `` 은 primitive 자료형은 아니지만 literal 로 표기 가능! 특별 예외!



### String

-   ``equals``

    ```java
    String a = "hello";
    String b = "java";
    String c = "hello";
    System.out.println(a.equals(b)); // false
    System.out.println(a.equals(c)); // true
    ```

    ```java
    String a = "hello";
    String b = new String("hello");
    System.out.println(a.equals(b));
    System.out.println(a==b);
    ```

    

-   ``indexOf``

    ```java
    String a = "Hello Java";
    System.out.println(a.indexOf("Java")); // 6
    ```

    -   java 에서도 숫자는 0부터 센다.

-   ``replaceAll``

    ```java
    String a = "Hello Java";
    System.out.println(a.replaceAll("Java", "World")); // Hello World
    ```

-   ``substring``

    -   문자열 중 특정 부분만 추출
    -   ``()`` 안에는 시작 위치와 끝위치가 들어가며, range 표기범이 python 과 같다.

    ```java
    String a = "Hello Java";
    System.out.println(a.substring(0, 4)); // Hell
    ```

### StringBuffer

-   ``append``

    ```java
    public class Test {
        public static void main(String[] args) {
            StringBuffer sb = new StringBuffer();
            sb.append("hello");
            sb.append(" ");
            sb.append("jump to java");
            System.out.println(sb.toString());
        }
    } // hello jump to java
    ```

    ```java
    public class Test {
      public static void main(String[] args) {
        String temp = "";
        temp += "hello";
        temp += " ";
        temp += "jump to java";
        System.out.println(temp);
      }
    } // hello jump to java
    ```

    

-   ``insert``

    ```java
    public class Test {
        public static void main(String[] args) {
            StringBuffer sb = new StringBuffer();
            sb.append("jump to java");
            sb.insert(0, "hello ");
            System.out.println(sb.toString());
        }
    } // hello jump to java
    ```

    

-   ``substring``

    ```java
    public class Test {
        public static void main(String[] args) {
            StringBuffer sb = new StringBuffer();
            sb.append("Hello jump to java");
            System.out.println(sb.substring(0, 4));
        }
    } // Hell
    ```

    

### Array

-   배열이란 자료형의 종류가 아닌 **자료형의 잡합**을 의미

-   자료형 타입 바로 옆에 ``[]`` 기호를 사용하여 표현

    ```java
    int[] odds = {1, 3, 5, 7, 9};
    
    String[] weeks = {"월", "화", "수", "목", "금", "토", "일"};
    String[] weeks = new String[7];
    weeks[0] = "월";
    weeks[1] = "화";
    weeks[2] = "수";
    weeks[3] = "목";
    weeks[4] = "금";
    weeks[5] = "토";
    weeks[6] = "일";
    ```

-   ``.length``

    ```java
    String[] weeks = {"월", "화", "수", "목", "금", "토", "일"};
    for (int i=0; i<weeks.length; i++) {
        System.out.println(weeks[i]);
    }
    ```

### List

-   Array 배열과 비슷한 자료형이지만 베열보다 편리하다.

-   크기가 정해진 배열과 다르게 동적으로 자료형의 갯수가 가변적

-   ``ArrayList`` , ``LinkedList`` 등의 List 인터페이스를 구현한 자료형이 있다.

-   ``ArrayList``

    -   ``add``
    -   ``get``
    -   ``size``
    -   ``contains``
    -   ``remove``
        -   ``remove(객체)`` => 삭제한 결과(``true`` / ``false``)를 리턴
        -   ``remove(인덱스)`` => 삭제한 항목을 리턴

    ```java
    // <> 안에 객체 정보를 넣어 명확하게 표현하도록 권고
    ArrayList<String> pitches = new ArrayList<String>();
    pitches.add(1, "133");
    System.out.println(pitches.get(1));
    System.out.println(pitches.size());
    System.out.println(pitches.contains("142"));
    System.out.println(pitches.remove("129"));
    System.out.println(pitches.remove(0));
    ```

### Map

-   python 의 dictionary 와 비슷한 개념
-   ``put``
-   ``get``
    -   key를 통해 value 값을 리턴
-   ``containsKey``
    -   key 의 존재 여부를 ``true`` / ``false`` 로 리턴
-   ``remove``
    -   key 값으로 해당 key와 value 를 함께 삭제 후 **value 를 리턴**
-   ``size``
-   순서 없이 key, value 를 이용
-   Map 역시 List와 마찬가지로 인터페이스이다. Map 인터페이스를 구현한 Map자료형에는 HashMap, LinkedHashMap, TreeMap등이 있다. 

```java
import java.util.HashMap;

public class TestMap {
    public static void main(String[] args) {
        HashMap<String, String> map = new HashMap<String, String>();
        map.put("people", "사람");
        map.put("baseball", "야구");

        System.out.println(map.get("people"));
        System.out.println(map.containsKey("people"));
        System.out.println(map.remove("people"));
        System.out.println(map.size());
    }
}
```

## 제어문

### 연산자

-   `x || y` - x와 y 둘 중 적어도 하나가 참이면 참이다

-   `x && y` - x와 y 모두 참이어야 참이다

-   `!x` - x가 거짓이면 참이다

    ```java
    // if
    if (조건) {
      (실행)
    }else {
      (대안)
    }
    
    // else if
    if (조건) {
      (실행)
    }else if(조건2) {
    	(실행2)
    }else {
      실행(3)
    }
    ```

-   ``switch`` / ``case``

    ```java
    public class SwitchDemo {
        public static void main(String[] args) {
            int month = 8;
            String monthString = "";
            switch (month) {
                case 1:  monthString = "January";
                         break;
                case 2:  monthString = "February";
                         break;
                case 3:  monthString = "March";
                         break;
                case 4:  monthString = "April";
                         break;
                case 5:  monthString = "May";
                         break;
                case 6:  monthString = "June";
                         break;
                case 7:  monthString = "July";
                         break;
                case 8:  monthString = "August";
                         break;
                case 9:  monthString = "September";
                         break;
                case 10: monthString = "October";
                         break;
                case 11: monthString = "November";
                         break;
                case 12: monthString = "December";
                         break;
                default: monthString = "Invalid month";
                         break;
            }
            System.out.println(monthString);
        }
    }
    ```

-   ``while``

    ```java
    int treeHit = 0;
    while (treeHit < 10) {
        treeHit++;
        System.out.println("나무를  " + treeHit + "번 찍었습니다.");
        if (treeHit == 10) {
            System.out.println("나무 넘어갑니다.");
        }
    }
    
    // 무한 loop
    while (true) {
        System.out.println("Ctrl-C를 눌러야 while문을 빠져 나갈 수 있습니다.");
    }
    
    // break
    int coffee = 10;
    int money = 300;
    
    while (money > 0) {
        System.out.println("돈을 받았으니 커피를 줍니다.");
        coffee--;
        System.out.println("남은 커피의 양은 " + coffee + "입니다.");
        if (coffee == 0) {
            System.out.println("커피가 다 떨어졌습니다. 판매를 중지합니다.");
            break;
        }
    }
    
    // continue
    int a = 0;
    while (a < 10) {
        a++;
        if (a % 2 == 0) {
            continue;
        }
        System.out.println(a);
    }
    ```

-   ``for``

    -   ``for (초기치; 조건문; 증가치)``

    ```java
    int[] marks = {90, 25, 67, 45, 80};
    for(int i=0; i<marks.length; i++) {
        if (marks[i] >= 60) {
            System.out.println((i+1)+"번 학생은 합격입니다.");
        }else {
            System.out.println((i+1)+"번 학생은 불합격입니다.");
        }
    }
    
    // continue
    int[] marks = {90, 25, 67, 45, 80};
    for(int i=0; i<marks.length; i++) {
        if (marks[i] < 60) {
            continue;
        }
        System.out.println((i+1)+"번 학생 축하합니다. 합격입니다.");
    }
    
    // for 중첩
    for(int i=2; i<10; i++) {
        for(int j=1; j<10; j++) {
            System.out.print(i*j+" ");
        }
        System.out.println("");
    }
    ```

-   ``for each``

    ```java
    ArrayList<String> numbers = new ArrayList<String>();
    numbers.add("one");
    numbers.add("two");
    numbers.add("three");
    
    for(String number: numbers) {
        System.out.println(number);
    }
    ```

    

## OOP_Object Oriented Progamming

### Class

### class

클래스는 객체(object)를 만드는 기능이 있다.

```
※ 객체와 인스턴스

클래스에 의해서 만들어진 객체를 인스턴스라고도 한다. 그렇다면 객체와 인스턴스의 차이는 무엇일까? 이렇게 생각 해 보자. Animal cat = new Animal() 이렇게 만들어진 cat은 객체이다. 그리고 cat이라는 객체는 Animal의 인스턴스(instance)이다. 즉 인스턴스라는 말은 특정 객체(cat)가 어떤 클래스(Animal)의 객체인지를 관계위주로 설명할 때 사용된다. 즉, "cat은 인스턴스" 보다는 "cat은 객체"라는 표현이 "cat은 Animal의 객체" 보다는 "cat은 Animal의 인스턴스" 라는 표현이 훨씬 잘 어울린다.
```

### method

클래스에는 객체 변수와 더불어 **메소드(Method)**라는 것이 있다. 메소드는 클래스 내에 구현된 함수를 의미하는데 보통 함수라고 말하지 않고 메소드라고 말한다.

객체 변수는 공유하지 않는다.

### Method

-   보통 다른 언어에는 '함수'가 별도로 존재한다. 파이썬에서는 두개를 구분하여 사용

-   하지만 자바는 클래스를 떠나 존재하는 것은 불가능 => 함수가 따로 존재하는 것이 아니라 **함수가 클래스 내에 존재**한다. 이 때, 클래스 내에 존재하는 함수를 메소드라고 부른다.

-   리턴값이 없는 메소드는 명시적으로 리턴타입 부분에 **void**라고 표기한다.

    ```java
    // method 구조
    public <리턴자료형> <메소드명(입력자료형1 입력변수1, 입력자료형2 입력변수2, ...)> {
        ...    
        return 리턴값;  // 리턴자료형이 void 인 경우에는 return 문이 필요없다.
    }
    
    // 평범한 method
    public int sum(int a, int b) {
        return a+b;
    }
    
    // 입력값 O, 리턴값 X
    public void say() {
        System.out.println("Hi");
    }
    
    // 입력값 X, 리턴값 X
    public void say() {
        System.out.println("Hi");
    }
    ```

#### Call by value

-   ```java
    class Updater {
        public void update(int count) {
            count++;
        }
    }
    
    public class Counter {
        int count = 0;  // 객체변수
        public static void main(String[] args) {        
            Counter myCounter = new Counter();        
            System.out.println("before update:"+myCounter.count);
            Updater myUpdater = new Updater();
            myUpdater.update(myCounter.count);
            System.out.println("after update:"+myCounter.count);
        }
    }
    
    /*
    before update:0
    after update:0
    
    객체 변수 count의 값을 update메소드에 넘겨서 변경시키더라도 값에 변화가 없다. 그 이유는 이전 챕터에서 알아본 것과 같이 update 메소드는 값(int 자료형)을 전달받았기 때문이다.
    */
    ```

-   ```java
    class Updater {
        public void update(Counter counter) {
            counter.count++;
        }
    }
    
    public class Counter {
        int count = 0;
        public static void main(String[] args) {
            Counter myCounter = new Counter();
            System.out.println("before update:"+myCounter.count);
            Updater myUpdater = new Updater();
            myUpdater.update(myCounter);
            System.out.println("after update:"+myCounter.count);
        }
    }
    
    /*
    before update:0
    after update:1
    
    이렇게 메소드의 입력으로 객체를 전달받는 경우에는 메소드가 입력받은 객체를 그대로 사용하기 때문에 메소드가 객체의 속성값을 변경하면 메소드 수행 후 객체의 변경된 속성값이 유지되게 된다.
    */
    ```

-   