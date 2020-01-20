// doors
class CentralDoor {

    openDoor(rotation) {
        console.log("Central door is now open.")
        if (rotation.currentAngle !== rotation.correctAngle) {
            console.log("Door is not usable, you are met by a brick wall.")
        } else {
            console.log("Door is usable.")
        }
    }

}

class OuterDoor {

    constructor(initialDoorRotation, outerDoorNumber) {
        this.initialDoorRotation = initialDoorRotation;
        this.outerDoorNumber = outerDoorNumber;
    }

    openDoor() {
        console.log("Outer door is open")
        if (this.initialDoorRotation - towerRotation - moonAngle == 0) {
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