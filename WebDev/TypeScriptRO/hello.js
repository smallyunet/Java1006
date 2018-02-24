var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 初次使用tsc
console.log('hello world in TypeScript');
// 使用批注验证静态类型
function area(shape, width, height) {
    var area = width * height;
    return "I'm a " + shape + " with an area of " + area + "cm squared";
}
document.body.innerHTML = area("rectangle", 30, 15);
// 使用接口
console.group("接口");
function area2(shape) {
    var area = shape.width * shape.height;
    return "I'm a " + shape.name + " with an area of " + area + "cm squared";
}
console.log(area2({ name: "rectangle", width: 30, height: 15 }));
console.log(area2({ name: "square", width: 30, height: 30, color: "blue" }));
console.groupEnd();
// 使用箭头函数，可自动将this附加到上下文
console.group("箭头函数");
var shape = {
    name: "rectangle",
    popup: function () {
        var _this = this;
        console.log('This inside popup(): ' + this.name);
        setTimeout(function () {
            console.log('This inside setTimeout(): ' + _this.name);
            console.log("I'm a " + _this.name + "!");
        }, 3000);
    }
};
shape.popup();
console.groupEnd();
// 类
console.group("类");
var Shape = /** @class */ (function () {
    function Shape(name, width, height) {
        this.area = width * height;
        this.color = "pink";
    }
    ;
    Shape.prototype.shoutout = function () {
        return "I'm " + this.color + " " + this.name + " with an area of " + this.area + " cm squared";
    };
    return Shape;
}());
var square = new Shape("square", 30, 30);
console.log(square.shoutout());
console.log('Area of Shape: ' + square.area);
console.log('Name of Shape: ' + square.name);
console.log('Color of Shape: ' + square.color);
console.log('Width of Shape: ' + square.width);
console.log('Height of Shape: ' + square.height);
console.groupEnd();
// 继承
console.group("继承");
var Shape3D = /** @class */ (function (_super) {
    __extends(Shape3D, _super);
    function Shape3D(name, width, height, length) {
        var _this = _super.call(this, name, width, height) || this;
        _this.name = name;
        _this.volume = length * _this.area;
        return _this;
    }
    ;
    Shape3D.prototype.shoutout = function () {
        return "I'm " + this.name + " with a volume of " + this.volume + " cm cube";
    };
    Shape3D.prototype.superShout = function () {
        return _super.prototype.shoutout.call(this);
    };
    return Shape3D;
}(Shape));
var cube = new Shape3D("cube", 30, 30, 30);
console.log(cube.shoutout());
console.log(cube.superShout());
console.groupEnd();
