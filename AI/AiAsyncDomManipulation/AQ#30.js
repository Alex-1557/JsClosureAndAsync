//3. Animating an element's position:

function animateElement(element, targetX) {
  let currentX = parseInt(element.style.left || 0); // get current position or start at 0.

  function step() {
    currentX += (targetX - currentX) * 0.1; // Move 10% closer to target
    element.style.left = currentX + 'px';

    if (Math.abs(targetX - currentX) > 1) {
      // Stop animation once close enough
      requestAnimationFrame(step); // Using requestAnimationFrame for smooth updates
    }
  }

  requestAnimationFrame(step); // Start the animation loop.
}

const animatedElement = document.getElementById('animatedElement');
animateElement(animatedElement, 200); // Animate to position 200px from left
