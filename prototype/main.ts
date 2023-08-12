// プロトタイプの基底クラス。
abstract class Shape {
    X: number;
    Y: number;
    color: string;

    // 通常のコンストラクター。
    constructor(source?: Shape) {
        if (source) {
            this.X = source.X;
            this.Y = source.Y;
            this.color = source.color;
        }
    }

    // クローン操作は、Shape のサブクラスのいずれかを返す。
    abstract clone(): Shape;
}

// 具象プロトタイプ。
class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(source: Rectangle) {
        super(source);
        this.width = source.width;
        this.height = source.height;
    }

    clone(): Shape {
        return new Rectangle(this);
    }
}

class Circle extends Shape {
    radius: number;

    constructor(source: Circle) {
        super(source);
        this.radius = source.radius;
    }

    clone(): Shape {
        return new Circle(this);
    }
}

// クライアント・コードのどこか。
class Application {
    shapes: Shape[] = [];

    constructor() {
        const circle = new Circle({ X: 10, Y: 10, color: "", radius: 20 } as Circle);
        this.shapes.push(circle);

        const anotherCircle = circle.clone();
        this.shapes.push(anotherCircle);

        const rectangle = new Rectangle({ X: 0, Y: 0, color: "", width: 10, height: 20 } as Rectangle);
        this.shapes.push(rectangle);
    }

    businessLogic() {
        const shapesCopy: Shape[] = [];

        for (let s of this.shapes) {
			const clone = s.clone();
            shapesCopy.push(clone);
			console.log(clone === s)
        }
        // shapesCopy 配列には、shapes 配列の子要素が正確にコピーされる。
    }
}

const app = new Application()

app.businessLogic()