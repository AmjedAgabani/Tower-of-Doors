import _ from 'lodash';
import printMe from './print.js';
import rotation from './rotate.js'
import centralDoor from './doorsNew.js';

// template

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  })
}

// amjed code

// End Turn & rotate
var towerRotation = new rotation();

console.log(towerRotation);

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


if (module.hot) {
  module.hot.accept('./rotate.js', function () {
    console.log('Accepting the updated rotation module!');
    document.body.removeChild(instructionText);
    instructionText = rotateButton(); // Re-render the "component" to update the click handler
    document.body.appendChild(instructionText);
  })
}

// Central Door

var doors = new centralDoor();

console.log(doors);

function openCentralDoor() {
  const doorOpenText = document.createElement('div');
  const doorOpenButton = document.createElement('button');

  doorOpenText.innerHTML = _.join(['Central', 'Door'], ' ');

  doorOpenButton.innerHTML = 'click to open door';
  console.log(doors.openDoor)
  doorOpenButton.onclick = () => doors.openDoor();

  doorOpenText.appendChild(doorOpenButton);

  return doorOpenText;

}

let doorOpenText = openCentralDoor();
document.body.appendChild(doorOpenText);

if (module.hot) {
  module.hot.accept('./doorsNew.js', function () {
    console.log('Accepting the updated doorsNew module!');
    document.body.removeChild(doorOpenText);
    doorOpenText = openCentralDoor(); // Re-render the "component" to update the click handler
    document.body.appendChild(doorOpenText);
  })
}
