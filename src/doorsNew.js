// doors
class CentralDoor {
    constructor() {
        this.open = false;
        this.usable = false;
    }

    openDoor() {
        this.open = true;
        console.log("Door is now open.")
        if (currentAngle !== correctAngle) {
            console.log("Door is not usable, you are met by a brick wall.")
        } else {
            this.usable = true;
            console.log("Door is usable.")
        }
    }
}

export default CentralDoor;