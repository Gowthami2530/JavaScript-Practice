// Switch Concept
// >,<,<=,>=,==,===,!=,!==
// we will take an example dice 1-6

let dice = 6;

switch (dice) {
    case 1:
        console.log("You have got one");
        break;
    case 2:
        console.log("You have got Twp");
        break;
    case 3:
        console.log("You have got Three");
        break;
    case 4:
        console.log("You have got Four");
        break;
    case 5:
        console.log("You have got Five");
        break;
    case 6:
        console.log("You have got Six");
        break;

    default:
        console.log("You didnot roll the dice")
        break;
}