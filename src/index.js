import _ from 'lodash';
const initializer = require('./game-loop-logic/initializer');
const userInterface = require('./userInterace');

userInterface();

function rotateButton() {
  const instructionText = document.createElement('div');
  const endTurnButton = document.createElement('button');

  instructionText.innerHTML = _.join(['End', 'Turn'], ' ');
  endTurnButton.innerHTML = 'click for next turn';
  endTurnButton.onclick = () => initializer.towerRotation.rotate();
  instructionText.appendChild(endTurnButton);

  return instructionText;
}

let instructionText = rotateButton();
document.body.appendChild(instructionText);

// Central Door
function openCentralDoor() {
  const doorOpenText = document.createElement('div');
  const doorOpenButton = document.createElement('button');

  doorOpenText.innerHTML = _.join(['Central', 'Door'], ' ');
  doorOpenButton.innerHTML = 'click to open door';
  doorOpenButton.onclick = () => initializer.x.floors[0].getCentralDoor().openDoor(initializer.towerRotation, initializer.moonAngle);
  doorOpenText.appendChild(doorOpenButton);

  return doorOpenText;
}

let centralDoorOpenText = openCentralDoor();
document.body.appendChild(centralDoorOpenText);

// Outer Door
function openOuterDoor() {
  const doorOpenText = document.createElement('div');
  const doorOpenButton = document.createElement('button');

  doorOpenText.innerHTML = _.join(['Outer', 'Door'], ' ');
  doorOpenButton.innerHTML = 'click to open door';
  doorOpenButton.onclick = () => initializer.x.floors[0].getOuterDoor(2).openDoor(initializer.towerRotation, initializer.moonAngle);
  doorOpenText.appendChild(doorOpenButton);

  return doorOpenText;
}

let outerDoorOpenText = openOuterDoor();
document.body.appendChild(outerDoorOpenText);

// Trap Door
function openTrapDoor() {
  const doorOpenText = document.createElement('div');
  const doorOpenButton = document.createElement('button');

  doorOpenText.innerHTML = _.join(['Trap', 'Door'], ' ');
  doorOpenButton.innerHTML = 'click to open door';
  doorOpenButton.onclick = () => initializer.x.floors[0].getTrapDoor(2).openDoor();
  doorOpenText.appendChild(doorOpenButton);

  return doorOpenText;
}

let trapDoorOpenText = openTrapDoor();
document.body.appendChild(trapDoorOpenText);


// hot module reload

if (module.hot) {
  module.hot.accept('./rotate.js', function () {
    console.log('Accepting the updated rotation module!');
    document.body.removeChild(instructionText);
    instructionText = rotateButton(); // Re-render the "component" to update the click handler
    document.body.appendChild(instructionText);
  })
  module.hot.accept('./tower-entities/doors.js', function () {
    console.log('Accepting the updated doors module!');
    document.body.removeChild(centralDoorOpenText);
    centralDoorOpenText = openCentralDoor(); // Re-render the "component" to update the click handler
    document.body.appendChild(centralDoorOpenText);
  })
}
