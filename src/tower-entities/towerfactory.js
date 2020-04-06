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

        function createTrapDoors(numberOfDoors) {
            if (numberOfDoors == 4) {
                var trapDoors = [
                    new TrapDoor(1),
                    new TrapDoor(2),
                    new TrapDoor(3),
                    new TrapDoor(4)
                ]
            }
            else if (numberOfDoors == 3) {
                var trapDoors = [
                    new TrapDoor(1),
                    new TrapDoor(2),
                    new TrapDoor(3)
                ]
            }
            else if (numberOfDoors == 2) {
                var trapDoors = [
                    new TrapDoor(1),
                    new TrapDoor(2)
                ]
            }
            else if (numberOfDoors == 1) {
                var trapDoors = [
                    new TrapDoor(1)
                ]
            } else {
                throw error;
            }
            return trapDoors;
        }

        function createPlayer(numberOfPlayers) {
            var i;
            for (i = 0; i < numberOfPlayers; i++) {
                new Player(i, "Alpha");
            }
        }

        function createRoute(routeNumber, doorA, doorB) {
            var route = new Route(routeNumber);

            route.setDoors(doorA, doorB);
            doorA.setRoute(route);
            doorB.setRoute(route);

            return route;
        }

        var floors = [
            new Floor(1, createPlayer(), createOuterDoors(), createTrapDoors(2), createCentralDoors()),
            new Floor(2, [], createOuterDoors(), createTrapDoors(2), []),
            new Floor(3, [], createOuterDoors(), createTrapDoors(4), []),
            new Floor(4, [], createOuterDoors(), createTrapDoors(3), []),
            new Floor(5, [], createOuterDoors(), createTrapDoors(2), createCentralDoors())
        ]

        var routes = [
            createRoute(1, floors[4].getCentralDoor(), floors[0].getCentralDoor()),
            createRoute(2, floors[4].getTrapDoor(1), floors[3].getTrapDoor(1)),
            createRoute(3, floors[4].getTrapDoor(2), floors[2].getTrapDoor(2)),

            createRoute(4, floors[3].getTrapDoor(2), floors[1].getTrapDoor(2)),
            createRoute(5, floors[3].getTrapDoor(3), floors[2].getTrapDoor(1)),
            
            createRoute(6, floors[2].getTrapDoor(3), floors[1].getTrapDoor(1)),
            createRoute(7, floors[2].getTrapDoor(4), floors[0].getTrapDoor(2)),
            
            createRoute(8, floors[1].getTrapDoor(1), floors[0].getTrapDoor(1)),
        ]

        return new Tower(5, floors, routes);

    }

}

export {
    TowerFactory
}