let dinozor = document.getElementById("dinozor");
let kaktus = document.getElementById("kaktus");


function jump(){
    if(dinozor.classList != ("jump")){
        dinozor.classList.add("jump");

        setTimeout(function(){
        dinozor.classList.remove("jump")}, 300);
    }
}


let isAlive = setInterval(function(){
    let dinozortop = parseInt(window.getComputedStyle(dinozor).getPropertyValue("top"));

    let kaktusleft = parseInt(
        window.getComputedStyle(kaktus).getPropertyValue("left")
    );

    if(kaktusleft < 50 && kaktusleft > 0 && dinozortop >= 200){
        alert("Gamer over...");
    }

}, 10);


document.addEventListener("keydown" , function(event){
    jump();
});