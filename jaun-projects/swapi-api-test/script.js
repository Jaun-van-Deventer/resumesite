const name = document.getElementById("name");
const height = document.getElementById("height");
const hair = document.getElementById("hair-color");
const eye = document.getElementById("eye-color");
const weight = document.getElementById("weight");
const birth = document.getElementById("birth-year");
const gender = document.getElementById("gender");

const button = document.querySelector(".generate");
button.addEventListener("click", (e) => {
    e.preventDefault();
        name.innerHTML = '<em>Loading...</em>'
        height.innerHTML = '<em>Loading...</em>'
        hair.innerHTML = '<em>Loading...</em>'
        eye.innerHTML = '<em>Loading...</em>'
        weight.innerHTML = '<em>Loading...</em>'
        birth.innerHTML = '<em>Loading...</em>'
        gender.innerHTML = '<em>Loading...</em>'

  const personNum = Math.ceil(Math.random() * 83);
    fetch(`https://swapi.dev/api/people/${personNum}/`)
        .then((response) => response.json())
        .then((character) => {
            name.innerHTML = character["name"];
            height.innerHTML = character["height"];
            hair.innerHTML = character["hair_color" ];
            eye.innerHTML = character["eye_color"];
            weight.innerHTML = character["mass"];
            birth.innerHTML = character["birth_year"];
            gender.innerHTML = character["gender"];
    });
});
