//1
let colores = ['Blanco', 'Negro', 'Azul', 'Violeta', 'Rojo' ] ;
console.log(colores) ; 

//2
console.log(colores[0]);
console.log(colores[colores.length - 1]);

//3
console.log(colores.length) ;

//4
colores.push('Rosa') ;
console.log(colores) ; 

//5
colores.unshift('Amarillo');
console.log(colores) ; 

//6
colores.pop(colores);
console.log(colores) ; 

//7
colores.shift(colores);
console.log(colores) ; 

//8
colores[1] = "Naranja";
console.log(colores) ; 

//9
for (let i = 0; i < colores.length; i++) {
    console.log (colores[i]);
}

//10
let nuevosColores = [];

for (let i = 0; i < 3; i++) {
  let color = prompt(`Ingresá el color número ${i + 1}:`);
  nuevosColores.push(color);
}

console.log("Colores ingresados:", nuevosColores);

