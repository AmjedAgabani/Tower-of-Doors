import _ from 'lodash';
import rotation from './rotate.js'

var doors = require('./doorsNew.js');

// End Turn & rotate
var towerRotation = new rotation();

function rotateButton() {
  const instructionText = document.createElement('div');
  const endTurnButton = document.createElement('button');

  instructionText.innerHTML = _.join(['End', 'Turn'], ' ');
  endTurnButton.innerHTML = 'click for next turn';
  endTurnButton.onclick = () => towerRotation.rotate();
  instructionText.appendChild(endTurnButton);

  return instructionText;
}

let instructionText = rotateButton();
document.body.appendChild(instructionText);

// Central Door
var centralDoorInstance = new doors.CentralDoor();

function openCentralDoor() {
  const doorOpenText = document.createElement('div');
  const doorOpenButton = document.createElement('button');

  doorOpenText.innerHTML = _.join(['Central', 'Door'], ' ');
  doorOpenButton.innerHTML = 'click to open door';
  doorOpenButton.onclick = () => centralDoorInstance.openDoor(towerRotation);
  doorOpenText.appendChild(doorOpenButton);

  return doorOpenText;
}

let centralDoorOpenText = openCentralDoor();
document.body.appendChild(centralDoorOpenText);

// Outer Door
var outerDoorInstance = new doors.OuterDoor();

function openOuterDoor() {
  const doorOpenText = document.createElement('div');
  const doorOpenButton = document.createElement('button');

  doorOpenText.innerHTML = _.join(['Outer', 'Door'], ' ');
  doorOpenButton.innerHTML = 'click to open door';
  doorOpenButton.onclick = () => outerDoorInstance.openDoor(towerRotation);
  doorOpenText.appendChild(doorOpenButton);

  return doorOpenText;
}

let outerDoorOpenText = openOuterDoor();
document.body.appendChild(outerDoorOpenText);

// Trap Door
var trapDoorInstance = new doors.TrapDoor();

function openTrapDoor() {
  const doorOpenText = document.createElement('div');
  const doorOpenButton = document.createElement('button');

  doorOpenText.innerHTML = _.join(['Trap', 'Door'], ' ');
  doorOpenButton.innerHTML = 'click to open door';
  doorOpenButton.onclick = () => trapDoorInstance.openDoor();
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
  module.hot.accept('./doorsNew.js', function () {
    console.log('Accepting the updated doorsNew module!');
    document.body.removeChild(centralDoorOpenText);
    centralDoorOpenText = openCentralDoor(); // Re-render the "component" to update the click handler
    document.body.appendChild(centralDoorOpenText);
  })
}
