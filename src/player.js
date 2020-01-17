class Player {

    //number of of floors comes from tower.js
    constructor(numberOfFloors) {
        this.currentFloor = numberOfFloors;
    }

    // change comes from doors.js
    // direction should come from a UI of some sort
    moveFloors(change, direction) {
        if (direction == ascend) {
            var newFloor = this.floor + change;
            console.log(direction + "ing by " + change + " floors.")
        } else if (direction == descend) {
            var newFloor = this.floor - change;
            console.log(direction + "ing by " + change + " floors.")
        } else {
            console.log("You cannot " + direction + " by " + change + " floors.")
            throw error;
        }
        this.currentFloor = newFloor;
    }
}