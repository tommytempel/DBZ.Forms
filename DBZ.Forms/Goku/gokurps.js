let playerscore=0
let Gokuscore=0

const Goku = () => {
    const choice = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random()*3)
    Gokuchoice = choice[random]
    return Gokuchoice
}

const letsplay = (player, Gokuplay)=> {
    if (player === Gokuplay) {
        return(`You tie! You both chose ${player}`)
    }
    //The above are ties and get no points.
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
    console.log(letsplay(player,Gokuplay));
    }

    if (playerscore>Gokuscore) {
        console.log("You win the game! Keep training because Goku will be back")
    }
    else if (Gokuscore>playerscore) {
        console.log("You lose! Keep training you weak bitch.")
    }
}

game()

