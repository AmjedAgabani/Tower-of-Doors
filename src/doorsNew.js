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

export default CentralDoor;