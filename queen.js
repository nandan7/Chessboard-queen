var direction = window.prompt("enter the direction for 1st queen");
var steps = window.prompt("enter number of steps");
var x = parseInt(steps);
// Checkpoint 1 | Creating the queen object
let queen1 = {
    pos1: {
        r: 0,
        c: 4,
    },
    direction: 'S'
};
// Checkpoint 2 | Turning the queen
// Checkpoint 3 | Moving the queen

switch (direction) {
    case 'N':
        console.log("going NORTH");
        break;
    case 'S':
        console.log("going SOUTH");
        break;
    case 'E':
        console.log("going EAST");
        break;
    case 'W':
        console.log("going WEST");
        break;
    case 'NE':
        console.log("going NORTHEAST");
        break;
    case 'SW':
        console.log("going SOUTHWEST");
        break;
    case 'SE':
        console.log("going SOUTHEAST");
        break;
    case 'NW':
        console.log("going NORTHWEST");
        break;

}

// Checkpoint 4 | Jump move the queen

switch (direction) {
    case 'N': queen1.pos1.r -= x

    case 'S': queen1.pos1.r += x

    case 'E': queen1.pos1.c += x

    case 'W': queen1.pos1.c -= x

    case 'NE': queen1.pos1.r -= x, queen1.pos1.c += x

    case 'NW': queen1.pos1.r -= x, queen1.pos1.c -= x

    case 'SE': queen1.pos1.r += x, queen1.pos1.c += x

    case 'SW': queen1.pos1.r += x, queen1.pos1.c -= x

}
// Checkpoint 5 |  Tracking the position
// Bonus 1 - Gotta keep her in the battle!

if (queen1.pos1.r <= 7 && queen1.pos1.c <= 7) {
    console.log("1st queen is safe");
}
else {
    console.log("1st queen is out of the board");
}

var whereabouts = console.log(queen1.pos1.r, queen1.pos1.c);

// Bonus 3 - How about multiple queens?

var direction = window.prompt("enter the direction for 2nd queen");
var steps = window.prompt("enter number of steps");
var x = parseInt(steps);
// Checkpoint 1 | Creating the queen object
let queen2 = {
    pos2: {
        r: 0,
        c: 4
    },
    direction: 'S'
};
// Checkpoint 2 | Turning the 
// Checkpoint 3 | Moving the queen

switch (direction) {
    case 'N':
        console.log("going NORTH");
        break;
    case 'S':
        console.log("going SOUTH");
        break;
    case 'E':
        console.log("going EAST");
        break;
    case 'W':
        console.log("going WEST");
        break;
    case 'NE':
        console.log("going NORTHEAST");
        break;
    case 'SW':
        console.log("going SOUTHWEST");
        break;
    case 'SE':
        console.log("going SOUTHEAST");
        break;
    case 'NW':
        console.log("going NORTHWEST");
        break;

}
// Checkpoint 4 | Jump move the queen

switch (direction) {
    case 'N': queen2.pos2.r -= x

    case 'S': queen2.pos2.r += x

    case 'E': queen2.pos2.c += x

    case 'W': queen2.pos2.c -= x

    case 'NE': queen2.pos2.r -= x, queen2.pos2.c += x

    case 'NW': queen2.pos2.r -= x, queen2.pos2.c -= x

    case 'SE': queen2.pos2.r += x, queen2.pos2.c += x

    case 'SW': queen2.pos2.r += x, queen2.pos2.c -= x

}
// Checkpoint 5 |  Tracking the position
// Bonus 1 - Gotta keep her in the battle!

if (queen2.pos2.r <= 7 && queen2.pos2.c <= 7) {
    console.log("2nd queen is safe");
}
else {
    console.log("2nd queen is out of the board");
}
if (queen1.pos1.r == queen2.pos2.r && queen1.pos1.c == queen2.pos2.c) {
    console.log("ERROR-1ST QUEEN IS IN THAT POSITION");
}
var whereabouts = console.log(queen2.pos2.r, queen2.pos2.c);