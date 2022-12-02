let playerscore=0
let Gokuscore=0

const Goku = (Gokuchoice) => {
    const choice = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random()*3)
    Gokuchoice = choice[random]
    return Gokuchoice
}

const letsplay =(player, Gokuplay)=> {
    if (player === "rock" && Gokuplay === "rock"){
        return ("You tie! Rock loves rock.")
    }
    else if (player === "paper" && Gokuplay=== "paper"){
        return ("You tie! Paper sticks to paper.") 
    }
    else if (player === "scissors" && Gokuplay=== "scissors"){
        return ("You tie! Scissors like to scissor scissors") 
    }
    //The above are all ties and get no points.
    else if (player === "rock" && Gokuplay=== "paper"){
        Gokuscore++
        return ("You lose! Paper covers rock.") 
    }
    else if (player === "rock" && Gokuplay=== "scissors"){
        playerscore++
        return ("You Win! Rock crushes scissors.") 
    }
    else if (player === "paper" && Gokuplay=== "rock"){
        playerscore++
        return ("You Win! Paper covers rock.") 
    }
    else if (player === "paper" && Gokuplay=== "scissors"){
        Gokuscore++
        return ("You lose! Scissors cuts paper.") 
    }
    else if (player === "scissors" && Gokuplay=== "paper"){
        playerscore++
        return ("You win! Scissors cut paper") 
    }
    else if (player === "scissors" && Gokuplay=== "rock"){
        Gokuscore++
        return ("You lose! Rock crushes scissors.") 
    }
}





const game = () => {
for (let i = 0; i < 5; i++); {
    const player=prompt("Whats your choice? Rock, paper, or scissors?").toLowerCase();
    const Gokuplay = Goku();
    letsplay(player,Gokuplay)
    console.log(letsplay(player,Gokuplay));
    }

    if (playerscore===5) {
        console.log("You win! Goku wants a rematch")
    }
    else if (Gokuscore===5) {
        console.log("You lose! Train harder if you want to win.")
    }
}

game()