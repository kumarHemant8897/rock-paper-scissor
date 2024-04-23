let userscore = 0;
let compscore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score")

const gencompchoice = () => {
    const options =["rock" , "paper" , "scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

const drawgame = ()=>{
    console.log("game was draw");
    msg.innerText = "game was draw .. play again";
    msg.style.backgroundcolour="pink"

};

const showwinner = (userwin,userchocie,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win!");
        msg.innerText = 'you win! '
        msg.style.backgroundcolour="red"
    }
    else {
        compscore++;
        compscorepara.innerText = compscorescore;

        console.log("yo lose");
        msg.innerText = "you lose";
        msg.style.backgroundcolour="green"
    }
}

const playgame =(userchoice) => {
    console.log("user choice=" , userchoice);
            //i dont know this is not eorking 
    const compchoice = gencompchoice();
    console.log("comp choice=" , compchoice);

    if (userchoice === compchoice) {
        //draw  mma ki chut
        drawgame();
    }
    else {
        let userwin= true;
        if(userchoice === "rock") {
            //paper.scissor

            userwin =compchoice === "paper" ? false : true;
        }

        else if (userchoice === "paper") {
            //rock,scissor

            userwin =compchoice === "scissor" ? false : true;
        }

        else {
            //rock,paper
            userwin =compchoice === "rock" ? false : true;
        }

        showwinner(userwin);

    }
};



















choice.forEach((choice) =>{
    choice.addEventListener("click" ,() =>{
        const userchoice = choice.getAttribute("id" );
        playgame(userchoice);
        
    });
});