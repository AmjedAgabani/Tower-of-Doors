import { OuterDoor, TrapDoor, CentralDoor } from "./doors";
import Floor from "./floors";
import Tower from "./tower";

class TowerFactory {

    create() {

        var outerDoors = [
            new OuterDoor(0, 1),
            new OuterDoor(60, 2),
            new OuterDoor(120, 3),
            new OuterDoor(180, 4),
            new OuterDoor(240, 5),
            new OuterDoor(300, 6)
        ]

        var trapDoors = [
            new TrapDoor(1),
            new TrapDoor(2)
        ]

        var centralDoors = [
            new CentralDoor(0)
        ]

        // return new Floor(1, outerDoors, trapDoors, centralDoors);

        var floors = [
            new Floor(1, outerDoors, trapDoors, centralDoors),
            new Floor(2, outerDoors, trapDoors, centralDoors),
            new Floor(3, outerDoors, trapDoors, centralDoors),
            new Floor(4, outerDoors, trapDoors, centralDoors),
            new Floor(5, outerDoors, trapDoors, centralDoors)
        ]

        // console.log(floors)

        return new Tower(5, floors);


    }

}

export {
    TowerFactory
}