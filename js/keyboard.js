var keyActions = {
    32: 'stop',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
};

var circle = function (x, y, radius, fillCyrcle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCyrcle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

var Ball = function (width, height) {
    this.x = width / 2;
    this.y = height / 2;
    this.speed = 5
    this.xSpeed = 5;
    this.ySpeed = 0;
};

Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0) {
        // this.x = width;
        this.xSpeed = -this.xSpeed;
    } else if (this.x > width) {
        // this.x = 0;
        this.xSpeed = -this.xSpeed;
    } else if (this.y < 0) {
        // this.y = height;
        this.ySpeed = -this.ySpeed;
    } else if (this.y > height) {
        // this.y = 0;
        this.ySpeed = -this.ySpeed;
    }
};

Ball.prototype.draw = function () {
    circle(this.x, this.y, 10, true);
};

Ball.prototype.setDirection = function (direction) {
    if (direction === "up") {
        this.xSpeed = 0;
        this.ySpeed -= this.speed;
    } else if (direction === "down") {
        this.xSpeed = 0;
        this.ySpeed += this.speed;
    } else if (direction === "left") {
        this.xSpeed -= this.speed;
        this.ySpeed = 0;
    } else if (direction === "right") {
        this.xSpeed += this.speed;
        this.ySpeed = 0;
    } else if (direction === "stop") {
        this.xSpeed = 0;
        this.ySpeed = 0;
    }
};
