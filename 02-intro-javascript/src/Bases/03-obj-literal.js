const persona = {
    nombre: 'Tony',
    apellido: 'cano',
    edad: 45,
    direccion: {
        cidad: 'New York',
        zip: 25468,
        lat: 12548,
        lng: 3689
    }
};

//console.table(persona);

const persona2 = { ...persona };
persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2);