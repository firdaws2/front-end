var counter = document.querySelector(".counter");
let count = 0;
function changeCounter(button) {
    if (button === increase){
        count += 1;
    }else if (button === decrease){
        if (count > 0){
            count -= 1;
        }
    }else  if (button === reset){
        count = 0;
    }
    counter.innerHTML = count;
}