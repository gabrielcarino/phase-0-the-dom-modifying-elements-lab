// Write your code here!
document.querySelector('main').remove();
const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.textContent = "Gabe is the champion";
document.body.append(newHeader);