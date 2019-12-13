// centraldoor

var centralDoor = function () {
    this.open = false;
    this.usable = false;
}

centralDoor.prototype.open = function () {
    this.open = true;
    console.log("Door is now open.")
    if (currentAngle !== 360) {
        this.usable = true;
        console.log("Door is usable.")
    } else {
        console.log("Door is not usable, you are met by a brick wall.")
    }
}

// outerdoor

var outerDoor = function () {
    this.moonVisible = false;
    this.open = false;
}

outerDoor.prototype.open = function () {
    this.open = true;
    console.log("Door is open")
    moonVisible();
}

outerDoor.prototype.moonVisible = function () {
    if (currentAngle = correctAngle) {
        this.moonVisible = true
        console.log("You can see a field of grass lit underneath the moon.")
    } else {
        console.log("You can see a field of grass.")
    }
}

// trapdoor

var trapDoor = function () {
    this.open = false;
    this.name = name;
}

trapDoor.prototype.open = function () {
    this.open = true;
    console.log("Trapdoor one is open")
}

trapDoor.prototype.name = function () {
    // figure out how to name the door depending on the level its on
}

module.exports = {
    centralDoor,
    outerDoor,
    trapDoor
}