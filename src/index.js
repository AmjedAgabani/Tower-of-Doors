import _ from 'lodash';
import rotation from './rotate.js'
import centralDoor from './doorsNew.js';

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
var doors = new centralDoor();

function openCentralDoor() {
  const doorOpenText = document.createElement('div');
  const doorOpenButton = document.createElement('button');

  doorOpenText.innerHTML = _.join(['Central', 'Door'], ' ');
  doorOpenButton.innerHTML = 'click to open door';
  doorOpenButton.onclick = () => doors.openDoor(towerRotation);
  doorOpenText.appendChild(doorOpenButton);

  return doorOpenText;
}

let doorOpenText = openCentralDoor();
document.body.appendChild(doorOpenText);

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
    document.body.removeChild(doorOpenText);
    doorOpenText = openCentralDoor(); // Re-render the "component" to update the click handler
    document.body.appendChild(doorOpenText);
  })
}
