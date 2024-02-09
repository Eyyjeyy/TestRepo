// Create footer element
const footer = document.createElement('footer');
footer.id = 'footer';

// Create container div
const container = document.createElement('div');
container.classList.add('container', 'footer-bottom', 'clearfix');

// Create copyright div
const copyright = document.createElement('div');
copyright.classList.add('copyright');
copyright.innerHTML = '&copy; Copyright <strong><span>2023 Techforce Solutions Inc.</span></strong> All Rights Reserved.';

// Create credits div
const credits = document.createElement('div');
credits.classList.add('credits');
credits.innerHTML = 'Designed by <a href="https://unleash.ph/">Unleash</a>';

// Append elements to their respective parent elements
container.appendChild(copyright);
container.appendChild(credits);
footer.appendChild(container);

// Append footer to the document body or any other parent element
document.body.appendChild(footer);
