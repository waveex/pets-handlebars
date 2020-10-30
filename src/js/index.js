import '../scss/main.scss';
const petsData = [
  {
    name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2020,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
  },
  {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2019,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];
function foods(foods) {
  return `
      <h4>Favorite foods:</h4>
      <ul class = "foods-list">
      ${foods.map((food) => `<li>${food} </li>` ).join(" ")}
      </ul>
      `
     }
function age(birthYear) {

  let calculatedAge = new Date().getFullYear() - birthYear;
  if (calculatedAge == 1) {
    return '1 year old '
  } else if (calculatedAge == 0) {
    return 'less then 1 year'
  } else {
    return `${calculatedAge} years old`
  }


}
function petTemplate(pet) {
  return `
    <div class="animal">
    <img class="pet-photo" src = "${pet.photo}"
    <h2 class="pet-name">${pet.name}
     <span class="spiecies">(${pet.species})</span></h2>
    <p>Age:<strong> ${age(pet.birthYear)}</strong></p>


       ${pet.favFoods ? foods(pet.favFoods) : ''}
        </div>
    `
}

document.getElementById("app").innerHTML = `
<h1 class= "pets-title">pets (${petsData.length}) results</h1>
${petsData.map(petTemplate).join("  ")}
<p class= "footer"> These ${petsData.length} were added recently, chceck back soon for updates.
</p>
`;
// backtick - Tamplate litelrals, nie wymaga <br/>