// // 1-task
// let a = 8;
// let b = 10;
// let augment = 1;

// while(a <= b){
//     augment *= a;
//     a++;
// }

// console.log(augment);



// // 2-task
// let i = 5898151;
// let xonasoni = 0;

// while(i > 1){
//     i = i / 10;
//     xonasoni += 1;
// }

// console.log(xonasoni);



// // 3-task
// let n = 10;
// let multiply = 1;

// let i = 1;
// while(i <= n){
//     multiply *= i;
//     i++;
// }
// console.log(multiply);

// // 4-task
// let parol = prompt("Parolni kiriting");
// let togriparol = 15874;

// while(parol != togriparol){
//     parol = prompt("Parol notogri, qayta urunib koring");
// }

// while(parol == togriparol){
//     parol = alert("Parol togri");
// }



// 5-task
let n = parseInt(prompt("Enter n:"));
let yigindi = 0;
let counter = 0;
let numberr = 2;

while (counter < n) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(numberr); i++) {
    if (numberr % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    yigindi += numberr;
    counter++;
  }
  numberr++;
}

console.log("Yigindi: ", yigindi);


// // 6-task
// function teskariTartib(son) {
//     let teskari = parseInt(son.toString().split('').reverse().join(''));
//     return teskari;
// }

// // Test
// let berilganSon = 12345;
// let teskariNatija = teskariTartib(berilganSon);
// console.log(`Berilgan son: ${berilganSon}`);
// console.log(`Teskari tartibdagi natija: ${teskariNatija}`);

