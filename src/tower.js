import Floor from "./floors";

class Tower {

    constructor(numberOfFloors, floors) {
        this.numberOfFloors = numberOfFloors;
        this.floors = floors;
    }

    spawnFloors(){
        for(var i = 1; i <= this.numberOfFloors; i++){
            var floorInstance = new Floor(i);
        }
    }

}

export default Tower;