class Floor {

    constructor(floorNumber, outerDoors, trapDoors, centralDoors) {
        this.centralDoors = centralDoors;
        this.floorNumber = floorNumber;
        this.outerDoors = outerDoors;
        this.trapDoors = trapDoors;
    }

    getCentralDoor() {
        var selectedDoor = this.centralDoors.find(this.centralDoor);
        return selectedDoor;
    }

    getOuterDoor(doorNumber) {
        var selectedDoor = this.outerDoors.find(outerDoor => outerDoor.doorNumber === doorNumber);
        return selectedDoor;
    }

    getTrapDoor(doorNumber) {
        var selectedDoor = this.trapDoors.find(trapDoors => trapDoors.doorNumber === doorNumber);
        return selectedDoor;
    }

}

export default Floor;