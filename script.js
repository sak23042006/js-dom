// Challenge 1.1: Access the HTML section element with the id "container" using the getElementbyId method and change the background color of it.

var bg = document.getElementById('container');
bg.style.backgroundColor = 'grey';

// Challenge 1.2: Access the div with the id "header" using the querySelector method and change the text content to "These are the DOM Methods".

var text = document.querySelector('#header');
text.textContent = 'These are the DOM Methods';

// Challenge 1.3: Access all the elements with the class "dom-methods" using the method getElementsByClassName and change the text color to "red". Hint: Use for loop

var method = document.getElementsByClassName('dom-methods');
for (i = 0; i < method.length; i++) {
  method[i].style.color = 'red';
}

// Challenge 1.4: Access all the elements with the class "dom-methods" using the method querySelectorAll and change the font size to 20px". Hint: Use for loop

var font = document.querySelectorAll('.dom-methods');
for (i = 0; i < font.length; i++) {
  font[i].style.fontSize = '20px';
}

// Challenge 2.1: Create a new element <div> and append it to the body tag and append the string "Division" inside the newly created <div> using textContent.

var divison = document.createElement('div');
divison.textContent = 'Divison';
document.body.append(divison);

// Challenge 2.2: Add id "main" using setAttribute method to the newly created <div> element. Print the id "main" using the getAttribute method.

divison.setAttribute('id', 'main');

console.log(divison.getAttribute('id'));

// Challenge 2.3: Add the text content "This is a division" inside the div with id "main" using innerHTML.

var mainElement = document.getElementById('main');

mainElement.textContent = 'This is a division';

// Challenge 2.4: Create a new element <p> and append it to the div with id "main" and append the string "This is a paragraph tag" inside the <p> tag using the innerText.

const pElement = document.createElement('p');

pElement.innerText = 'This is a paragraph tag';

mainElement.append(pElement);

// Hint: First access the id "main" using document.getElementById and then append the new element <p> tag.

// Challenge 2.5: Remove the class "footer" using classList and add the new class "dom-method-footer". If your footer text color changes to aqua blue you are right.

const footerElement = document.querySelector('.footer');

footerElement.classList.remove('footer');

footerElement.classList.add('dom-method-footer');

// Challenge 2.6: Set the color of the <p> text as red using DOM manipulation.

pElement.style.color = 'red';

// Challenge 2.7: Remove the div with a class "copyright" using the removeAttribute method.

const crElement = document.querySelector('.copyright');

crElement.removeAttribute('class');
