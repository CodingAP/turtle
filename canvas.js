class Canvas {
    constructor(width, height) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.id = 'turtle-canvas';
        this.canvas.style = 'border: 1px solid black';
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
        this.backgroundColor = '#000000';
        this.turtles = [];
        this.showTurtles = true;
        this.clear();
        this.loop();
    }

    showTurtle(bool) {
        this.showTurtle = bool;
    }

    setBackgroundColor(color) {
        this.backgroundColor = color;
    }

    clear() {
        this.context.fillStyle = this.backgroundColor;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    addTurtle(turtle) {
        turtle.context = this.context;
        this.turtles.push(turtle);
    }

    loop() {
        if (this.showTurtles) {
            for (let turtle of this.turtles) {
                this.context.beginPath();
                this.context.fillStyle = turtle.color;
                this.context.ellipse(turtle.x, turtle.y, 15, 15, 0, 0, Math.PI * 2);
                this.context.fill();
                this.context.closePath();
            }
        }
        window.requestAnimationFrame(this.loop.bind(this));
    }
}