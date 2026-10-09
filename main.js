const canvas = document.getElementById("app");

canvas.height = 1200;
canvas.width = window.innerWidth;

const ctx = canvas.getContext("2d");
ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.roundRect(0, 0, canvas.width, 100);
ctx.fill();
ctx.fillStyle = "black"
ctx.font = "35px bold arial";
ctx.fillText("QuotesWeb", 50, 60);

ctx.fillStyle = 
ctx.roundRect(0, 0, canvas.width, 100);
ctx.font = "25px bold arial";
ctx.fillText("Request Quotes", 1000, 60);



ctx.fillStyle = "#dededeff ";
ctx.beginPath();
ctx.roundRect(375, 150, 500, 350, 20);
ctx.fill();
ctx.fillStyle = "#000";
ctx.textAlign = "start";
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 400, 230);
ctx.font = "35px bold arial";
ctx.fillText("Perfection is not attainable", 400, 280);
ctx.fillText("but if we chasee", 400, 310);
ctx.fillText("perfection we catch excellence", 400, 340);
ctx.font = "20px bold arial";
ctx.fillText("- Vince Lombardi", 400, 400);
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 800, 500);


ctx.fillStyle = "#dededeff ";
ctx.beginPath();
ctx.roundRect(375, 550, 500, 350, 20);
ctx.fill();
ctx.fillStyle = "#000";
ctx.textAlign = "start";
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 400, 630);
ctx.font = "35px bold arial";
ctx.fillText("Move fast and break things", 400, 660);
ctx.fillText("Unless you are breaking stuff", 400, 700);
ctx.fillText("you are not moving fast enough.", 400, 740);
ctx.font = "20px bold arial";
ctx.fillText("- Mark Zuckeberg", 400, 790);
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 800, 900);

ctx.fillStyle = "#000";
ctx.beginPath();
ctx.roundRect(0, 1000, canvas.width, 400);
ctx.fill();

ctx.font = "80px bold arial ";
ctx.fillStyle = "white";
ctx.font = "40px arial bold"
ctx.fillText("QuotesWeb ", 100, 1070);
ctx.font = "20px arial bold"
ctx.fillText("QuotesWeb is a collection of quotes", 100, 1100);




