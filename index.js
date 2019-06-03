let canvas = new Canvas(600, 600);
let turtle = new Turtle();

canvas.addTurtle(turtle);
turtle.setPosition(300, 300);

turtle.move(100);
turtle.rotate(90);
turtle.setPen(false);
turtle.move(100);
turtle.rotate(90);
turtle.move(100);
turtle.rotate(90);
turtle.setPen(true);
turtle.move(100);
turtle.rotate(90);