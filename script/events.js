
// ===      events      ===

function myClick(obj){
    obj.style.color="red";
}

function mouseOver(obj){
    obj.style.color="Yellow";
}

function mouseLeave(obj){
    obj.style.color="black";
}

// event Listner
var obj = document.getElementById("great")

obj.addEventListener("click", function(){
    obj.style.color="Green";
})


