const saludar = function(nombre){
    return `Hola ${nombre}`;
}
const saludar2 = (nombre) =>{
    return `Hola ${nombre}`;
}
const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Trunks'));
console.log(saludar4());

const getUser = () =>
    ( {
        uid: 'ABC1234',
        username: 'papi123'
    });

console.log(getUser());

//Tarea
/*function getUsuarioActivo(nombre){
    return{
        uid: 'asfdsg',
        name: nombre
    }
}*/
const getUsuarioActivo = (nombre) => ({
    uid:'1234',
    name: nombre
});

const usuarioActivo = getUsuarioActivo('Antonio');
console.log(usuarioActivo);