class Rotation {
    constructor(startAngle = 0) {
        this.currentAngle = startAngle;
    }
    
    rotate(rotationDegree = 60) {
        var currentAngle = this.currentAngle + rotationDegree;
        if (currentAngle >= 360) {
            currentAngle -= 360;
        }
        this.currentAngle = currentAngle;
        console.log("Current angle is = " + this.currentAngle + " degrees");
    }
}

export default Rotation;

