// doors
class CentralDoor {

    constructor(initialDoorRotation) {
        this.initialDoorRotation = initialDoorRotation;
    }

    openDoor(towerRotation, moonPosition) {
        console.log("Central door is now open.")
        if (this.initialDoorRotation - towerRotation.currentAngle - moonPosition.moonAngle == 0) {
            console.log("Door is usable.")
        } else {
            console.log("Door is not usable, you are met by a brick wall.")
        }
    }

    setRoute(route) {
        this.route = route;
    }

}

class OuterDoor {

    constructor(initialDoorRotation, doorNumber) {
        this.initialDoorRotation = initialDoorRotation;
        this.doorNumber = doorNumber;
    }

    openDoor(towerRotation, moonPosition) {
        console.log("Outer door is open")
        if (this.initialDoorRotation - towerRotation.currentAngle - moonPosition.moonAngle === 0) {
            console.log("You can see a field of grass lit underneath the moon.")
        } else {
            console.log("You can see a field of grass.")
        }
    }

}

class TrapDoor {

    constructor(doorNumber) {
        this.doorNumber = doorNumber;
    }

    openDoor() {
        console.log("Trap door is open")
    }

    setRoute(route) {
        this.route = route;
    }

}

export {
    CentralDoor,
    OuterDoor,
    TrapDoor
}