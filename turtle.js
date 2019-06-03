class Turtle {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.direction = [Math.cos(this.angle * (Math.PI / 180)), Math.sin(this.angle * (Math.PI / 180))];
        this.color = '#fff';
        this.width = 1;
        this.context = null;
        this.pen = true;
    }

    setPen(up) {
        this.pen = up;
    }

    setColor(color) {
        this.color = color;
    }

    setWidth(width) {
        this.width = width;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    moveTo(x, y) {
        if (this.pen) {
            this.context.strokeStyle = this.color;
            this.context.lineWidth = this.width;
            this.context.beginPath();
            this.context.moveTo(this.x, this.y);
            this.context.lineTo(x, y);
            this.context.stroke();
            this.context.closePath();
        }
        this.x = x;
        this.y = y;
    }

    move(dist) {
        let offsetX = this.direction[0] * dist;
        let offsetY = this.direction[1] * dist;
        if (this.pen) {
            this.context.strokeStyle = this.color;
            this.context.lineWidth = this.width;
            this.context.beginPath();
            this.context.moveTo(this.x, this.y);
            this.context.lineTo(this.x + offsetX, this.y + offsetY);
            this.context.stroke();
            this.context.closePath();
        }
        this.x += offsetX;
        this.y += offsetY;
    }

    rotate(angle) {
        this.angle += angle;
        this.direction = [Math.cos(this.angle * (Math.PI / 180)), Math.sin(this.angle * (Math.PI / 180))];
    }
}