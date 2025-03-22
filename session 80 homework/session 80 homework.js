let circles = [];

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 10; i++) {
    circles.push(new Circle(random(width), random(height), random(10, 30)));
  }
}

function draw() {
  background(220);
  for (let circle of circles) {
    circle.move();
    circle.bounce();
    circle.display();
  }
}

class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  bounce() {
    if (this.x > width - this.r || this.x < this.r) {
      this.xSpeed *= -1;
    }
    if (this.y > height - this.r || this.y < this.r) {
      this.ySpeed *= -1;
    }
  }

  display() {
    ellipse(this.x, this.y, this.r * 2);
  }
}