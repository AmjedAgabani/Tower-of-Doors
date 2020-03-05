import { OuterDoor, TrapDoor, CentralDoor } from "./doors";
import Floor from "./floors";
import Tower from "./tower";
import Player from "./player";
import Route from "./route";

class TowerFactory {

    create() {

        function createCentralDoors(routeNumber) {
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

        function createTrapDoors(numberOfDoors, routeNumber) {
            if (numberOfDoors == 2) {
                var trapDoors = [
                    new TrapDoor(1),
                    new TrapDoor(2)
                ]
                return trapDoors;
            } else {
                var trapDoors = [
                    new TrapDoor(1)
                ]
                return trapDoors;
            }
        }

        function createPlayer(numberOfPlayers) {
            var i;
            for (i = 0; i < numberOfPlayers; i++) {
                new Player(i, "Alpha");
            }
        }

        var floors = [
            new Floor(1, createPlayer(), createOuterDoors(), createTrapDoors(2), createCentralDoors()),
            new Floor(2, [], createOuterDoors(), createTrapDoors(1), []),
            new Floor(3, [], createOuterDoors(), createTrapDoors(2), []),
            new Floor(4, [], createOuterDoors(), createTrapDoors(1), []),
            new Floor(5, [], createOuterDoors(), createTrapDoors(2), createCentralDoors())
        ]

        var route = new Route(1)

        route.setDoors(floors[0].getCentralDoor(), floors[4].getCentralDoor())

        floors[0].getCentralDoor().setRoute(route);
        floors[4].getCentralDoor().setRoute(route);

        // new Route(1)

        return new Tower(5, floors);

    }

}

export {
    TowerFactory
}