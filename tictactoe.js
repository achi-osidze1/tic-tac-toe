var items = document.querySelectorAll(".item")
var restart = document.querySelector(".restart")
sc1 = document.querySelector(".sc1")
sc2 = document.querySelector(".sc2")
var score1 = 0
var score2 = 0
var counter = 0
var combinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

for(var i of items){
    i.addEventListener("click", function(){
         if(this.innerText == ""){
            counter%2 == 0 ? this.innerText = "X" : this.innerText = "O"
            counter++
       }  

         this.style.fontWeight = "normal"
         this.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';

         if(items[0].innerHTML == "X" && items[1].innerHTML == "X" && items[2].innerHTML == "X"){
            score1 ++
            sc1.innerHTML = " X Score:" + score1
            disable()
         }
         else if(items[0].innerHTML == "O" && items[1].innerHTML == "O" && items[2].innerHTML == "O"){
            score2 ++
            sc2.innerHTML = " O Score:" + score2
            disable()
         }
         if(items[3].innerHTML == "X" && items[4].innerHTML == "X" && items[5].innerHTML == "X"){
            score1 ++
            sc1.innerHTML = " X Score:" + score1
            disable()
         }
         else if(items[3].innerHTML == "O" && items[4].innerHTML == "O" && items[5].innerHTML == "O"){
            score2 ++
            sc2.innerHTML = " O Score:" + score2
            disable()
         }
         if(items[6].innerHTML == "X" && items[7].innerHTML == "X" && items[8].innerHTML == "X"){
            score1 ++
            sc1.innerHTML = " X Score:" + score1
            disable()
         }
         else if(items[6].innerHTML == "O" && items[7].innerHTML == "O" && items[8].innerHTML == "O"){
            score2 ++
            sc2.innerHTML = " O Score:" + score2
            disable()
         }
         if(items[0].innerHTML == "X" && items[3].innerHTML == "X" && items[6].innerHTML == "X"){
            score1 ++
            sc1.innerHTML = " X Score:" + score1
            disable()
         }
         else if(items[0].innerHTML == "O" && items[3].innerHTML == "O" && items[6].innerHTML == "O"){
            score2 ++
            sc2.innerHTML = " O Score:" + score2
            disable()
         }
         if(items[1].innerHTML == "X" && items[4].innerHTML == "X" && items[7].innerHTML == "X"){
            score1 ++
            sc1.innerHTML = " X Score:" + score1
            disable()
         }
         else if(items[1].innerHTML == "O" && items[4].innerHTML == "O" && items[7].innerHTML == "O"){
            score2 ++
            sc2.innerHTML = " O Score:" + score2
            disable()
         }
         if(items[2].innerHTML == "X" && items[5].innerHTML == "X" && items[8].innerHTML == "X"){
            score1 ++
            sc1.innerHTML = " X Score:" + score1
            disable()
         }
         else if(items[2].innerHTML == "O" && items[5].innerHTML == "O" && items[8].innerHTML == "O"){
            score2 ++
            sc2.innerHTML = " O Score:" + score2
            disable()
         }
         if(items[0].innerHTML == "X" && items[4].innerHTML == "X" && items[8].innerHTML == "X"){
            score1 ++
            sc1.innerHTML = " X Score:" + score1
            disable()
         }
         else if(items[0].innerHTML == "O" && items[4].innerHTML == "O" && items[8].innerHTML == "O"){
            score2 ++
            sc2.innerHTML = " O Score:" + score2
            disable()
         }
         if(items[2].innerHTML == "X" && items[4].innerHTML == "X" && items[6].innerHTML == "X"){
            score1 ++
            sc1.innerHTML = " X Score:" + score1
            disable()
         }
         else if(items[2].innerHTML == "O" && items[4].innerHTML == "O" && items[6].innerHTML == "O"){
            score2 ++
            sc2.innerHTML = " O Score:" + score2
            disable()
         }
         else if(
          (items[0].innerHTML == "X" || items[0].innerHTML == "O") && (items[1].innerHTML == "X" || items[1].innerHTML == "O") &&
          (items[2].innerHTML == "X" || items[2].innerHTML == "O") && (items[3].innerHTML == "X" || items[3].innerHTML == "O") &&
          (items[4].innerHTML == "X" || items[4].innerHTML == "O") && (items[5].innerHTML == "X" || items[5].innerHTML == "O") &&
          (items[6].innerHTML == "X" || items[6].innerHTML == "O") && (items[7].innerHTML == "X" || items[7].innerHTML == "O") &&
          (items[8].innerHTML == "X" || items[8].innerHTML == "O") && (items[0].innerHTML == "X" || items[0].innerHTML == "O") &&
          (items[3].innerHTML == "X" || items[3].innerHTML == "O") && (items[6].innerHTML == "X" || items[6].innerHTML == "O") &&
          (items[1].innerHTML == "X" || items[1].innerHTML == "O") && (items[4].innerHTML == "X" || items[4].innerHTML == "O") &&
          (items[7].innerHTML == "X" || items[7].innerHTML == "O") && (items[2].innerHTML == "X" || items[2].innerHTML == "O") &&
          (items[5].innerHTML == "X" || items[5].innerHTML == "O") && (items[8].innerHTML == "X" || items[8].innerHTML == "O") &&
          (items[0].innerHTML == "X" || items[0].innerHTML == "O") && (items[4].innerHTML == "X" || items[4].innerHTML == "O") &&
          (items[8].innerHTML == "X" || items[8].innerHTML == "O") && (items[2].innerHTML == "X" || items[2].innerHTML == "O") &&
          (items[4].innerHTML == "X" || items[4].innerHTML == "O") && (items[6].innerHTML == "X" || items[6].innerHTML == "O")){
           alert("Draw")
         }
    })
}


restart.addEventListener("click", function(){
  enable()
})

function disable(){
  for(var i of items){
    i.style.pointerEvents = "none";
  }
}
function enable(){
  for(var i of items){
    i.style.pointerEvents = "auto"
    i.innerText = ""
  }
}