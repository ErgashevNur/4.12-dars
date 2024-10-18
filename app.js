// 1
// const products = [
//   { name: "Laptop", price: 1000, sales: 150 },
//   { name: "Phone", price: 500, sales: 300 },
//   { name: "Watch", price: 200, sales: 100 },
// ];

// const allproducts = products.sort((acc, curVal) => acc.sales - curVal.sales);

// console.log(allproducts);

// 2
// const students = [
//   { name: "Akmal", grades: [85, 90, 80] },
//   { name: "Salim", grades: [60, 70, 65] },
//   { name: "Nozim", grades: [50, 40, 55] },
// ];

// const grade = students.filter((acc) => {
//   const baxo =
//     acc.grades.reduce((acc, grade) => acc + grade, 0) / acc.grades.length;
//   return baxo < 70;
// });

// console.log(grade);

// 3
// const products = [
//   { name: "Laptop", price: 1000, quantity: 2 },
//   { name: "Phone", price: 500, quantity: 3 },
//   { name: "Shoes", price: 100, quantity: 4 },
// ];

// const num = products.map((acc) => ({
//   ...acc,
//   allPrice: acc.price * acc.quantity,
// }));

// console.log(num);

// 4
// const products = [
//   { name: "Laptop", price: 1000, quantity: 2, tax: 100 },
//   { name: "Phone", price: 500, quantity: 3, tax: 50 },
//   { name: "Shoes", price: 100, quantity: 4, tax: 10 },
// ];

// const num = products.map((acc) => ({
//   ...acc,
//   allPrice: (acc.price + acc.tax) * acc.quantity,
// }));
// console.log(num);

// 5
// const books = [
//   { title: "Book A", author: "Author A" },
//   { title: "Book B", author: "Author A" },
//   { title: "Book C", author: "Author B" },
//   { title: "Book D", author: "Author C" },
// ];

// const book = books.reduce((acc, curVal) => {
//   if (!acc[curVal.author]) {
//     acc[curVal.author] = [];
//   }
//   acc[curVal.author].push(curVal.title);
//   return acc;
// }, {});
// console.log(book);

// 6
// const dates = [
//   { event: "Event A", date: new Date("2023-10-01") },
//   { event: "Event B", date: new Date("2022-12-15") },
//   { event: "Event C", date: new Date("2024-01-10") },
// ];

// const num = dates.sort((acc, curVal) => acc.date - curVal.date);

// console.log(num);

// 7
// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Shoes", price: 100 },
// ];

// const num = products.reduce((acc, curVal) => acc + curVal.price, 0);
// const middlePrice = num / products.length;

// console.log(middlePrice);

// 8
// const books = [
//   { title: "Book A", year: 2001 },
//   { title: "Book B", year: 1995 },
//   { title: "Book C", year: 2010 },
//   { title: "Book D", year: 2020 },
// ];

// const num = books.sort((acc, curVal) => acc.year - curVal.year);

// console.log(num);

// 9
// const products = [
//   { name: "Laptop", price: 1000, sold: false },
//   { name: "Phone", price: 500, sold: false },
//   { name: "Shoes", price: 100, sold: false },
// ];

// const result = products.map((product) => {
//   return { ...product, sold: product.sold || true };
// });
// console.log(result);

// 10
// const products = [
//   { name: "Laptop", price: 1000, quantity: 2 },
//   { name: "Phone", price: 500, quantity: 3 },
//   { name: "Shoes", price: 100, quantity: 4 },
// ];

// const num = products.map((acc) => ({
//   ...acc,
//   allPrice: acc.price * acc.quantity,
// }));

// const total = num.reduce((acc, curVal) => acc + curVal.allPrice, 0);

// console.log("Umumiy mahsulotlar narxi - ", total);

// 11
// const products = [
//   { name: "Laptop", quantity: 2 },
//   { name: "Phone", quantity: 3 },
//   { name: "Laptop", quantity: 1 },
//   { name: "Shoes", quantity: 4 },
// ];

// const num = products.reduce((acc, curVal) => {
//   if (acc[curVal.name]) {
//     acc[curVal.name].quantity += curVal.quantity;
//   } else {
//     acc[curVal.name] = { ...curVal };
//   }
//   return acc;
// }, {});

// console.log(num);

// 12
// const products = [
//   { name: "Laptop", category: "Electronics" },
//   { name: "Phone", category: "Electronics" },
//   { name: "Shoes", category: "Fashion" },
// ];

// const num = products.reduce((acc, curVal) => {
//   const { category } = curVal;

//   if (!acc[category]) {
//     acc[category] = [];
//   }

//   acc[category].push(curVal);
//   return acc;
// }, {});

// console.log(num);
