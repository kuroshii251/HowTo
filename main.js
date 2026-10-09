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
ctx.fillStyle = "black";

ctx.font = "bold 25px arial";
ctx.fillText("QuotesWeb", 50, 50);
canvas.addEventListener("click", (ctx) => {
    if(ctx.offsetX > 40 && ctx.offsetX < 240 && ctx.offsetY > 10 && ctx.offsetY < 70){
        window.location.href = "index.html";
    } else if (ctx.offsetX > 1000 && ctx.offsetX < 1200 && ctx.offsetY > 10 && ctx.offsetY < 70){
        window.location.href = "submitquote.html";
    }
});

// TODO: Create Hero Section and fill value of quote card

// hero
ctx.beginPath();
ctx.roundRect(100, 150, 1100, 400, 20);
ctx.fillStyle = "white";
ctx.fill();

ctx.font = "bold 40px arial";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.font = "bold 50px arial";
ctx.fillText("BECOME BETTER", 650, 300);
ctx.fillText("THAN YOU ARE ALREADY", 650, 360);

ctx.beginPath();
ctx.font = " 20px arial";
ctx.fillText("I Create this website to motivate people to pursue their dreams and achieve their goals", 650, 410);




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
ctx.fillText("Move fast and break things.", 400, 1130);
ctx.fillText("Unless you are breaking stuff,", 400, 1160);
ctx.fillText("you are not moving fast enough.", 400, 1190);
ctx.font = "20px bold arial";
ctx.fillText("- Mark Zuckeberg", 400, 1230);
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
ctx.fillText("Invention is by its very nature", 400, 1510);
ctx.fillText("disruptive.", 400, 1540);
ctx.fillText("If you want to be understood", 400, 1570);
ctx.fillText("at all times", 400, 1600);
ctx.fillText("then don't do anything new.", 400, 1630);
ctx.font = "20px bold arial";
ctx.fillText("- Jeff Bezos", 400, 1680);
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 800, 1740);

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
ctx.fillText("Life is like riding a bicycle.", 400, 1930);
ctx.fillText("To keep your balance,", 400, 1960);
ctx.fillText("you must keep moving.", 400, 1990);
ctx.font = "20px bold arial";
ctx.fillText("- Albert Einstein", 400, 2030);
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
ctx.fillText("If you can't make it good,", 400, 2330);
ctx.fillText("at least make it look good", 400, 2370);
ctx.font = "20px bold arial";
ctx.fillText("- Bill Gates", 400, 2440);
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
ctx.fillText("Your time is limited", 400, 2730);
ctx.fillText("so don't waste it living.", 400, 2760);
ctx.fillText("someone else's life", 400, 2790);

ctx.font = "20px bold arial";
ctx.fillText("- Steve Jobs", 400, 2860);
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
ctx.fillText("When something is important enough,", 400, 3130);
ctx.fillText("you do it even if the odds are not in your favor.", 400, 3160);
ctx.font = "20px bold arial";
ctx.fillText("- Elon Musk", 400, 3230);
ctx.font = "80px bold arial ";
ctx.fillText("“ ", 800, 3330);




// footer
ctx.fillStyle = "#000";
ctx.beginPath();
ctx.roundRect(0, 3000, canvas.width, 400);
ctx.fill();
ctx.font = "80px bold  arial ";
ctx.fillStyle = "white";
ctx.font = "40px arial bold"
ctx.fillText("QuotesWeb ", 100, 3100);
ctx.font = "20px arial bold"
ctx.fillText("QuotesWeb is a collection of quotes which is to motivate people to achieve their dreams.", 100, 3140);

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




