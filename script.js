let name = prompt("Ismingizni kiriting");
let xozir = +prompt("Xozirgi yilni kiriting");
let oldin = +prompt("tug'ilgan yilingizni kiriting");

function summ(xozir, oldin) {
    return xozir - oldin
}
console.log
(name + ", sizning yoshingiz" + summ(xozir, oldin));



 let count = +prompt("Nechta misol ishlamoqchisiz?");


function randomMisol() {
let a = Math.floor(Math.random() * 10) + 1;
let b = Math.floor(Math.random() * 10) + 1;
let amallar = ["+", "-", "*", "/"];
let amal = amallar[Math.floor(Math.random() * amallar.length)];


let correct;
if (amal === "+") correct = a + b;
else if (amal === "-") correct = a - b;
else if (amal === "*") correct = a * b;
else correct = +(a / b).toFixed(2);


return { a, b, amal, correct };
}


let i = 1;
while (i <= count) {
let m = randomMisol();
let userAnswer = +prompt(`${m.a} ${m.amal} ${m.b} = ?`);


if (userAnswer === m.correct) {
console.log(`Sizning javobingiz to‘g‘ri — ${m.correct}`);
} else {
console.log(`Sizning javobingiz noto‘g‘ri — ${userAnswer}, to‘g‘ri javob — ${m.correct}`);
}


i++;
}




