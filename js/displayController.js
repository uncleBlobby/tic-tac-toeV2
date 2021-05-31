//displayController (module)
//UI (DOM) updates go here
//use a module

const displayController = (() => {
    //grab handler for gameBoard
    let gameWindow = document.getElementById("gameWindow");

    //draw initial gameboard (9 empty cells)
        //loop over 9 cells
        for(let i = 0; i < 9; i++){
            //create div element to represent cell (Children of gameWindow)
            let cell = document.createElement("div");
            //give cell unique id relative to position
            cell.setAttribute("id", i);
            //give cell class attribute associated with cell
            cell.classList.add("cell");
            //append cell to gameWindow
            gameWindow.appendChild(cell);
        }

    //draw gameboard with turn update

        //add listener to gameBoard cells to check for player click

        const addClickListeners = (() => {
            for (let i = 0; i < gameWindow.children.length; i++){
                gameWindow.children[i].addEventListener('click', function () {
                    //user.claim(player, i);
                    console.log("clicked on cell #: " + i);
                    gameBoard.updateCell(i);
                })
            }
        })();
            
    return { gameWindow }
})();

console.log(gameWindow);
