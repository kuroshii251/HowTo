const canvas = document.getElementById("app");

canvas.height = 3300;
canvas.width = window.innerWidth;

const ctx = canvas.getContext("2d");



// navbar
ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.roundRect(1000, 10, 210, 60, 20);
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();
ctx.font = "bold 23px arial";
ctx.fillStyle = "black";
ctx.fillText("Request Quotes", 1015, 50);


ctx.beginPath();
ctx.fillStyle = "white";
ctx.roundRect(40, 10, 200, 60);
ctx.fill();
ctx.font = "bold 25px arial";
ctx.fillStyle = "black";
ctx.fillText("QuotesWeb", 50, 50);
canvas.addEventListener("click", (ctx) => {
    if(ctx.offsetX > 40 && ctx.offsetX < 240 && ctx.offsetY > 10 && ctx.offsetY < 70){
        window.location.href = "index.html";
    } else if (ctx.offsetX > 1000 && ctx.offsetX < 1200 && ctx.offsetY > 10 && ctx.offsetY < 70){
        window.location.href = "submitquote.html";
    }
})


// hero
ctx.beginPath();
ctx.roundRect(100, 150, 1100, 400, 20);
ctx.fill();


// card 1
ctx.fillStyle = "#dededeff ";
ctx.beginPath();
ctx.roundRect(375, 600, 500, 350, 20);
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.stroke();
ctx.fillStyle = "#000";
ctx.textAlign = "start";
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 400, 680);
ctx.font = "35px bold arial";
ctx.fillText("Perfection is not attainable", 400, 730);
ctx.fillText("but if we chasee", 400, 760);
ctx.fillText("perfection we catch excellence", 400, 790);
ctx.font = "20px bold arial";
ctx.fillText("- Vince Lombardi", 400, 830);
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 800, 930);

// card 2
ctx.fillStyle = "#dededeff ";
ctx.beginPath();
ctx.roundRect(375, 1000, 500, 350, 20);
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.stroke();
ctx.fillStyle = "#000";
ctx.textAlign = "start";
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 400, 1080);
ctx.font = "35px bold arial";
ctx.fillText("Perfection is not attainable", 400, 1130);
ctx.fillText("but if we chasee", 400, 1160);
ctx.fillText("perfection we catch excellence", 400, 1190);
ctx.font = "20px bold arial";
ctx.fillText("- Vince Lombardi", 400, 1230);
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 800, 1330);


// card 3
ctx.fillStyle = "#dededeff ";
ctx.beginPath();
ctx.roundRect(375, 1400, 500, 350, 20);
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.stroke();
ctx.fillStyle = "#000";
ctx.textAlign = "start";
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 400, 1480);
ctx.font = "35px bold arial";
ctx.fillText("Perfection is not attainable", 400, 1510);
ctx.fillText("but if we chasee", 400, 1540);
ctx.fillText("perfection we catch excellence", 400, 1570);
ctx.font = "20px bold arial";
ctx.fillText("- Vince Lombardi", 400, 1610);
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 800, 1710);

// card 4
ctx.fillStyle = "#dededeff ";
ctx.beginPath();
ctx.roundRect(375, 1800, 500, 350, 20);
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.stroke();
ctx.fillStyle = "#000";
ctx.textAlign = "start";
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 400, 1880);
ctx.font = "35px bold arial";
ctx.fillText("Perfection is not attainable", 400, 1930);
ctx.fillText("but if we chasee", 400, 1960);
ctx.fillText("perfection we catch excellence", 400, 1990);
ctx.font = "20px bold arial";
ctx.fillText("- Vince Lombardi", 400, 2030);
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 800, 2130);

// card 5
ctx.fillStyle = "#dededeff ";
ctx.beginPath();
ctx.roundRect(375, 2200, 500, 350, 20);
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.stroke();
ctx.fillStyle = "#000";
ctx.textAlign = "start";
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 400, 2280);
ctx.font = "35px bold arial";
ctx.fillText("Perfection is not attainable", 400, 2310);
ctx.fillText("but if we chasee", 400, 2340);
ctx.fillText("perfection we catch excellence", 400, 2370);
ctx.font = "20px bold arial";
ctx.fillText("- Vince Lombardi", 400, 2410);
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 800, 2510);


// card 6
ctx.fillStyle = "#dededeff ";
ctx.beginPath();
ctx.roundRect(375, 2600, 500, 350, 20);
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.stroke();
ctx.fillStyle = "#000";
ctx.textAlign = "start";
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 400, 2680);
ctx.font = "35px bold arial";
ctx.fillText("Perfection is not attainable", 400, 2730);
ctx.fillText("but if we chasee", 400, 2760);
ctx.fillText("perfection we catch excellence", 400, 2790);
ctx.font = "20px bold arial";
ctx.fillText("- Vince Lombardi", 400, 2830);
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 800, 2930);

// card 7
ctx.fillStyle = "#dededeff ";
ctx.beginPath();
ctx.roundRect(375, 3000, 500, 350, 20);
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.stroke();
ctx.fillStyle = "#000";
ctx.textAlign = "start";
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 400, 3080);
ctx.font = "35px bold arial";
ctx.fillText("Perfection is not attainable", 400, 3130);
ctx.fillText("but if we chasee", 400, 3160);
ctx.fillText("perfection we catch excellence", 400, 3190);
ctx.font = "20px bold arial";
ctx.fillText("- Vince Lombardi", 400, 3230);
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 800, 3330);




// footer
ctx.fillStyle = "#000";
ctx.beginPath();
ctx.roundRect(0, 3000, canvas.width, 400);
ctx.fill();
ctx.font = "80px bold arial ";
ctx.fillStyle = "white";
ctx.font = "40px arial bold"
ctx.fillText("QuotesWeb ", 100, 3100);
ctx.font = "20px arial bold"
ctx.fillText("QuotesWeb is a collection of quotes which is for motivated people", 100, 3140);

ctx.fillStyle = "white";
ctx.beginPath();
ctx.roundRect(0, 3195, canvas.width, 0.5);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.roundRect(0, 3200, canvas.width, 60);
ctx.fill();
ctx.font = "20px arial bold";
ctx.fillStyle = "white"
ctx.fillText("Copyright @2026 by Kuro", 500, 3250   );




