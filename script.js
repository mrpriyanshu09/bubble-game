var timer = 60;
var score = 0;
var hitrn ;

function makeBubble() {

    var circle = "";

    for (var i = 1; i <= 138; i++) {

        var rn = Math.floor(Math.random() * 10)
        circle += `<div id="bubble">${rn}</div>`;
    }
    document.querySelector("#pagebottom").innerHTML = circle;
}

function startTimer() {
    var time = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(time);
            document.querySelector("#timerval").textContent = "Time Up";
            document.querySelector("#pagebottom").innerHTML = `<h1 id="result">Game Over <br>Your Score is ${score}🎉</h1>`;
            document.querySelector("#scoreval").textContent = score;
        }
    }, 1000);
}

function setHitvalue() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pagebottom").addEventListener("click", function (details) {
    var clickedNum = Number(details.target.textContent);
    console.log(clickedNum);
    console.log(hitrn)
    if (clickedNum === hitrn) {
        increaseScore();
        setHitvalue();
        makeBubble();
    }
    else {
        makeBubble();
        score -= 5;
        document.querySelector("#scoreval").textContent = score;
        setHitvalue();
        makeBubble();
    }
})

makeBubble();
startTimer();
setHitvalue();