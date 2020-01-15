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

    openDoor(rotation) {
        console.log("Outer door is open")
        if (rotation.currentAngle !== rotation.correctAngle) {
            console.log("You can see a field of grass.")
        } else {
            console.log("You can see a field of grass lit underneath the moon.")
        }
    }

}

class TrapDoor {

    openDoor() {
        console.log("Trap door is open")
    }

}

export {
    CentralDoor,
    OuterDoor,
    TrapDoor
}