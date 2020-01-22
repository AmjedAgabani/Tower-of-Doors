class Floor {

    constructor(floorNumber, outerDoors, trapDoors, centralDoors) {
        this.centralDoors = centralDoors;
        this.floorNumber = floorNumber;
        this.outerDoors = outerDoors;
        this.trapDoors = trapDoors;
    }

    getOuterDoor(doorNumber) {
        var selectedDoor = this.outerDoors.find(outerDoor => outerDoor.doorNumber === doorNumber);
        return selectedDoor;
    }

}

export default Floor;