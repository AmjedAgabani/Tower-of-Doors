import _ from 'lodash';
import printMe from './print.js';
import rotation from './rotate.js'

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

var myRotation1 = new rotation();

function rotateButton() {
  const instructionText = document.createElement('div');
  const rotateButton = document.createElement('button');

  instructionText.innerHTML = _.join(['Tower', 'of', 'Doors'], ' ');

  rotateButton.innerHTML = 'click to rotate';
  rotateButton.onclick = () => myRotation1.rotate();

  instructionText.appendChild(rotateButton);

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
