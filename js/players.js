//player objects
//create with factory

const Player = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
    //function for player to claim gameBoard cell

    const claim = (name, cell) => {
        //cells[i].status = 'claimed';
        console.log(cell);
        console.log(`${name} has claimed cell#: ${cell}`);
        gameWindow.children[cell].classList.add('claimedX');
    }

    return { claim, name }

}

// create Player for user
const user = Player('user');
const comp = Player('comp');