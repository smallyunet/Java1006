// 初次使用tsc
console.log('hello world in TypeScript');

// 使用批注验证静态类型
function area(shape: string, width: number, height: number) {
    var area = width * height;
    return "I'm a " + shape + " with an area of " + area + "cm squared";
}

document.body.innerHTML = area("rectangle", 30, 15);

// 使用接口
console.group("接口");
interface Shape {
    name: string;
    width: number;
    height: number;
    color: string;
}

function area2(shape: Shape) {
    var area = shape.width * shape.height;
    return "I'm a " + shape.name + " with an area of " + area + "cm squared";
}

console.log( area2( {name: "rectangle", width: 30, height: 15 } ) );
console.log( area2( {name: "square", width: 30, height: 30, color: "blue"} ) );
console.groupEnd();

// 使用箭头函数，可自动将this附加到上下文
console.group("箭头函数");
var shape = {
    name: "rectangle",
    popup: function() {

        console.log('This inside popup(): ' + this.name);

        setTimeout(() => {
            console.log('This inside setTimeout(): ' + this.name);
            console.log("I'm a " + this.name + "!");
        }, 3000);
    }
}

shape.popup();
console.groupEnd();

// 类
console.group("类");
class Shape {

    area: number;
    private color: string;

    constructor ( name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "pink";
    };

    shoutout() {
        return "I'm " + this.color + " " + this.name + " with an area of " + this.area + " cm squared";
    }
}

var square = new Shape("square", 30, 30);

console.log( square.shoutout() );
console.log( 'Area of Shape: ' + square.area );
console.log( 'Name of Shape: ' + square.name );
console.log( 'Color of Shape: ' + square.color );
console.log( 'Width of Shape: ' + square.width );
console.log( 'Height of Shape: ' + square.height );
console.groupEnd();

// 继承
console.group("继承");
class Shape3D extends Shape {

    volume: number;

    constructor ( public name: string, width: number, height: number, length: number ) {
        super( name, width, height);
        this.volume = length * this.area;
    };

    shoutout() {
        return "I'm " + this.name + " with a volume of " + this.volume + " cm cube";
    }

    superShout() {
        return super.shoutout();
    }
}

var cube = new Shape3D("cube", 30, 30, 30);
console.log(cube.shoutout());
console.log(cube.superShout());
console.groupEnd();