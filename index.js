//SERDAR SIN UNERVISNING 1:
//Function


// // funksjoner
// function godmorgen() {
//     return "Hei"
// }

// console.log(godmorgen());

// // kombinere to tekster med function

// let tekst1 = "serdar"
// let tekst2 = "Durmus"
// console.log(tekst1+tekst2);

// //lag et javascript program som kombinerer to tekster. 

// function kombToTekster(tekst1, tekst2) {
//     return `${tekst1}${tekst2}`
// }

// console.log(kombToTekster(tekst1, tekst2));

// // skriv javascript-koden som viser tallene fra 5-8. (5 og 8 er inkludert)

// for (let i= 5; i < 9; i++) {
//     console.log(i);
// }

// //skriv en javascript-kode som viser tallene fra 5-8. (5 og 8 er inkludert)

// let startverdi = 5
// let startverdi = 8

// function for loop (startverdi, sluttverdi) {
//   //for (let i= 5; i < 9; i++) {
// //}
// for (let i = startverdi; i <=sluttverdi; i++) {
//     console.log(i)
// }
// return "Alle tallene er skrevet ut på skjermen"
// }
// console.log(forLoop(startverdi, sluttverdi));



//SKOLE OPPGAVER:

//Oppgave 1

// function tall(t1, t2, t3) {
// let t1 = Number(prompt("skriv tall1"))
// let t2 = Number(prompt("skriv tall2"))
// let t3 = Number(prompt("skriv tall3"))
// return (t1 + t2 + t3)

// }
// console.log(tall());


// // Oppgave 2

// function rndm() {
//   let tall1 = Math.round(Math.random() * 10);
//   let tall2 = Math.round(Math.random() * 10);

//   console.log(tall1);
//   console.log(tall2);

//   if (tall1 < tall2) {
//     console.log(tall1 + " er mindre enn " + tall2);
//   } else if (tall1 > tall2) {
//     console.log(tall1 + " er større enn " + tall2);
//   } else {
//     console.log(tall1 + " er lik " + tall2);
//   }
// }

// rndm();

// //Oppgave 3

// function kalkulator() {
//   let tall1 = Number(prompt("Skriv inn første tall:"));
//   let tall2 = Number(prompt("Skriv inn andre tall:"));
//   let operasjon = prompt("Velg operasjon (+, -, * eller /):");

//   let resultat;

//   if (operasjon === "+") {
//     resultat = tall1 + tall2;
//   } else if (operasjon === "-") {
//     resultat = tall1 - tall2;
//   } else if (operasjon === "*") {
//     resultat = tall1 * tall2;
//   } else if (operasjon === "/") {
//     resultat = tall1 / tall2;
//   } else {
//     resultat = "Ugyldig operasjon";
//   }

//   console.log("Resultat:", resultat);
// }

// //Oppgave 4

// function tilfeldigTall() {
//   let min = Number(prompt("Skriv inn minste tall:"));
//   let max = Number(prompt("Skriv inn største tall:"));

//   let tall = Math.floor(Math.random() * (max - min + 1)) + min;

//   let ferdig = false;
//   while (!ferdig) {
//     console.log("Tilfeldig tall:", tall);
//     ferdig = true;
//   }
// }

// tilfeldigTall();

// //Oppgave 5

// function sumTilfeldigeTall() {
//   let sum = 0;
//   let tallListe = [];

//   for (let i = 0; i < 10; i++) {
//     let tall = Math.floor(Math.random() * 20) + 1;
//     tallListe.push(tall);
//     sum += tall;
//   }

//   console.log(
//     "De tilfeldige tallene er: " +
//       tallListe.join(", ") +
//       ". Summen er " +
//       sum
//   );
// }

// sumTilfeldigeTall();

// //Oppgave 6

// function gjettTall() {
//   let riktigTall = Math.floor(Math.random() * 100) + 1;
//   let gjett = 0;

//   while (gjett !== riktigTall) {
//     gjett = Number(prompt("Gjett et tall mellom 1 og 100:"));

//     if (gjett < riktigTall) {
//       alert("Tallet er høyere.");
//     } else if (gjett > riktigTall) {
//       alert("Tallet er lavere.");
//     } else {
//       alert("Du gjettet riktig.");
//     }
//   }
// }

// gjettTall();
// // test

// //Oppgave 7

// function tallOverTi() {
//   let storeTall = [];

//   for (let i = 0; i < 5; i++) {
//     let tall = Number(prompt("Skriv inn et tall:"));

//     if (tall > 10) {
//       storeTall.push(tall);
//     }
//   }

//   alert("Tallene over 10 er: " + storeTall.join(", "));
// }

// tallOverTi();

// //Oppgave 8

// function kastTerninger() {
//   let kast = 0;
//   let terning1 = 0;
//   let terning2 = 0;

//   while (terning1 !== 6 || terning2 !== 6) {
//     terning1 = Math.floor(Math.random() * 6) + 1;
//     terning2 = Math.floor(Math.random() * 6) + 1;
//     kast++;

//     console.log("Kast:", terning1, terning2);
//   }

//   console.log("Begge ble 6 etter", kast, "kast.");
// }

// kastTerninger();




//SERDAR UNERVISNING 2
//ARRAY

// var xxx = 3;
// console.log(typeof(xxx)); //number

// var yyy = "3"
// console.log(typeof(yyy)); //string

// var zzz = true;
// console.log(typeof(zzz));

// let arr= ["appelsin", "banana", "madarin", "kiwi"]

// //vi kan få tilgang til elementene i array.
// console.log(arr[0]);

// //Å endre verdien
// arr[5] = "druer"
// console.log(arr[2]);
// console.log(arr);

// //length property
// console.log(arr.length);

// //sort() method
// let arr2 = [3,1,2,9,5,4]
// console.log(arr2.sort());

// let arr3 = [20, 3, "1", "44", "Danylo", "alaa", "Bare"]
// console.log(arr3.sort());



// //foreach loop
// let numbers = [1,2,5,9,3,7,4]

// numbers.forEach(element => {
//   console.log(element*element);
// });


// //for-of loop
// for (const element of numbers) {
//   console.log(element*element);
// }




//SKOLE OPPGAVER TIL ARRAY





