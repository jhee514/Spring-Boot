package com.company;

public class Dog  extends Animal {
    // Default Controller
    // 만약 클래스에 생성자가 하나도 없다면 컴파일러는 자동으로 위와같은 디폴트 생성자를 추가한다.
    public Dog() {
    }

    public void sleep() {
        System.out.println(this.name+" zzz");
    }
}
