let estudiantes = [
    {
        nombre: "Lourdes",
        apellido: "Bray Caballero",
        edad: 16 ,
        Nota: 10
    }, 

    {
        nombre: "Martina",
        apellido: "Semper",
        edad: 16 ,
        nota: 9
    }
,
    {
        nombre: "Martina",
        apellido: "Ferrando",
        edad: 16 ,
        nota: 8
    }
,
    {
        nombre: "Camilo",
        apellido: "Yorgovan",
        edad: 16 ,
        nota: 7
    }
,
    {
        nombre: "Sasha",
        apellido: "Cisneros",
        edad: 16 ,
        nota: 10
    }
]

for (let indice = 0; indice < estudiantes.length; indice++) {
    //Mostrar todos los elementos del arreglo
    console.log(estudiantes[indice].apellido + ' ' + estudiantes[indice].nombre) }