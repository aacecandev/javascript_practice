// Rover Object Goes Here
// ======================
var rover1 = {
  direction: "N",
  column: 0,
  row: 0,
  travelLog: [],
  name: "Rover1"
};

var rover2 = {
  direction: "N",
  column: 0,
  row: 1,
  travelLog: [],
  name: "Rover2"
};
// ======================

// GRID CREATION
// ======================
var grid = [];

for (var i = 0; i < 10; i++) {
  grid[i] = [];
  for (var j = 0; j < 10; j++) {
    grid[i][j] = null;
  }
}

// Rover's initial position
grid[0][0] = "R";
grid[1][0] = "R";

// Obstacles
grid[0][1] = "O";

// FUNCTIONS
// ======================
function turnLeft(rover) {
  console.log("turnLeft was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("Rover is now facing " + rover.direction);
      break;
    case "W":
      rover.direction = "S";
      console.log("Rover is now facing " + rover.direction);
      break;
    case "S":
      rover.direction = "E";
      console.log("Rover is now facing " + rover.direction);
      break;
    case "E":
      rover.direction = "N";
      console.log("Rover is now facing " + rover.direction);
      break;
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Rover is now facing " + rover.direction);
      break;
    case "E":
      rover.direction = "S";
      console.log("Rover is now facing " + rover.direction);
      break;
    case "S":
      rover.direction = "W";
      console.log("Rover is now facing " + rover.direction);
      break;
    case "W":
      rover.direction = "N";
      console.log("Rover is now facing " + rover.direction);
      break;
  }
}

function moveForward(rover) {
  console.log("moveForward was called");

  switch (rover.direction) {
    case "N":
      if (rover.row > 0) {

        rover.row -= 1;

        if (grid[rover.row][rover.column] === null) {
          grid[rover.row+1][rover.column] = null;
          roverMove(rover);
          break;
        }

        else if (grid[rover.row][rover.column] === "O") {
          rover.row += 1;
          console.log("Obstacle found");
          break;
        }

        else if (grid[rover.row][rover.column] === "R") {
          rover.row += 1;
          console.log(rover.name + " found another Rover in this position");
          break;
        }

      } else {
        console.log("Rover can't go out of the limits");
        break;
      }

    case "E":
      if (rover.column < 9) {
        
        rover.column += 1;

        if (grid[rover.row][rover.column] === null) {
          grid[rover.row][rover.column-1] = null;
          roverMove(rover);
          break;
        }

        else if (grid[rover.row][rover.column] === "O") {
          rover.column -= 1;
          console.log("Obstacle found");
          break;
        }

        else if (grid[rover.row][rover.column] === "R") {
          rover.column -= 1;
          console.log(rover.name + " found another Rover in this position");
          break;
        }

      } else {
        console.log("Rover can't go out of the limits");
        break;
      }

    case "S":
      if (rover.row < 9) {

        rover.row += 1;

        if (grid[rover.row][rover.column] === null) {
          grid[rover.row-1][rover.column] = null;
          roverMove(rover);
          break;
        }

        else if (grid[rover.row][rover.column] === "O") {
          rover.row -= 1;
          console.log("Obstacle found");
          break;
        }

        else if (grid[rover.row][rover.column] === "R") {
          rover.row -= 1;
          console.log(rover.name + " found another Rover in this position");
          break;
        }
      } else {
        console.log("Rover can't go out of the limits");
        break;
      }

    case "W":
      if (rover.column > 0) {

        rover.column -= 1;

        if (grid[rover.row][rover.column] === null) {
          grid[rover.row][rover.column+1] = null;
          roverMove(rover);
          break;
        }

        else if (grid[rover.row][rover.column] === "O") {
          rover.column += 1;
          console.log("Obstacle found");
          break;
        }

        else if (grid[rover.row][rover.column] === "R") {
          rover.column += 1;
          console.log(rover.name + " found another Rover in this position");
          break;
        }
      } else {
        console.log("Rover can't go out of the limits");
        break;
      }
  }
}

function moveBackward(rover) {
  console.log("moveForward was called");

  switch (rover.direction) {
    case "N":
      if (rover.row < 9) {

        rover.row += 1;

        if (grid[rover.row][rover.column] === null) {
          grid[rover.row-1][rover.column] = null;
          roverMove(rover);
          break;
        }

        else if (grid[rover.row][rover.column] === "O") {
          rover.row -= 1;
          console.log("Obstacle found");
          break;
        }

        else if (grid[rover.row][rover.column] === "R") {
          rover.row -= 1;
          console.log(rover.name + " found another Rover in this position");
          break;
        }
      } else {
        console.log("Rover can't go out of the limits");
        break;
      }

    case "E":
      if (rover.column > 0) {

        rover.column -= 1;

        if (grid[rover.row][rover.column] === null) {
          grid[rover.row][rover.column+1] = null;
          roverMove(rover);
          break;
        }

        else if (grid[rover.row][rover.column] === "O") {
          rover.column += 1;
          console.log("Obstacle found");
          break;
        }

        else if (grid[rover.row][rover.column] === "R") {
          rover.column += 1;
          console.log(rover.name + " found another Rover in this position");
          break;
        }
      } else {
        console.log("Rover can't go out of the limits");
        break;
      }

    case "S":
      if (rover.row > 0) {

        rover.row -= 1;

        if (grid[rover.row][rover.column] === null) {
          grid[rover.row+1][rover.column] = null;
          roverMove(rover);
          break;
        }

        else if (grid[rover.row][rover.column] === "O") {
          rover.row += 1;
          console.log("Obstacle found");
          break;
        }

        else if (grid[rover.row][rover.column] === "R") {
          rover.row += 1;
          console.log(rover.name + " found another Rover in this position");
          break;
        }
      } else {
        console.log("Rover can't go out of the limits");
        break;
      }

    case "W":
      if (rover.column < 9) {

        rover.column += 1;

        if (grid[rover.row][rover.column] === null) {
          grid[rover.row][rover.column-1] = null;
          roverMove(rover);
          break;
        }

        else if (grid[rover.row][rover.column] === "O") {
          rover.column -= 1;
          console.log("Obstacle found");
          break;
        }

        else if (grid[rover.row][rover.column] === "R") {
          rover.column -= 1;
          console.log(rover.name + " found another Rover in this position");
          break;
        }
      } else {
        console.log("Rover can't go out of the limits");
        break;
      }
  }
}

function roverMove(rover) {
  rover.travelLog.push("(row,column) = " + [rover.row] + "," + [rover.column]);
  grid[rover.row][rover.column] = null;
  grid[rover.row][rover.column] = "R";
  console.log(rover.name + " is now positioned in [" + [rover.row] + "," + [rover.column] + "]");
}

function chainMoves(rover, commands) {
  console.log("chainMoves was called");

  for (var i = 0; i < commands.length; i++) {
    if (/[fbrl]+/.test(commands[i])) {
      switch (commands[i]) {
        case "f":
          moveForward(rover);
          break;
        case "b":
          moveBackward(rover);
          break;
        case "r":
          turnRight(rover);
          break;
        case "l":
          turnLeft(rover);
          break;
      }
    } else {
      console.log("Command not valid, please choose between \(f\)orward, \(b\)ackward, \(r\)ight or \(l\)eft");
    }
  }
}

