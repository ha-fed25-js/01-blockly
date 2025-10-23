/*
let books = ['Lord of the rings', 'Harry Potter', 'I am Zlatan'];
console.log(books)
console.log((books[1]))
books[3] = 'Pippi Långstrump';
console.log(books)
*/

//   ()  vanliga runda
//   {}  blockparenteser, curly braces
//   []  hakparanteser, square brackets


let prices, sum, index;


prices = [10, 5, 15, 20, 1, 100, 5000];
sum = 0;
var index_end = prices.length;
var index_inc = 1;
if (1 > index_end) {
  index_inc = -index_inc;
}
for (index = 1; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
  sum = sum + prices[(index - 1)];
}
console.log(('Summan av alla talen i listan är:' + String(sum)))
