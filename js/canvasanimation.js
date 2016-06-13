var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var position = 0;

var drawSquare = function () {
    ctx.clearRect(0, 0, 200, 200);
    ctx.fillRect(position, 0, 20, 20);

    position++;
    if (position > 200) {
        position = 0;
    }
};

var drawHeart = function (x) {
    ctx.fillStyle = 'Red';
    ctx.strokeStyle = 'Red';
    ctx.beginPath();
    ctx.arc(x + 20, 50, 20, Math.PI, Math.PI * 2, false);
    ctx.arc(x + 60, 50, 20, Math.PI, Math.PI * 2, false);
    ctx.lineTo(x + 40, 90);
    ctx.lineTo(x, 50);
    ctx.stroke();
    ctx.fill();
};

var moveHeart = function () {
    ctx.clearRect(0, 0, 200, 200);
    drawHeart(position);

    position++;
    if (position > 200) {
        position = 0;
    }
};

var clickHandler = function (event) {
    console.log("Position: " + (event.pageX - 8) + " " + (event.pageY - 8));
};

var circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

var drawBee = function (x, y) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'Black';
    ctx.fillStyle = 'Gold';

    circle(x, y, 8, true);
    circle(x, y, 8, false);
    circle(x - 5, y - 11, 5, false);
    circle(x + 5, y - 11, 5, false);
    circle(x - 2, y - 1, 2, false);
    circle(x + 2, y - 1, 2, false);
};

var update = function (coordinate) {
    var offset = Math.random() * 4 - 2;
    coordinate += offset;

    if (coordinate > 200) {
        coordinate = 200;
    }
    if (coordinate < 0) {
        coordinate = 0;
    }

    return coordinate;
}
