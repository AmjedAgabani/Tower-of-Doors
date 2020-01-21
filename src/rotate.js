class MoonPosition {

    constructor(moonAngle) {
        this.moonAngle = moonAngle;
    }

}

class TowerRotation {
    constructor(startAngle) {
        this.currentAngle = startAngle
    }

    rotate(rotationDegree = 60) {
        var currentAngle = this.currentAngle + rotationDegree;
        if (currentAngle >= 360) {
            currentAngle -= 360;
        }
        this.currentAngle = currentAngle;
        console.log("Current tower rotation is = " + this.currentAngle + " degrees");
    }
}

export {
    MoonPosition,
    TowerRotation
}