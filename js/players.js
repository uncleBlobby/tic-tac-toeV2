//player objects
//create with factory

const Player = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
    //function for player to claim gameBoard cell

    const claim = (player, cell) => {

        console.log(`${player} has claimed cell#: ${cell}`);
        
    }

    return { claim }

}

// create Player for user
const user = Player('user');
const comp = Player('comp');