// doors
class CentralDoor {

    openDoor(rotation) {
        console.log("Door is now open.")
        if (rotation.currentAngle !== 120) {
            console.log("Door is not usable, you are met by a brick wall.")
        } else {
            console.log("Door is usable.")
        }
    }

    useDoor() {
        // function to travel through levels
    }
}

class OuterDoor {

    openDoor(rotation) {
        console.log("Door is open")
        if (rotation.currentAngle !== rotation.correctAngle) {
            console.log("You can see a field of grass.")
        } else {
            console.log("You can see a field of grass lit underneath the moon.")
        }
    }

}

module.exports = {
    CentralDoor: CentralDoor,
    OuterDoor: OuterDoor
}