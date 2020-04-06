class Route {

    constructor(routeNumber) {
        this.routeNumber = routeNumber;
    }

    setDoors(doorA, doorB) {
        this.doorA = doorA;
        this.doorB = doorB;
    }

    useRoute(selectedDoor) {
        if (selectedDoor == this.doorA) {
            return this.doorB;
        } else if (selectedDoor == this.doorB) {
            return this.doorA;
        } else {
            throw error;
        }
    }

}

export default Route;