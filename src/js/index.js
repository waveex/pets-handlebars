import '../scss/main.scss';
const petsData = [
    {
      name: "Purrsloud",
      species: "Cat",
      favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
      birthYear: 2017,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      name: "Barksalot",
      species: "Dog",
      birthYear: 2008,
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
  function age (birthYear) {

      return new Date().getFullYear() - birthYear;


  }
  function petTemplate(pet) {
    return `
    <div class="animal">
    <img class="pet-photo" src = "${pet.photo}"
    <h2 class="pet-name">${pet.name}
     <span class="spiecies">(${pet.species})
 <p>Age:<strong> ${age(pet.birthYear)}</strong></p>
     </span></h2>

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