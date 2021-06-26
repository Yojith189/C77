var fruits=["mango","apple","sitafal"];
fruits.push("banana");

console.log(fruits);
document.getElementById("ex1").innerHTML=fruits;
var number=["92","189","678"];
number.push("192929389283");
var max_number=Math.max.apply(Math,number);

console.log(max_number);
document.getElementById("ex2").innerHTML=max_number;