import { OuterDoor, TrapDoor, CentralDoor } from "./doors";
import Floor from "./floors";
import Tower from "./tower";

class TowerFactory {

    create() {

        function createCentralDoors() {
            var centralDoors = [
                new CentralDoor(0)
            ]
            return centralDoors;
        }

        function createOuterDoors() {
            var outerDoors = [
                new OuterDoor(0, 1),
                new OuterDoor(60, 2),
                new OuterDoor(120, 3),
                new OuterDoor(180, 4),
                new OuterDoor(240, 5),
                new OuterDoor(300, 6)
            ]
            return outerDoors;
        }


        function createTrapDoors(numberOfDoors) {
            if (numberOfDoors == 2) {
                var trapDoors = [
                    new TrapDoor(1),
                    new TrapDoor(2)
                ]
            } else {
                var trapDoors = [
                    new TrapDoor(1)
                ]
            }
            return trapDoors;
        }

        var floors = [
            new Floor(1, createOuterDoors(), createTrapDoors(2), createCentralDoors()),
            new Floor(2, createOuterDoors(), createTrapDoors(1)),
            new Floor(3, createOuterDoors(), createTrapDoors(2)),
            new Floor(4, createOuterDoors(), createTrapDoors(1)),
            new Floor(5, createOuterDoors(), createTrapDoors(2), createCentralDoors())
        ]

        return new Tower(5, floors);

    }

}

export {
    TowerFactory
}