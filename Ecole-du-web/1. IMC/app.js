const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];
const btn = document.getElementsByTagName("button");
const result = document.getElementById("result");
const message = document.getElementById("message");

btn[0].addEventListener("click", calculateBMI);

function calculateBMI(e) {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  e.preventDefault();
  if (height <= 0 || !height || weight <= 0 || !weight) {
    manageError();
    return;
  }
  let BMI = (weight / ((height / 100) * (height / 100))).toFixed(1);
  showResult(BMI);
}

function manageError() {
  result.textContent = "Whoooops !!!";
  result.style.color = "black";
  message.textContent = "Entrer des valeurs de taille et de poids correctes";
}

function showResult(BMI) {
  result.textContent = BMI;
 /*  for (let i = 0; i < BMIData.length -1; i++) {
    if (BMI >= BMIData[i].range[0] && BMI <= BMIData[i].range[1]) {
      message.textContent = "Résultat : " + BMIData[i].name;
      result.style.color = BMIData[i].color;
    }      
  }
  if (BMI > BMIData.at(-1).range) {
    message.textContent = "Résultat : " + BMIData.at(-1).name;
    result.style.color = BMIData.at(-1).color;
  }  */
  // the for loop + if conditions could have been replaced by :
  const resultData = BMIData.find(x => {
    if (BMI >= x.range[0] && BMI <= x.range[1]) return x;
    else if (BMI > x.range && typeof x.range === "number") return x;
  })
  message.textContent = "Résultat : " + resultData.name;
  result.style.color = resultData.color;
  
}