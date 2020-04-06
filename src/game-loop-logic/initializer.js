var { MoonPosition, TowerRotation } = require('../rotate.js'); // import rotiation logic
var { TowerFactory } = require('../tower-entities/towerfactory.js'); // import tower

var startingFloor = 0;
var startingAngle = 0;

// Tower creation
var towerFactory = new TowerFactory();
var x = towerFactory.create();

console.log(x);

// Moon initialization 
var moonAngle = new MoonPosition(startingAngle);

// Tower rotation initialization
var towerRotation = new TowerRotation(startingAngle);

module.exports = {
    x: x,
    moonAngle: moonAngle,
    towerRotation: towerRotation
}