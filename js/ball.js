var Ball = function (x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.xSpeed = -Math.ceil(Math.random() * 4);
    this.ySpeed = Math.ceil(Math.random() * 4);
    this.color = randomColor();
};

var circle = function (x, y, radius, color, fillCyrcle) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCyrcle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

var randomColor = function () {
    var n = '#';
    for (var i = 0; i < 3; i++) {
        var r = Math.floor(Math.random() * 255);
        n += (r>>>0).toString(16);
    }
    return n;
};

Ball.prototype.draw = function () {
    circle(this.x, this.y, this.radius, this.color, true);
};

Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function () {
    if (this.x < (0 + this.radius) || this.x > (canvas.width - this.radius)) {
        this.xSpeed = -this.xSpeed;
        this.color = randomColor();
    }
    if (this.y < (0 + this.radius) || this.y > (canvas.height - this.radius)) {
        this.ySpeed = -this.ySpeed;
        this.color = randomColor();
    }
};
