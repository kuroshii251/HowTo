const canvas = document.getElementById("submitquote");
canvas.height = 1080;
canvas.width = window.innerWidth;

const ctx = canvas.getContext("2d");

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


ctx.beginPath();
ctx.fillStyle = "white";
ctx.roundRect(150, 400, 1000, 300);
ctx.fill();
ctx.font = "bold 40px arial";
ctx.fillStyle = "black";
ctx.fillText("Request Quotes", 500, 300);
ctx.font = "bold 20px arial";
ctx.fillText("You can request the quotes by contact me, here's my contact", 350, 340);
ctx.font = "bold 30px arial";

ctx.fillText("Email: bryan72937292@proton.me", 350, 450);
ctx.fillText("Github: kuroshii251", 350, 500);







ctx.fillStyle = "#000";
ctx.beginPath();
ctx.roundRect(0, 800, canvas.width, 400);
ctx.fill();
ctx.font = "80px bold arial ";
ctx.fillStyle = "white";
ctx.font = "40px arial bold"
ctx.fillText("QuotesWeb ", 100, 900);
ctx.font = "20px arial bold"
ctx.fillText("QuotesWeb is a collection of quotes which is for motivated people", 100, 940);

ctx.fillStyle = "white";
ctx.beginPath();
ctx.roundRect(0, 995, canvas.width, 0.5);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.roundRect(0, 1000, canvas.width, 60);
ctx.fill();
ctx.font = "20px arial bold";
ctx.fillStyle = "white"
ctx.fillText("Copyright @2026 by Kuro", 500, 1050   );




