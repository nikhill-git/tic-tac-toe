let arr1 = document.querySelectorAll(".btn");
let h1 = document.querySelector("h1");
let winner = document.createElement("h6");
winner.innerText = "Congratulations, You Won!";


//Winning pattrens
const winPattens = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let curr = true;

arr1.forEach((idx) =>{
    idx.addEventListener("click", () =>{
        if(curr){
            idx.innerText = "X";
            curr = false;
        }
        else {
            idx.innerText = "O";
            curr = true;
        }
        checkWinner();
    }, { once: true});
});

const checkWinner = () => {
    for(let pattern of winPattens){
        let pos1 = arr1[pattern[0]].innerText;
        let pos2 = arr1[pattern[1]].innerText;
        let pos3 = arr1[pattern[2]].innerText;

        if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3){
                h1.append(winner);
            }
        }
    }
}

let reset = document.querySelector(".restart");

reset.addEventListener("click", () => {
  location.reload();
});


