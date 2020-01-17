import Floor from "./floors";

class Tower {

    constructor(numberOfFloors) {
        this.numberOfFloors = numberOfFloors;
    }

    spawnFloors(){
        for(var i = 1; i <= this.numberOfFloors; i++){
            var floorInstance = new Floor(i);
        }
    }

}

export default Tower;