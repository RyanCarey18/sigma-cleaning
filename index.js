let scott = "taco";
function scotts() {
  if (scott === "taco") {
    return console.log(false);
  } else return console.log(true);
}

let tacos = ["hello", "yo", "taco", "dog"];

function taco() {
  for (let i = 0; i < tacos.length; i++) {
    let element = tacos[i];
    element = element.concat("yellow");
    console.log(element);
  }
}

taco();
scotts();

asdfasdfasdf dfasdf asdfasdf