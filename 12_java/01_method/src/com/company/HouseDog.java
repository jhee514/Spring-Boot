package com.company;


public class HouseDog extends Dog {
    // Controller
    // 1. method 명이 class 명과 동일
    // 2. 리턴 자료형이 없다
    public HouseDog(String name) {
        this.setName(name);
    }

    public void sleep() {
        System.out.println((this.name+ " zzz in house"));
    }

    public void sleep(int hour) {
        System.out.println(this.name + " zzz in house for" + hour + "hours");
    }

    public static void main(String[] args) {
//        HouseDog houseDog = new HouseDog();
//        houseDog.setName("happy");
//        houseDog.sleep();
//        houseDog.sleep(3);
        HouseDog dog = new HouseDog("Ddogg");
        System.out.println(dog.name);
    }
}



