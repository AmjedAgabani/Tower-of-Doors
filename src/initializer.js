import { OuterDoor } from "./doors"

function createOuterDoors(numberOfOuterDoors) {
    for (var doorNumber = 1; doorNumber <= numberOfOuterDoors; doorNumber++) {
        new OuterDoor(doorNumber);
    }
}