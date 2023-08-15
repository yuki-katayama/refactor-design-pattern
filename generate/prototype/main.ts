// コンストラクタが呼び出されないという点にも注意
// 生成するインスタンスの種類が多すぎて、Factory（ConcreteCreator）を大量に作りたくないケース。
// インスタンスの生成が複雑な過程を経るもので、クラスからの生成が難しい場合。

// やること
// クラスからインスタンスをつくるのではなく、インスタンスをコピーすることで、インスタンスから別のインスタンスをつくる
import * as clone from 'clone';

abstract class Animal {
    abstract shout(): void;
    createClone() {
        return clone(this);
    }
}

export class Dog extends Animal {

    public shout() {
        console.log(`[Dog]: bowwow!`)
    }
}

export class Cat extends Animal {

    public shout() {
        console.log(`[Cat]: mew!`)
    }
}

export class Manager {

    private showcase_: {[name: string]: Animal} = {};

    public register(name: string, proto: Animal) {
        this.showcase_[name] = proto;
    }
    public create(protoname: string) {
        var proto: Animal = <Animal>this.showcase_[protoname];
        return proto.createClone();
    }
}

var manager: Manager = new Manager();
var dog: Animal = new Dog();
var cat: Animal = new Cat();

manager.register("dog", dog);
manager.register("cat", cat);

var cpy1: Animal = manager.create("dog")
var cpy2: Animal = manager.create("cat")

cpy1.shout();
cpy2.shout();