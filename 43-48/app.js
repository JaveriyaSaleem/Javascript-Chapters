// Events 

function phonePurchased(){
    alert("Thanks for purchasing!!")
}

function remove(e){
    e.parentNode.parentNode.remove()
}
var counter = 0;

function increase(){
        document.getElementById("counter").innerText=counter++
}
function decrease(){
    if(counter<0){
        counter = 0
    }
    document.getElementById("counter").innerText = counter--
    
}