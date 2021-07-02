var canvas = document.getElementById("canvasToDraw");

var ctx = canvas.getContext("2d");

ctx.moveTo(0, 0);

ctx.lineTo(200, 100);

ctx.stroke();

const ladoCuadrado = 5;
console.log("Lados del cuadrado " + ladoCuadrado + "cm");

const perimetroCuadrado = 4 * ladoCuadrado;

console.log(`Perimetro = ${perimetroCuadrado} cm`);

const areaCuadrado = Math.pow(ladoCuadrado, 2);

console.log(`Area = ${areaCuadrado} cm^2`);


console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
console.log("El perímetro del triángulo es: " + perimetroTriangulo(1, 2, 3) + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo(2, 3) + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.log(`Diametro: ${diametroCirculo(radioCirculo)}`);
console.log(`Perimetro: ${perimetroCirculo(radioCirculo)}`);
console.log(`Area: ${areaCirculo(radioCirculo)}`);

console.groupEnd();