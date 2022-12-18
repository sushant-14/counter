var countInterval; 

function startCounter(){
    var number=parseInt(document.getElementById("number").value);
    if (isNaN(number)) {
        alert("Please enter a number");
        clearInterval(countInterval);   // This is important for the condition when a counter is running and you entered a wrong input for a new counter
        return;
    }
    if (number < 1 || number > 9) {
        alert("Range out of bounds");
        clearInterval(countInterval);
        return;
    }
    var current=document.querySelector('.counter .current');
    var next=document.querySelector('.counter .next');
    var count=0;
    resetNumbers(current, next);
    
    clearInterval(countInterval);
    countInterval = setInterval(function () {
        if (count === number) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        increaseCount(current, next);
        count++;
    }, 1000);

}
function resetNumbers(current, next, end) {
    current.innerText = 0;
    next.innerText = 1;
}


function increaseCount(current, next) {

    next.classList.add("animate");

    setTimeout(function () {
        current.innerText = next.innerText;
        next.classList.remove("animate");
        next.innerText = parseInt(next.innerText) + 1;
    }, 500);

}
