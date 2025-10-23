// console.log(10)
// console.log(11)
// console.log(12)
// console.log(13)
// console.log(14)
// console.log(15)

/*
let index = 1;
while (index <= 100) {
console.log(index)
index = index + 1;
}
*/


/*
let x, y, z;
x = 3;
y = 4;
z = 5;
console.log((x + y + z))  // 12
console.log((x * y * z))  // 60
*/

/*
var villkor;


villkor = true;
if (villkor == false) {
console.log('Villkoret är sant')
} else {
	console.log('Villkoret är falskt')
}
*/

/*
let x = 3;
x = x * 5;  // 15
if (x > 10) {
console.log('Stort')
} else {
	console.log('Litet')
}
*/

// Uppgift 1.20
let timme = 0;
while (timme < 24) {
	if (timme == 12) {
		console.log('Dags för lunch!')
	} else if (timme >= 9 && timme <= 11) {
		console.log('Förmiddagslektion')
	} else if (timme >= 13 && timme <= 15) {
		console.log('Eftermiddagslektion')
	} else {
		console.log(timme)
	}
	timme = timme + 1;
}
