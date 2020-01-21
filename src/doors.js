// doors
class CentralDoor {

    constructor(initialDoorRotation) {
        this.initialDoorRotation = initialDoorRotation;
    }

    openDoor(rotation) {
        console.log("Central door is now open.")
        if (this.initialDoorRotation - rotation.currentAngle - rotation.moonAngle == 0) {
            console.log("Door is usable.")
        } else {
            console.log("Door is not usable, you are met by a brick wall.")
        }
    }

}

class OuterDoor {

    constructor(initialDoorRotation, outerDoorNumber) {
        this.initialDoorRotation = initialDoorRotation;
        this.outerDoorNumber = outerDoorNumber;
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

    constructor(trapDoorNumber) {
        this.trapDoorNumber = trapDoorNumber;
    }

    openDoor() {
        console.log("Trap door is open")
    }

}

export {
    CentralDoor,
    OuterDoor,
    TrapDoor
}