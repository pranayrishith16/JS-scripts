var counter = 0;

const value = document.querySelector('#value');
const reset = document.querySelector('.reset');
const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');

reset.addEventListener("click",function(){
    counter = 0;
    value.textContent = counter;
    value.style.color = "black";
})

inc.addEventListener("click",function(){
    counter++;
    value.textContent = counter;
    if (counter == 0){
        value.style.color = "black";
    }
    if (counter>0){
        value.style.color = "green";
    }
    if (counter<0){
        value.style.color = "red";
    }
})

dec.addEventListener("click",function(){
    counter--;
    value.textContent = counter;
    if (counter == 0){
        value.style.color = "black";
    }
    if (counter>0){
        value.style.color = "green";
    }
    if (counter<0){
        value.style.color = "red";
    }
})