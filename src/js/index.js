import '../scss/main.scss';
// ASYNCHRONOUS
// JAVASCRIPT
//  AND
// XML
const btn = document.querySelector('.button');
const animalCountainer = document.querySelector('.animal-info')
let pageCounter = 1;
btn.addEventListener("click", function () {
  let ourRequest = new XMLHttpRequest();
  ourRequest.open('GET'/* GET or POST */, 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  ourRequest.onload = function () {
  if( ourRequest.status >= 200 && ourRequest.status < 500)
    {
      let ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  } else
  {
    alert("we connected to the server, but it returned an error");
  }
  }
  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");

  }
})

function renderHTML(data) {

  let htmlString = " ";
  for (let i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + "likes to eat "
    for (let ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }
    htmlString += "and dislikes ";
     for (let ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }
    htmlString += ".</p>"


  }


  animalCountainer.insertAdjacentHTML('beforeend', htmlString);

}
