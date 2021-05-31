//gameBoard (module)
//use module
//store gameBoard positions (grid positions) and status (empty, x, o) as an array (object) inside of gameBoard object

const gameBoard = (() => {
    //create array to store gameBoard cell objects
    let cells = [];
    //create factory function for cell objects, with position and status params
    const cell = (position, status) => {
        //general function to log the position of a given cell
        const getPosition = () => console.log(position);
        //general function to log the status of a given cell
        const getStatus = () => console.log(status);
        //return all properties of the object
        return { position, status, getPosition, getStatus };
    }

        //iterate through gameWindow display cells to create cell objects
        //initial draw
    const initialDraw = (() => {
        for(let i = 0; i < gameWindow.children.length; i++) {
            //create newCell object for each square in gameboard, set to undefined
            const newCell = cell(i, 'unclaimed');
            cells.push(newCell);
        }

    })();

    //update cell if claimed by a click
    function updateCell(i) {
        cells[i].status = "claimed";
        user.claim("user", i);
        //gameWindow.children[i].classList.add("claimedX");
        console.log(cells[i].status + " cell # " + i);
        console.log(cells);
    }
    //console log the array of gameboard cells
    console.log(cells);

    return { updateCell, cells };


})();