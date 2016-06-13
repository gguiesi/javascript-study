
var Car = function (x, y) {
    this.x = x;
    this.y = y;
};

var drawCar = function (car) {
    var carHtml = '<img src="http://nostarch.com/images/car.png">';

    var carElement = $(carHtml);
    carElement.css({
        position: 'absolute',
        left: car.x,
        top: car.y
    });

    $('body').append(carElement);
}
// OO usando prototype

// var Car2 = function (x, y) {
//     this.x = x;
//     this.y = y;
// };
//
// Car2.prototype.draw = function () {
//     var carHtml = '<img src="http://nostarch.com/images/car.png">';
//
//     this.carElement = $(carHtml);
//
//     this.carElement.css({
//         position: 'absolute',
//         left: this.x,
//         top: this.y
//     });
//
//     $('body').append(this.carElement);
// };
//
// Car2.prototype.moveRight = function () {
//     this.x += 5;
//
//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     });
//     console.log(this);
// };
//
// Car2.prototype.moveLeft = function () {
//     this.x -= 5;
//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     });
//     console.log(this);
// };
// Car2.prototype.moveUp = function () {
//     this.y -= 5;
//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     });
//     console.log(this);
// };
// Car2.prototype.moveDown = function () {
//     this.y += 5;
//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     });
//     console.log(this);
// };
