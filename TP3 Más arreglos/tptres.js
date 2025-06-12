//1
let animales = ["perro", "gato", "conejo", "loro"];

for (let i = 0; i < animales.length; i++) {
    console.log(animales[i]);
}

//2
for (let i = 0 ; i < animales.length; i++) {
    console.log(animales[i + 1]) };

//3
let numeros = [4, 7, 2, 9, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma = suma + numeros[i];
}

console.log("La suma es " + suma);

//4
let datos = [3, 6, 1, 8];
let resultado = [];

for (let i = 0; i < datos.length; i++) {
  resultado.push(datos[i] * 2);
}

console.log(resultado);

//5
let alumnos = ["Sofía", "Carlos", "Bruno", "Lucía", "Carla"];

let buscarnombre = prompt("Ingresá un nombre para buscar:");

if (alumnos.includes(buscarnombre)) {
  console.log("El nombre esta en la lista.");
} else {
  console.log("El nombre no esta en la lista.");
}

//6
let valores = [5, 0, 8, 0, 2];

for (let i = 0; i < valores.length; i++) {
  if (valores[i] === 0) {
    valores[i] = 100;
  }
}

console.log(valores);

//10
let notas = [8, 7, 9, 10, 6];

let suma = 0;
for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}

let promedio = suma / notas.length;

console.log("El promedio es", promedio);