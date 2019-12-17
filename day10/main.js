//父層
class Shape {
    constructor(id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move(x, y) {
        this.x = x
        this.y = y
    }
    toString() {
        return `Shape 形狀 :(${this.id})`
    }
    static test() {
        return 101
    }
}
//子層 長方形
class Rectangle extends Shape {
    constructor(id, x, y, width, height) {
        super(id, x, y)
        this.width = width
        this.height = height
    }
}
//子層  圓形
class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
        this._name = ''
    }
    set name(name) {
        console.log(name) //progerssbar
        this._name = name
    }
    get name() {
        return this._name
    }

    toString() {
        return "<Circle 圓形:> " + super.toString()
    }
    static test() {
        return `66(會得66不是101)`
    }
}

let shape = new Shape('形狀', 2, 4)
let rectangle = new Rectangle('長方形', 10, 20, 100, 200)
let circle = new Circle('圓形', 11, 22, 3.14)

console.log(shape) //Shape {id: "形狀", x: 2, y: 4}
console.log(rectangle) //Rectangle {id: "長方形", x: 10, y: 20, width: 100, height: 200}
console.log(circle.toString()) //<Circle 圓形:> Shape 形狀 :(圓形)
circle.name = 'progerssbar'
console.log(Rectangle.test()) //101
console.log(Circle.test()) //66(會得66不是101)
